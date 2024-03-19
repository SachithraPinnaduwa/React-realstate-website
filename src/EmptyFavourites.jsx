import React from 'react';
import { Link } from 'react-router-dom';

const EmptyFavorites = () => {
  // You can replace this with real property data from your state or props.
  const recommendedProperties = [
    { id: 1, title: 'Cozy Cottage', price: '250,000' },
    { id: 2, title: 'Urban Apartment', price: '350,000' },
    // Add more recommended properties as needed.
  ];

  return (
    <div className="container mx-auto text-center p-10">
      <div className="my-10">
        <div className="inline-block bg-gray-100 p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-5">Your Favourites are Empty</h2>
          <p className="mb-5">It looks like you haven't added any properties to your favorites yet.</p>
          <Link to="/search" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors mr-2">
            Browse Properties
          </Link>
          <Link to="/" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
            Start Your Search
          </Link>
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-xl font-semibold mb-5">Recommended for you:</h3>
        <div className="flex justify-center flex-wrap gap-5">
          {recommendedProperties.map((property) => (
            <div key={property.id} className="w-64 p-5 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-semibold">{property.title}</h4>
              <p className="text-gray-800">${property.price}</p>
              <button className="mt-3 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition-colors">
                Add to Favourites
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmptyFavorites;
