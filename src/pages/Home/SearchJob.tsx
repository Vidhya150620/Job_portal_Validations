function SearchJob() {
  return (
    <main className="bg-[#FFFFFF] px-5 py-6 mb-5 rounded-xl">
      <div className="w-[80%] rounded-md max-lg:w-[100%]">
        <p className="text-start text-[#303030] font-medium text-lg">
          Search Jobs
        </p>
      </div>
      <div className="flex gap-4 mt-[15px] max-[500px]: flex-wrap max-sm:justify-center">
        <input
          type="text"
          placeholder="Search jobs here...."
          className="w-[100%] sm:w-[50%] py-2 px-3 border border-[#c3c3c3]-500 rounded-full"
        ></input>
        <button
          type="button"
          className="bg-primary text-white rounded-full py-2 px-5"
        >
          Search
        </button>
      </div>
    </main>
  );
}

export default SearchJob;
