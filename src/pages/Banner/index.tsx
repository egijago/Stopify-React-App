import React, { ChangeEvent, useState } from "react";

const AddBanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [link, setLink] = useState<string>("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedImage(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageUrl(null);
  };

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setStartDate(selectedDate);
  };

  const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setEndDate(selectedDate);
  };

  const handleAddPoster = async () => {
    console.log(selectedImage, startDate, endDate, link);

    if (selectedImage) {
      try {
        console.log("aman1")
        const isoStartDate = new Date(startDate).toISOString();
        const isoEndDate = new Date(endDate).toISOString();        
        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("description", "ini foto");
        formData.append("startDate", isoStartDate);
        formData.append("endDate", isoEndDate);
        formData.append("link", link);
        console.log("aman2")
        
        const response = await fetch("https://w76kp3hq-8000.asse.devtunnels.ms/banner", {
            method: "POST",
            body: formData,
        });
        console.log("aman3")
        const responseData = await response.json();
        console.log(responseData)
        
        console.log("asu");
        
        if (response.ok) {
            const responseData = await response.json();
            setImageUrl(responseData.imageUrl);
        } else {
            console.error("Image upload failed");
        }
    } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <>
      <div>
        <h1>Aid your ads!</h1>
      </div>
      <div>
        <h2>Upload your poster</h2>
        <form>
          <input
            type="file"
            id="myImage"
            name="myImage"
            accept="image/*"
            onChange={handleImageChange}
          />
        </form>
        {selectedImage && (
          <div>
            <br />
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button type="button" onClick={handleRemoveImage}>
              Remove
            </button>
          </div>
        )}
        {!selectedImage && (
          <div>
            <br />
            <img
              alt="not found"
              width={"250px"}
              src="https://via.placeholder.com/250"
            />
          </div>
        )}

        <div className="max-w-sm">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 text-sm font-medium mb-1"
                htmlFor="link"
              >
                Href
              </label>
              <input
                id="link"
                type="text"
                className="form-input w-full text-gray-800"
                placeholder="Enter your link"
                value={link}
                onChange={handleLinkChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 text-sm font-medium mb-1"
                htmlFor="startDate"
              >
                aired on
              </label>
              <input
                id="startDate"
                type="date"
                className="form-input w-full text-gray-800"
                placeholder="from"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 text-sm font-medium mb-1"
                htmlFor="endDate"
              >
                until
              </label>
              <input
                id="endDate"
                type="date"
                className="form-input w-full text-gray-800"
                placeholder="until"
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button
                className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                onClick={handleAddPoster}
              >
                Add Poster
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBanner;
