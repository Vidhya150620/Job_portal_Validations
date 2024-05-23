import React from "react";
interface JobNotFoundProps {
  message: string;
  btnName: string;
}

const JobsNotFound: React.FC<JobNotFoundProps> = ({ message, btnName }) => {
  return (
    <main className="p-14 flex flex-col items-center w-full bg-slate-100 rounded-xl ">
      <p className="text-center max-w-[700px]">{message}</p>
      <button className="px-4 py-2 mt-10 max-w-fit rounded-lg bg-green-400 font-semibold text-white">
        {btnName}
      </button>
    </main>
  );
};

export default JobsNotFound;
