import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <div className="absolute top-0 left-[50%] right-[50%] z-50">
          <Navbar />
        </div>
        <Hero />
        <AboutMe />
        {/*<Experience />*/}
        {/*<Testimonials />*/}
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
