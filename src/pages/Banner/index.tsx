import React, { ChangeEvent, useState } from "react";

const AddBanner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files[0]);
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
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
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                        Href
                        </label>
                        <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your link"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">
                        aired on
                        </label>
                        <input
                        id="email"
                        type="date"
                        className="form-input w-full text-gray-800"
                        placeholder="from"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <input
                        id="email"
                        type="date"
                        className="form-input w-full text-gray-800"
                        placeholder="untill"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Add Poster</button>
                    </div>
                </div>
            </div>

        </div>
    </>
  );
};

export default AddBanner;
