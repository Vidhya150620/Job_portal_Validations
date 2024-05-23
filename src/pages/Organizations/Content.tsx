import OrganizationView from "./OrganizationView";

function Content() {
  return (
    <section className="bg-white p-5 lg:w-[75%]">
      <p className="text-left font-semibold text-[18px]">Hiring Companies</p>
      <div className="ml-[13px]">
        <p className="text-start text-[#303030] font-medium text-lg mt-[20px]">
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
      </div>
      <OrganizationView />
    </section>
  );
}

export default Content;
