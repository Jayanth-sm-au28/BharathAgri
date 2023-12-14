import React, { useEffect, useState } from "react";
import axios from "axios";
import CropCard from "./CropCard";
const DashBoard = () => {
  const [content, setContent] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
const [item,setItem]=useState("");
const [filteredData,setFilteredData]=useState([])
  const handleCardClick = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    axios
      .get(
        "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"
      )
      .then((resp) => {
        setContent(resp.data.data);
        setFilteredData(resp.data.data)
      });
  }, []);
  useEffect(() => {
    const data=content.filter((crop)=>crop.crop_name.toLowerCase().startsWith(item.toLowerCase()));
    setFilteredData(data)
  },);

  function handleChange(e) {

    setItem(e.target.value)
    
  }
  return (
    <div className="w-full bg-blue-50 h-screen">
        <div className="py-4 px-10 w-full bg-blue-50 sticky top-0 z-10">
    <input
      type="text"
      value={item}
      name="crop"
      onChange={handleChange}
      placeholder="Enter Crop name"
      className="h-10 w-60 rounded-l-full rounded-r-full bg-white shadow-md outline-none text-center"
    />
  </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-8 scroll-smooth overflow-hidden bg-blue-50">
        {filteredData.map((crop) => (
          <CropCard key={crop.id} crop={crop} onCardClick={handleCardClick} />
        ))}
        {isModalOpen && (
          <div className="fixed top-0 right-0 left-0 z-40 flex items-center justify-center w-full h-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-50">
            <div className="p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-end">
                {" "}
                <button
                  type="button"
                  className="inline-flex text-gray-400 bg-transparent hover:bg-green-400 hover:text-gray-900 rounded-lg text-sm w-8 h-8  justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <img
                src={selectedImage}
                alt="Selected Crop"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DashBoard;
