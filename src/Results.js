import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map(pet => {
          const {
            type,
            id,
            name,
            breeds,
            photos,
            contact: { address }
          } = pet;

          return (
            <Pet
              animal={type}
              key={id}
              id={id}
              name={name}
              breed={breeds.primary}
              media={photos}
              location={`${address.city}, ${address.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
