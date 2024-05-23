export default function CarrerPreference() {
  return (
    <section className="bg-white my-4 p-5 rounded-xl">
      <p className="text-xl text-primary font-medium my-2">
        Your Career Preferences
      </p>
      <section className="flex justify-between my-5 gap-10 flex-wrap">
        <article>
          <p className="text-md font-medium text-primary my-3">Resume</p>
          <p className="text-sm">Fresher</p>
        </article>
        <article>
          <p className="text-md font-medium text-primary my-3">Notice Period</p>
          <p className="text-sm">Imediate Joiner</p>
        </article>
        <article>
          <p className="text-md font-medium text-primary my-3">
            Salary Expectation
          </p>
          <p className="text-sm">1200000 LPA</p>
        </article>
      </section>
      <article className="basis-32 my-5">
        <p className="text-md font-medium text-primary my-3">Roles</p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-2 py-1 border rounded-lg text-sm">
            Frontend Developer
          </span>
          <span className="px-2 py-1 border rounded-lg text-sm">
            Fullstack Developer
          </span>
          <span className="px-2 py-1 border rounded-lg text-sm">
            Backend Developer
          </span>
          {/* <span className="p-1">No Skills found</span> */}
        </div>
      </article>
    </section>
  );
}
