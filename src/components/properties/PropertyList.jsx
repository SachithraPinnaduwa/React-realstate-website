import React from 'react';
import Property from './Property';

export default function PropertyList({ properties, handlePressChangeFavourites,
                           pressed, setPressed, ids, setIds
}) {
  return (
    <div className="text-black">
      {properties
        .map((property) => (
          <Property
            key={property.id}
            {...property}
            handlePressChangeFavourites={handlePressChangeFavourites}
            pressed={pressed} setPressed={setPressed} ids={ids} setIds={setIds}
          />
        ))}
    </div>
  );
}
