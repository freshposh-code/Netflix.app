import React from "react";
import SavedShows from "../component/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="  w-full h-[400px] object-cover"
          src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="font-serif text-3xl md:text-5xl font-bold">
              My Shows
            </h1>
          </div>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
