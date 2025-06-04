import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
// External NPM Packages
import kconvert from "k-convert";
import moment from "moment";

const ApplyJob = () => {
  const { id } = useParams();

  const [jobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id == id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data[0]);
    }
  };
  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  return jobData ? (
    <>
      <Navbar />
      <div className="container min-h-screen flex flex-col py-10 px4 2xl:px-20 mx-auto">
        <div className="bg-white text-black rounded-lg w-full">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-14 py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl m-2">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 bg-white rounded-lg p-4 mr-4 max-md:mb-4 border border-gray-200"
                src={jobData.companyId.image}
                alt=""
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="mb-4 font-thin text-2xl">{jobData.title}</h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" />
                    {jobData.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    CTC : ${kconvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button className="cursor-pointer bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 shadow rounded-sm">
                Apply Now
              </button>
              <p className="mt-1 text-gray-950">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>
          {/* Job Description */}
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="mb-4 font-bold text-2xl pl-4">Job description</h2>
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button className="cursor-pointer bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 shadow rounded-sm ml-2">
                Apply Now
              </button>
            </div>
            {/* Right Section More Jobs */}
            <div className="w-full lg:w-1/3 mt-8 lg:ml-8 space-y-5">
              <h2 className="mt-1 font-bold  text-gray-900 text-center">
                More Jobs from {jobData.companyId.name}
              </h2>
              {jobs
                .filter(
                  (j) =>
                    j._id !== jobData._id &&
                    j.companyId._id === jobData.companyId._id
                )
                .filter((job) => true)
                .slice(0, 4)
                .map((job, index) => {
                  return <JobCard key={index} job={job} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <LoadingSpinner />
      <Footer />
    </>
  );
};

export default ApplyJob;
