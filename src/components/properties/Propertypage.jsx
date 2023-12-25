import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function Propertypage({ handlePressChangeFavourites,pressed,setPressed }) {
  const { id } = useParams();
  const [property, setProperty] = useState("");

  const [activeTab, setActiveTab] = useState(1);
  const  images = [
    {
      url: "src/assets/apartment.jpg"
    },
    {
      url: "../src/assets/property/prop1/house2.jpeg"
    },
    {
      url: "../src/assets/property/prop1/house3.jpeg"
    },
    {
      url: "../src/assets/property/prop1/house4.jpeg"
    },
    {
      url: "../src/assets/property/prop1/house5.jpeg"
    },
    {
      url: "../src/assets/property/prop1/house6.jpeg"
    },
    {
      url: "../src/assets/property/prop1/house7.jpeg"
    },];

  const  [currentImage, setCurrentImage] = useState(0)
  const prevImage = () => {
    const  isFirstImage = currentImage === 0
    const newIndex = isFirstImage ? images.length - 1 : currentImage - 1
    setCurrentImage(newIndex)
  }
  const  nextImage = () => {
    const isLastImage = currentImage === images.length - 1
    const newIndex = isLastImage ? 0 : currentImage + 1
    setCurrentImage(newIndex)
  }


  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    // Fetch property data based on the ID
    const fetchData = async () => {
      try {
        const response = await fetch(`../../public/properties.json`);
        const data = await response.json();
        const selectedProperty = data.find((prop) => prop.id === id);
        setProperty(selectedProperty)
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, [id]);

  const buttonClickAction = () => {
    setPressed(!pressed);
    handlePressChangeFavourites(property.id);
  }
console.log(id? id: "No identity")
  return (
    <div className="max-w-[1240px]  mx-auto my-10 sm:justify-center">
      {property && (
          <div>
            {property.picture  ? (
                <div className="max-w-[1000px] h-[600px] w-full m-auto  px-4 relative">
                  <div style={{backgroundImage: `url(${property.picture[currentImage]})`}}
                       className="w-full h-full rounded-3xl bg-center bg-cover duration-500">

                  </div>

                  <div
                      className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <FaChevronLeft size={30} onClick={prevImage}/>
                  </div>
                  <div
                      className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <FaChevronRight size={30} onClick={nextImage}/>
                  </div>
                </div>
            ) : (
                <p>No picture</p>
            )}

            <div className="grid grid-flow-col">


              <div className="ml-10 mt-5 text-xl">
                <h1> Tenure: <span className="font-bold">{property.tenure || "No tenure"}</span></h1>
                <p className="mt-10">
                  Property price <span className="font-bold">{property.price || "No price"}</span>
                </p>
              </div>


              <div className="mt-5 mr-10 grid grid-flow-row">
                <div>
                  <button
                      onClick={() => {
                        buttonClickAction();
                      }}
                      className="float-right"
                  >
                    {!pressed ? (
                        <CiHeart
                            size={30}
                            className="text-teal-500 font-extrabold hover:cursor-pointer hover:text-teal-600"
                            style={{strokeWidth: 1.5}}
                        />
                    ) : (
                        <FaHeart
                            size={30}
                            className="text-teal-500 font-extrabold hover:cursor-pointer hover:text-teal-600"
                        />
                    )}
                  </button>
                </div>
                <div className="mt-10">
                  <p className="float-right font-light text-xl">
                    Added on:{" "}
                    <span className="font-bold text-xl">
                    {property.added
                        ? `${property.added.day || "No day"} ${property.added.month || "No month"} ${property.added.year || "No year"}`
                        : "No date"}
                  </span>{" "}
                  </p>
                </div>
              </div>


            </div>

            <div className="border-b-4 my-4"></div>


            {/*second row*/}
            <div className="flex flex-row mx-auto">
              <div className="mr-auto">
                <p className="text-xl ml-10 mt-5">
                  Property type: <span className="font-bold text-xl">{property.type || "No type"}</span>
                </p>
              </div>
              <div className="ml-auto">
                <p className="text-xl mr-10 mt-5">
                  Bedrooms: <span className="font-bold text-xl">{property.bedrooms || "No bedrooms"}</span>
                </p>
              </div>
            </div>


            <div className="border-b-4 my-4"></div>

            {/*tab group*/}
            <div className=" mx-auto px-8 sm:px-0">
              <div className=" w-full mx-auto">
                <div

                    className=" w-max mx-auto h-auto grid grid-cols-3 items-center  bg-gray-100 overflow-hidden   transition"
                >
                  <div className="absolute indicator  my-auto top-0 bottom-0 left-0  bg-white  transition"
                  ></div>
                  <button
                      onClick={() => handleTabClick(1)}

                      aria-selected={activeTab === 1}

                      className={`relative block h-10 px-6 tab  ${
                          activeTab === 1 ? 'bg-gray-500' : ''
                      }`}
                  >
                    Long Description
                  </button>
                  <button
                      onClick={() => handleTabClick(2)}

                      aria-selected={activeTab === 2}

                      className={`relative block h-10 px-6 tab  ${
                          activeTab === 2 ? 'bg-gray-500' : ''
                      }`}
                  >
                    Floor Plan
                  </button>
                  <button
                      onClick={() => handleTabClick(3)}

                      aria-selected={activeTab === 3}

                      className={`relative block h-10 px-6 tab  ${
                          activeTab === 3 ? 'bg-gray-500' : ''
                      }`}
                  >
                    Google Map
                  </button>
                </div>

                <div className="mt-6 relative  bg-purple-50">
                  <div

                      className={`tab-panel p-6 transition duration-300 ${
                          activeTab === 1 ? '' : 'hidden'
                      }`}
                  >

                    <p className="mt-4 text-gray-600">
                      {property.description || "No description"}
                    </p>
                  </div>
                  <div

                      className={`tab-panel p-6 transition duration-300 ${
                          activeTab === 2 ? '' : 'hidden'
                      }`}
                  >

                    <div className="lg:visible   sm:block ">
                      {property.picture  ? (
                          <img src={property.picture[7]} alt="Property Plan" className="w-[410px] mx-auto"/>
                      ) : (
                          <p>No picture</p>
                      )}
                      {/* Additional property details can be added here */}
                    </div>
                  </div>
                  <div

                      className={`tab-panel p-6 transition duration-300 ${
                          activeTab === 3 ? '' : 'hidden'
                      }`}
                  >

                    <p className="mt-4 text-gray-600">
                      Google Map
                    </p>
                  </div>

                </div>


              </div>
            </div>
          </div>
      )}


    </div>
  );
}
