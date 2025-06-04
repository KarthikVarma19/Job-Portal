import { useContext, useEffect, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  useEffect(() => {
    // Trigger a re-render when onSearch is called
  }, [setSearchFilter, setIsSearched]);

  return (
    <div>
      <div className="container 2xl:px-20 mx-auto my-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center rounded-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            Over 10,000+ jobs to apply
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
            Your Next Big Career Move Starts Right Here - Explore the best
            Opportunites and Take the first Step Toward Your Future!
          </p>
          <div className="flex items-center bg-white text-gray-600 justify-between max-w-xl pl-4 mx-4 sm:mx-auto rounded-xl">
            {/* Search Jobs */}
            <div className="flex items-center justify-between mr-2">
              <img src={assets.search_icon} alt="" className="h-4 sm:h-5" />
              <input
                ref={titleRef}
                type="text"
                placeholder="Search for jobs"
                className="max-sm:text-xs p-2 outline-none w-full"
              />
              {titleRef.current && titleRef.current.value !== "" && (
                <img
                  src={assets.cross_icon}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    titleRef.current.value = "";
                    onSearch();
                  }}
                />
              )}
            </div>

            {/* Location */}
            <div className="flex items-center justify-between mr-2">
              <img src={assets.location_icon} alt="" className="h-4 sm:h-5" />
              <input
                ref={locationRef}
                type="text"
                placeholder="Location"
                className="max-sm:text-xs p-2 outline-none w-full"
              />
              {locationRef.current?.value !== "" && (
                <img
                  src={assets.cross_icon}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => {
                    locationRef.current.value = "";
                    onSearch();
                  }}
                />
              )}
            </div>
            {/* Search Button */}
            <a href="#job-list">
              <button
                className="cursor-pointer bg-blue-600 text-white px-6 sm:px-9 py-2 shadow p-1 rounded-xl"
                onClick={onSearch}
              >
                Search
              </button>
            </a>
          </div>
        </div>
        {/* Trusted By */}
        <div className="border border-gray-300 shadow-md mx-auto my-10 mt-5 p-6 rounded-md flex">
          <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
            <p className="font-medium">Trusted By</p>
            <img src={assets.microsoft_logo} alt="" className="h-6 " />
            <img src={assets.walmart_logo} alt="" className="h-6" />
            <img src={assets.accenture_logo} alt="" className="h-6" />
            <img src={assets.samsung_logo} alt="" className="h-6" />
            <img src={assets.amazon_logo} alt="" className="h-6" />
            <img src={assets.adobe_logo} alt="" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
