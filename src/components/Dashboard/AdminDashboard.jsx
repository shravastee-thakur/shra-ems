import React from "react";
import Header from "../Other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />

      <div className="bg-[#1C1C1C] p-5 rounded mt-7">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm mb-0.5">Task Title</h3>
              <input
                className="text-sm bg-transparent border-[1px] border-slate-500 w-4/5 py-1 px-2 outline-none mb-2"
                type="text"
                placeholder="Enter Task Title"
              />
            </div>
            <div>
              <h3 className="text-sm mb-0.5">Date</h3>
              <input
                className="text-sm bg-transparent border-[1px] border-slate-500 w-4/5 py-1 px-2 outline-none mb-2"
                type="date"
              />
            </div>

            <div>
              <h3 className="text-sm mb-0.5">Assign to</h3>
              <input
                className="text-sm bg-transparent border-[1px] border-slate-500 w-4/5 py-1 px-2 outline-none mb-2"
                type="text"
                placeholder="Enter Name"
              />
            </div>

            <div>
              <h3 className="text-sm mb-0.5">Category</h3>
              <input
                className="text-sm bg-transparent border-[1px] border-slate-500 w-4/5 py-1 px-2 outline-none"
                type="text"
                placeholder="Enter Category"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm mb-0.5">Description</h3>
            <textarea
              className="w-full h-40 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-slate-500"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
            <button className="text-base bg-orange-700 text-white px-5 py-2 rounded mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
