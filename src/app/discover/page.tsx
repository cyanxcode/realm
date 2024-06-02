import BadgeList from "@/components/BadgeList";
import Main from "@/components/Main";
import Searchbar from "@/components/Searchbar";

export default function Discover() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-white text-4xl font-semibold">Dicover your tool</h1>
      <section className="w-[90%] sm:w-[60%] m-10">
        <Searchbar text="Search..." />
      </section>
      <BadgeList></BadgeList>
      <section className="w-[90%] mt-12">
        <h3 className="text-white text-3xl font-medium">All Bots</h3>
        <h5 className="text-zinc-400 text-lg">9 items</h5>
      </section>
      <section className=" w-[90%] mt-10">
        <Main />
      </section>
    </main>
  );
}
