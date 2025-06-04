import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, UserProfile, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const navigate = useNavigate();

  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          className="max-sm:w-32 cursor-pointer"
          src={assets.logo}
          alt=""
          onClick={() => navigate("/")}
        />
        {user ? (
          <div>
            <div className="flex items-center gap-3">
              <Link className="text-sm sm:text-base">Applied Jobs</Link>
              <p className="text-sm sm:text-base max-sm:hidden">
                Hi, {user.firstName + " " + user.lastName}
              </p>
              <UserButton />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-4 text-xs sm:text-sm">
            <button
              className="cursor-pointer text-gray-600 shadow p-1 sm:p-2 rounded-sm border"
              onClick={() => setShowRecruiterLogin((prev) => !prev)}
            >
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="cursor-pointer bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 shadow rounded-sm"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
