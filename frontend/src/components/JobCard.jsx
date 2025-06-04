import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-100 p-6 shadow rounded m-2">
      <div className="flex justify-between items-center">
        <img src={assets.company_icon} alt="" className="h-8" />
      </div>
      <h4 className="font-thin  text-xl mt-2">{job.title}</h4>
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 mt-4 text-sm"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 150) + ".....",
        }}
      ></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button
          className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
        >
          Apply Now
        </button>
        <button
          className="cursor-pointer text-gray-500 border border-gray-500 text-gray px-4 py-2 rounded"
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
