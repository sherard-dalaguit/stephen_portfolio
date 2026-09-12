import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="w-screen">
        <div className="absolute top-0 left-[50%] right-[50%] z-50">
          <Navbar />
        </div>
        <Hero />
        <AboutMe />
        <Skills />
        {/*<Experience limit={4} />*/}
        <Experience />
        {/*<Testimonials limit={12} />*/}
        {/*<Certificates limit={2} />*/}
        <Certificates />
        <Footer />
      </div>
    </main>
  );
}
