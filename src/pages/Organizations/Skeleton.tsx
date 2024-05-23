function Skeleton() {
  return (
    <main className="border animate-pulse p-5 rounded-3xl w-full mx-1">
      <section className="flex items-center justify-between">
        <div className="object-contain h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <p className=" bg-gray-200 h-7 w-14 rounded-md dark:bg-gray-700"></p>
      </section>
      <p className=" bg-gray-200 mt-2 h-3 w-full rounded-full dark:bg-gray-700"></p>
      <p className=" bg-gray-200 mt-2 h-3 w-full rounded-full dark:bg-gray-700"></p>
      <p className=" bg-gray-200 mt-2 h-3 w-full max-w-[75%] rounded-full dark:bg-gray-700"></p>

      <main>
        <button
          type="button"
          className=" bg-gray-200 w-full max-w-32 py-4 dark:bg-gray-700 p-2 rounded-lg mt-3 "
        ></button>
      </main>
    </main>
  );
}

export default Skeleton;
