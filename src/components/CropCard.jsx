// CropCard.js
import React, { useState } from "react";

const CropCard = ({ crop,onCardClick }) => {
 
  return (
    <>
      <div
        className="bg-white rounded-xl shadow-xl cursor-pointer flex flex-col p-10 my-4 items-center justify-center"
        onClick={() => onCardClick(crop.thumbnails[0].image)}
      >
        
        <img
          src={crop.thumbnails[0].image}
          alt={crop.crop_name}
          className="h-48 w-48"
        />

        <p className="text-center mt-2 bg-green-400 h-10 rounded-3xl w-48 text-lg font-bold text-white items-center flex justify-center ">
          {crop.crop_name}
        </p>
      </div>

    </>
  );
};

export default CropCard;
