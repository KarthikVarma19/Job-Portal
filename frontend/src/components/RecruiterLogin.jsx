import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
const RecuriterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);

  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);

  const { setShowRecruiterLogin } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  // Stop Scrolling When Recruiter Login Popup
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-black/30  backdrop-blue-sm flex justify-center items-center">
        <form
          className="relative bg-white p-10 rounded-xl text-slate-500"
          onSubmit={onSubmitHandler}
        >
          <h1 className="text-center text-2xl text-neutral-700">
            Recruiter {state}
          </h1>
          <p className="text-sm">
            Welcome back! Please {state === "Login" ? "sign in" : "sign up"} to
            continue
          </p>
          {state === "Sign Up" && isTextDataSubmitted ? (
            <>
              <label
                htmlFor="image"
                className="flex items-center cursor-pointer flex justify-center my-5"
              >
                <p
                  className={`flex items-center gap-4 bg-blue-100 px-4 py-2 rounded-lg mr-2 ${
                    image === false ? "text-blue-600" : " text-green-600"
                  }`}
                >
                  <img
                    src={
                      image ? URL.createObjectURL(image) : assets.person_icon
                    }
                    alt=""
                    className="cursor-pointer w-5"
                  />
                  {image === false ? "Upload Company Logo" : "Uploaded"}
                </p>

                <input
                  id="image"
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
              {image === false ? (
                <></>
              ) : (
                <p className="text-sm text-center my-2">{image.name}</p>
              )}
            </>
          ) : (
            <>
              {state !== "Login" && (
                <div className="flex items-center gap-2 rounded-full  mt-5 px-4 py-2 border">
                  <img src={assets.person_icon} alt="" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    required
                    className="outline-none text-sm"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              )}
              <div className="flex items-center gap-2 rounded-full  mt-5 px-4 py-2 border">
                <img src={assets.email_icon} alt="" />
                <input
                  type="text"
                  placeholder="Email ID"
                  required
                  className="outline-none text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="flex items-center gap-2 rounded-full  mt-5 px-4 py-2 border">
                <img src={assets.lock_icon} alt="" />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="outline-none text-sm"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <p className="text-sm cursor-pointer text-blue-600 my-4">
                Forgot Password?
              </p>
            </>
          )}

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-2 rounded-full"
          >
            {state === "Login"
              ? "Login"
              : isTextDataSubmitted === false
              ? "Next"
              : "Create Account"}
          </button>
          {state === "Login" ? (
            <p className="text-sm mt-5 text-center">
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-sm cursor-pointer text-blue-600 my-4"
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="text-sm mt-5 text-center">
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-sm cursor-pointer text-blue-600 my-4"
              >
                Login
              </span>
            </p>
          )}

          <img
            className="absolute top-5 right-5 cursor-pointer"
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowRecruiterLogin(false)}
          />
        </form>
      </div>
    </>
  );
};

export default RecuriterLogin;
