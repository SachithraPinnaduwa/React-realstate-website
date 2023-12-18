import React from "react";
import { useParams } from "react-router-dom";
import house from "../../assets/property/house.jpeg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Property() {
  const { id } = useParams();
  const [pressed, setPressed] = useState(false);
  return (
    <div className="grid md:grid-flow-col border-8 border-teal-500 sm:grid-flow-row bg-slate-100 m-5 rounded-xl">
      <div>
        <img src={house} className="w-70 h-80" alt="house" />
      </div>
      <div>
        <div className="flex flex-row ml-10 justify-center mt-4">
          <h1 className="ml-5">Property Name</h1>
          <h1 className="ml-5">Property Location</h1>
        </div>
        <p className="ml-10 mt-5">
          Located on the modern development of Valley Mews is this second floor
          apartment. There is open plan living accommodation with Juliette
          balcony looking out to surrounding Saddleworth countryside and modern
          shower room. Internally accessed from a communal hallway via stairs
          into the apartment hallway which has an intercom entry system. There
          is an open plan lounge through kitchen, two bedrooms and shower room.
        </p>
        <h1 className="ml-10 mt-5 mb-6">Property Price</h1>
        <div>

          <div className="flex flex-row float-right mb-10">
          <Link to="/search/1" className="text-3xl font-bold text-emerald-500 ">
          <button
              type="submit"
              className="flex-none rounded-md bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 mx-10"
            >
              Visit
            </button>
         </Link>
          
            <button
              onClick={() => {
                setPressed(!pressed);
              }}
            >
              {!pressed ? (
                <CiHeart
                  size={30}
                  className="text-teal-500 font-extrabold mr-20 ml-10 hover:cursor-pointer hover:text-teal-600 "
                  style={{ strokeWidth: 1.5 }}
                />
              ) : (
                <FaHeart
                  size={30}
                  className="text-teal-500 font-extrabold mr-20 ml-10 hover:cursor-pointer hover:text-teal-600 "
                />
              )}
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
