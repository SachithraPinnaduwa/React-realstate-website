import React, { useState } from 'react';
import { useEffect } from 'react';
import Property from './Property';

export default function PropertyList({properties,setProperties}) {
   

    return (
        <div>
            {
            properties.map((property) => (
        
         <Property key={property.id} {...property} />
        ))
        }
        </div>
    );
}
