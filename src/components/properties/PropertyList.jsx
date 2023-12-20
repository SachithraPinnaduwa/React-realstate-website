import React, { useState } from 'react';
import { useEffect } from 'react';
import Property from './Property';

export default function PropertyList({properties,childValue}) {
   

    return (
        <div className='text-black'>
            {
                properties.filter((property) => {
                    return (
                        !childValue ||
                        (property &&
                            property.location &&
                            property.location.toLowerCase().includes(childValue.toLowerCase())) 
                            //here if the childValue is empty then it will return all the properties
                    );
                }).map((property) => (
                    <Property key={property.id} {...property} />
                ))
            
      
        // properties.map((property) => (
        //     <Property key={property.id} {...property} />
        //     ))
        }
        </div>
    );
}
