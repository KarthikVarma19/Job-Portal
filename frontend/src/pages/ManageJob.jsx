import moment from "moment";
import { manageJobsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const ManageJob = () => {
  const navigate = useNavigate("");
  return (
    <div className="container p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 max-sm:text-sm">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">#</th>
              <th className="py-2 px-4 border-b text-left">Job Title</th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Date
              </th>
              <th className="py-2 px-4 border-b text-left max-sm:hidden">
                Location
              </th>
              <th className="py-2 px-4 border-b text-center">Applicants</th>
              <th className="py-2 px-4 border-b text-left">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="text-gray-700 border-gray-200">
                <td className="py-2 px-4 border-b  max-sm:hidden">{index + 1}</td>
                <td className="py-2 px-4 border-b">{job.title}</td>
                <td className="py-2 px-4 border-b  max-sm:hidden">{moment(job.date).format("ll")}</td>
                <td className="py-2 px-4 border-b  max-sm:hidden">{job.location}</td>
                <td className="py-2 px-4 border-b text-center">{job.applicants}</td>
                <td className="py-2 px-4 border-b">
                  <input type="checkbox" className="scale-125 ml-4"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-black text-white rounded px-4 py-2" onClick={() => navigate("/dashboard/add-job")}>Add new job</button>
      </div>
    </div>
  );
};

export default ManageJob;
