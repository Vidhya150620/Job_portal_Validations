import React, { ReactNode } from "react";
import { SiTicktick } from "react-icons/si";
import { TbFaceIdError } from "react-icons/tb";

interface Dailag {
  children: ReactNode;
  updateState: (newState: boolean) => void;
  error: boolean;
}

const Dailag: React.FC<Dailag> = ({ updateState, children, error }) => {
  const handleDailag = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    updateState(false);
  };

  return (
    <section className="absolute inset-0 backdrop-filter backdrop-blur-sm duration-200 bg-gray-900 bg-opacity-10 z-50 flex items-center justify-center h-full w-full left-[-50%] top-[-50%] translate-x-[50%] translate-y-[50%] ">
      <main className="one-bounce z-10 h-full relative transition-all duration-200 w-full flex flex-col items-center justify-evenly max-h-[380px] max-[400px]:max-h-[600px] max-w-[700px] p-2 rounded-md bg-slate-100">
        {error ? (
          <i className="text-7xl text-red-500 ">
            <TbFaceIdError />
          </i>
        ) : (
          <i className="text-7xl text-green-500">
            <SiTicktick />
          </i>
        )}
        <div
          className={`${
            error ? "text-zinc-500" : "text-zinc-600"
          } text-center text-sm`}
        >
          {children}
        </div>
        <button
          onClick={handleDailag}
          className={`${
            error
              ? "bg-red-400 hover:bg-red-600 transition-all hover:transition-all duration-100"
              : "bg-green-400 hover:bg-green-600 transition-all hover:transition-all duration-100"
          } text-white text-xl py-1 px-6 rounded-md`}
        >
          close
        </button>
      </main>
    </section>
  );
};

export default Dailag;
