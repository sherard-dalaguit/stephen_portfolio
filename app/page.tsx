import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <div className="absolute top-0 left-[50%] right-[50%] z-50">
          <Navbar />
        </div>
        <Hero />
      </div>
    </main>
  );
}
