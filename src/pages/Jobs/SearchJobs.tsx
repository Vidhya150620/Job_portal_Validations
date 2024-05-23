export default function SearchJobs() {
  return (
    <main className="my-10">
      <p className="text-start text-[#303030] font-medium text-lg my-5">
        Search Jobs
      </p>
      <div className="flex gap-4 mt-[12px] max-[500px]: flex-wrap">
        <input
          type="text"
          placeholder="Search jobs here...."
          className="w-[500px] h-[50px] p-[10px] border border-[#c3c3c3]-500 rounded-full"
        ></input>
        <button
          type="button"
          className="w-[150px] h-[50px] bg-[#0A73BE] text-white rounded-full"
        >
          Search
        </button>
      </div>
      <p className="mt-6 font-normal">Showing 12 companies</p>
    </main>
  );
}
