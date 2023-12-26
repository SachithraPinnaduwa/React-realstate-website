import React, {useEffect, useState} from 'react';
import { useForm,useFieldArray } from 'react-hook-form';
const SearchForm = ({properties,fetchDat,formData,setFormData}) => {
  const form = useForm({
    defaultValues: {
      propertytype: "any",

      date: new Date("2000-09-14T00:00:00.000Z"),
      bedrooms:{
        bedroomsmin: 0,
        bedroomsmax: 0,
      } ,
      price: {
        pricemin: 0,
        pricemax: 0,
      }
    }
  })
  const {register,control,handleSubmit,formState} = form

  const {errors} = formState
  const  {fields,append,remove}  = useFieldArray({

    control,
  })

  const onSubmit = (data) => {

    setFormData(
        {
          propertytype: data.propertytype,

          date: data.date,
          bedrooms:{
            bedroomsmin: data.bedrooms.bedroomsmin,
            bedroomsmax: data.bedrooms.bedroomsmax,
          } ,
          price: {
            pricemin: data.price.pricemin,
            pricemax: data.price.pricemax,
          }
        }
    )
    // Perform your search based on the "searchTerm" state
    fetchDat()


  };
  useEffect(() => {
    console.log('Updated formData:', formData);
  }, [formData]);

  const handleSubmitButton = (event) => {
    event.preventDefault();
  }


  return (
    <div className='max-w-[1240px] mx-auto lg:min-w-[800px] p-4'>
      <form
          onSubmit={handleSubmit(onSubmit)} noValidate
          className="grid grid-cols-1 md:grid-cols-2 rounded-md p-4"
      >
        {/* Date added */}
        <div className="my-5 md:flex items-center">
          <label
              className="block  font-medium text-black md:mr-auto md:ml-6 text-xl"
              htmlFor="date">Date added</label>
          <input type="date" id="date"
                 className="w-[50%]  rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2 md:mt-0 md:ml-2"

                 {...register("date",
                     {
                       valueAsDate: true,

                     }
                 )}/>


        </div>

        {/* Property type */}
        <div className="my-5 md:flex items-center">
          <label htmlFor="propertytype" className="block  font-medium text-black md:mr-auto md:ml-6 text-xl">Property type</label>
          <select
              id="propertytype"
              name="propertytype"

              className="w-[50%] rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2 md:mt-0 md:ml-2"
                {...register("propertytype",
                    {
                      required: {
                        value: true,
                        message: "Type is required"
                      },
                    }) }
              defaultValue="any"
          >

            <option value="house">House</option>
            <option value="flat">Flat</option>
            <option   value="any">Any</option>
          </select>
        </div>




        {/* Price range */}
        <div className="my-5 md:flex items-center md:flex-row">
          <label
              className="block  font-medium text-black md:mr-auto md:ml-6 text-xl"
              >Price</label>
          <div>
          <div className=" items-center mt-2 md:mt-0 md:ml-2">
            <label
                className="block text-sm font-medium text-black"
                htmlFor="pricemin">Price min</label>

            <input type="number"
                   className="w-full rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2"
                   id="pricemin" placeholder={errors.pricemin?.message}
                   {...register("price.pricemin",
                       {
                         valueAsNumber: true,
                         required: {
                           value: true,
                           message: "Price is required"
                         },
                       }
                   )}/>
          </div>
          <div className=" items-center mt-2 md:mt-0 md:ml-2">
            <label
                className="block text-sm font-medium text-black"
                htmlFor="price">Price max</label>
            <input type="number"
                   className="w-full rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2"
                   id="pricemax" placeholder={errors.pricemax?.message}
                   {...register("price.pricemax",
                       {
                         valueAsNumber: true,
                         required: {
                           value: true,
                           message: "Price is required"
                         },
                       }
                   )}/>
          </div>
          </div>
        </div>


        {/* Number of bedrooms */}
        <div className="my-5 md:flex items-center md:flex-row">
          <label
              className="block text-xl font-medium text-black md:mr-auto md:ml-6"
          >Bedrooms</label>
      <div>
          <div className=" items-center mt-2 md:mt-0 md:ml-2 ">

            <label
                className="block text-sm font-medium text-black mr-3"
                htmlFor="bedroomsmin">Min number of bedrooms</label>
            <input

                className="w-full rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2"
                type="number" id="bedroomsmin" placeholder={errors.bedroomsmin?.message}
                {...register("bedrooms.bedroomsmin", {valueAsNumber: true})}/>
          </div>
          <div className=" items-center mt-2 md:mt-0 md:ml-2 ">

            <label
                className="block text-sm font-medium text-black mr-3"
                htmlFor="bedroomsmax">Max number of bedrooms</label>
            <input

                className="w-full rounded-md border border-gray-600 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-10 mt-2"
                type="number" id="bedroomsmax" placeholder={errors.bedroomsmax?.message}
                {...register("bedrooms.bedroomsmax", {valueAsNumber: true,})}/>
          </div>
      </div>
        </div>

        <div></div>
        <div className=" ml-auto mt-6 ">
          <button className='bg-[#000300] w-[200px] rounded-md font-medium py-3 text-green-600'

          >
            Search
          </button>
        </div>

      </form>


    </div>
  );
};

export default SearchForm;
