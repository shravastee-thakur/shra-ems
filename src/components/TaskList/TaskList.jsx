import React from "react";

const TaskList = () => {
  return (
    <div
      id="task"
      className="h-[55%] w-full overflow-x-auto flex justify-start items-center gap-8 flex-nowrap mt-10 py-5"
    >
      <div className="h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4>20 feb 2020</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Write assignments</h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio
          sit, tempore tempora eum numquam?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
