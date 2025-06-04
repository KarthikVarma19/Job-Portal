import { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label htmlFor="resumeUpload" className="flex items-center cursor-pointer">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  Select Resume
                </p>
                <input
                  id="resumeUpload"
                  accept="application/pdf"
                  type="file"
                  hidden
                  onChange={(e) => setResume(e.target.files[0])}
                />
                <img
                  src={assets.profile_upload_icon}
                  alt=""
                  className="cursor-pointer"
                />
              </label>
              <button
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
                onClick={() => setIsEdit(false)}
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a className="bg-blue-100  text-blue-600  px-4 py-2 rounded-lg">
                Resume
              </a>
              <button
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
          <table className="min-w-full bg-white rounded-lg border border-gray-200">
            <thead className="border border-gray-200">
              <tr>
                <th className="py-3 px-4 text-left">Company</th>
                <th className="py-3 px-4 text-left">Job Title</th>
                <th className="py-3 px-4 text-left max-sm:hidden">Location</th>
                <th className="py-3 px-4 text-left max-sm:hidden">Date</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* company: string; title: string; location: string; date: string; status: string; logo: any; */}
              {jobsApplied.map((job, index) =>
                true ? (
                  <tr key={index} className="border border-gray-200">
                    <td className="py-3 px-4 flex items-center gap-2">
                      <img className="w-8 h-8" src={job.logo} alt="" />
                      {job.company}
                    </td>
                    <td className="py-2 px-4">{job.title}</td>
                    <td className="py-2 px-4 max-sm:hidden">{job.location}</td>
                    <td className="py-2 px-4  max-sm:hidden">
                      {moment(job.date).format("ll")}
                    </td>
                    <td className="py-2 px-4">
                      <span
                        className={`${
                          job.status === "Accepted"
                            ? "bg-green-100"
                            : job.status === "Rejected"
                            ? "bg-red-100"
                            : "bg-blue-100"
                        } px-4 py-1.5 rounded`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
