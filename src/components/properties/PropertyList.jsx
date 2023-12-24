import React from 'react';
import Property from './Property';

export default function PropertyList({ properties, handlePressChangeFavourites}) {
  return (
    <div className="text-black">
      {properties
        .map((property) => (
          <Property
            key={property.id}
            {...property}
            handlePressChangeFavourites={handlePressChangeFavourites}
          />
        ))}
    </div>
  );
}
