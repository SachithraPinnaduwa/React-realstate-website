import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Propertypage() {
  const { id } = useParams();
  const [property, setProperty] = useState("");
  const [pressed, setPressed] = useState(false);

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
console.log(id? id: "No identity")
  return (
    <div className="max-w-[1240px] md:grid md:grid-cols-3 mx-auto my-10 sm:justify-center">
      {property && (
        <div className="col-span-2">
          {property.picture && property.picture.small ? (
            <img src={property.picture.medium} alt="Property" className="w-[820px] mx-auto" />
          ) : (
            <p>No picture</p>
          )}

          <div className="grid grid-flow-col">
            <div className="ml-10 mt-5">
              <h1>{property.type || "No type"}</h1>
              <p className="mt-10">
                Property price <span className="font-bold">{property.price || "No price"}</span>
              </p>
            </div>

            <div className="mt-5 mr-10 grid grid-flow-row">
              <div>
                <button
                  onClick={() => {
                    setPressed(!pressed);
                  }}
                  className="float-right"
                >
                  {!pressed ? (
                    <CiHeart
                      size={30}
                      className="text-teal-500 font-extrabold hover:cursor-pointer hover:text-teal-600"
                      style={{ strokeWidth: 1.5 }}
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
                <p className="float-right font-light text-sm">
                  Added on:{" "}
                  <span className="font-bold text-sm">
                    {property.added
                      ? `${property.added.day || "No day"} ${property.added.month || "No month"} ${property.added.year || "No year"}`
                      : "No date"}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="border-b-4 my-4"></div>

          <div className="grid grid-flow-col">
            <div>
              <p className="text-base ml-10 mt-5">
                Property type<p className="font-bold text-xl">{property.type || "No type"}</p>
              </p>
            </div>
            <div className="float-right">
              <p className="text-base mt-5">
                Bedrooms<p className="font-bold text-xl">{property.bedrooms || "No bedrooms"}</p>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="lg:visible mt-10 sm:mt-0 sm:block ">
        {property.picture && property.picture.plan ? (
          <img src={property.picture.plan} alt="Property Plan" className="w-[410px] mx-auto" />
        ) : (
          <p>No picture</p>
        )}
        {/* Additional property details can be added here */}
      </div>
    </div>
  );
}
