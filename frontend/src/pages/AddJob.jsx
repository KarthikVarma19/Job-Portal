import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../assets/assets";
const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner Level");
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    // Initiate Quill only once
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <div className="container p-4 flex flex-col  w-full items-start gap-3">
      <form className="container ">
        <div className="w-full">
          <p className="m-3">Job Title</p>
          <input
            className="w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
            type="text"
            placeholder="Type here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="w-full max-w-lg">
          <p className="m-3">Job Description</p>
          <div ref={editorRef}></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
          <div>
            <p className="m-3">Job Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300  rounded"
            >
              {JobCategories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
          </div>
          <div>
            <p className="m-3">Job Location</p>
            <select
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300  rounded"
            >
              {JobLocations.map((location) => {
                return (
                  <option value={location} key={location}>
                    {location}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <p className="m-3">Job Level</p>
            <select
              onChange={(e) => setLevel(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300  rounded"
            >
              <option value="Beginner Level">Beginner Level</option>
              <option value="Intermediate Level">Intermediate Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
          </div>
          <div>
            <p className="m-3">Job Salary</p>
            <input
              type="number"
              placeholder="2500"
              onChange={(e) => setSalary(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300  rounded sm:w-[120px]"
              min={0}
            />
          </div>
        </div>
        <button className="w-28 px-3 py-2 text-white bg-black border border-gray-300  rounded mt-4">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddJob;
