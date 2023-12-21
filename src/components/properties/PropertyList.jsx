import React from 'react';
import Property from './Property';

export default function PropertyList({ properties, childValue = "" , handlePressChange}) {
  return (
    <div className="text-black">
      {properties
        .map((property) => (
          <Property
            key={property.id}
            {...property}
            handlePressChange={handlePressChange}
          />
        ))}
    </div>
  );
}
