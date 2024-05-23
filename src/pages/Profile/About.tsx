function About() {
  return (
    <article className="bg-white p-5 rounded-xl my-5 basis-96">
      <p className="text-xl text-primary font-medium">About</p>
      <article>
        <p className="text-md font-medium text-primary my-5">Work Status</p>
        <p className="text-sm">Fresher</p>
      </article>

      <p className="text-md font-medium text-primary my-5">Linked In</p>
      <p className="text-sm">view linked in</p>

      <p className="text-md font-medium text-primary my-5">Profile Summery</p>
      <p className="text-sm max-w-[450px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur,
        assumenda rerum asperiores eveniet accusamus vitae, incidunt tenetur
        aliquid mollitia aperiam saepe? Dolorum blanditiis odit voluptas
        tenetur? Magni, consequuntur cum!
      </p>

      <p className="text-md font-medium text-primary my-5">Educations</p>

      <section className="flex justify-between gap-6 my-5 flex-wrap">
        <article>
          <p className="text-md font-medium text-primary my-3">Qualification</p>
          <p className="text-sm">DCE</p>
        </article>
        <article className="w-[100%] basis-40">
          <p className="text-md font-medium text-primary my-3">
            Organization Name
          </p>
          <p className="text-sm">SMVC</p>
        </article>
      </section>
      <section className="flex justify-between gap-6 my-5 flex-wrap">
        <article>
          <p className="text-md font-medium text-primary">Duration</p>
          <p className="text-sm">2005 - 5500</p>
        </article>
        <article className="w-[100%] basis-40">
          <p className="text-md font-medium text-primary">Course Type</p>
          <p className="text-sm">Bachelor of Computer Engineering</p>
        </article>
      </section>
    </article>
  );
}

export default About;
