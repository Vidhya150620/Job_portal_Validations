function PersonalInformation() {
  return (
    <section className="bg-white my-4 p-5 rounded-xl">
      <p className="text-xl text-primary font-medium">
        All Personal Information
      </p>
      <section className="flex justify-between gap-6 my-5 flex-wrap">
        <article>
          <p className="text-md font-medium text-primary my-3">Gender</p>
          <p className="text-sm">Male</p>
        </article>
        <article>
          <p className="text-md font-medium text-primary my-3">Phone Number</p>
          <p className="text-sm">+91 9952727521</p>
        </article>
        <article>
          <p className="text-md font-medium text-primary my-3">Mail Id</p>
          <p className="text-sm">ijass.ocean@gmail.com</p>
        </article>
        <article>
          <p className="text-md font-medium text-primary my-3">Current City</p>
          <p className="text-sm">Puducherry</p>
        </article>
      </section>
      <hr />
      <section className="flex justify-between gap-6 my-5 flex-wrap">
        <article className="w-[100%] basis-44">
          <p className="text-md font-medium text-primary my-3">Address</p>
          <p className="text-sm">
            indhira nagar, ariyankuppam, pondicherry - 605007
          </p>
        </article>

        <article className="w-[100%] basis-80">
          <p className="text-md font-medium text-primary my-3">Languages</p>
          <div className="flex gap-3 text-sm flex-wrap">
            <span className="px-2 py-1 border rounded-lg">HTML</span>
            <span className="px-2 py-1 border rounded-lg">CSS</span>
            <span className="px-2 py-1 border rounded-lg">JavaScript</span>
            <span className="px-2 py-1 border rounded-lg">Nodejs</span>
            <span className="px-2 py-1 border rounded-lg">Expressjs</span>
            <span className="px-2 py-1 border rounded-lg">MongoDB</span>
          </div>
        </article>
      </section>
      <hr />
      <section className="flex justify-between my-5 flex-wrap">
        <article className="w-[100%] basis-44">
          <p className="text-md font-medium text-primary my-3">Date of Birth</p>
          <p className="text-sm">7 Jun 2024</p>
        </article>
      </section>
    </section>
  );
}

export default PersonalInformation;
