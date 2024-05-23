import SearchJob from "./SearchJob";
import Organizations from "./Organizations";
import Jobs from "./Jobs";

export default function Content() {
  return (
    <main className="w-[75%] max-lg:w-[100%]">
      <SearchJob />
      <Jobs />
      <Organizations />
    </main>
  );
}
