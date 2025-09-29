import React, { useState } from "react";

const ProductDescription = () => {
  const [showFull, setShowFull] = useState(false);

  // Demo description: Lorem ipsum 500 words (for simplicity, repeated)
  const description = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `.repeat(25); // repeated to make ~500 words

  const words = description.split(" ");
  const shortDescription = words.slice(0, 250).join(" ");
  const fullDescription = words.slice(0, 500).join(" ");

  return (
    <div>
    <div className="p-4 mt-6 rounded shadow w-2/3 bg-white ">
      <h2 className="font-bold mb-2 text-3xl text-gray-800">Description</h2>
      <p>
        {showFull
          ? fullDescription
          : shortDescription + (words.length > 250 ? "..." : "")}
      </p>
      {words.length > 250 && (
        <button
          className="mt-2 text-gray-700 bg-gray-300 py-2 px-4 rounded font-semibold"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "See Less " : "See More "}
        </button>
      )}
    </div>
    <div className="p-4 mt-6 rounded shadow w-2/3 bg-white ">
      <h2 className="font-bold mb-2 text-3xl text-gray-800">Specification</h2>
      <p>
        {showFull
          ? fullDescription
          : shortDescription + (words.length > 250 ? "..." : "")}
      </p>
      {words.length > 250 && (
        <button
          className="mt-2 text-gray-700 bg-gray-300 py-2 px-4 rounded flex justify-center items-center font-semibold"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "See Less " : "See More "}
        </button>
      )}
    </div>
    </div>
  );
};

export default ProductDescription;
