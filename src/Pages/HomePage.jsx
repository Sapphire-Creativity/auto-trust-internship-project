import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import HomeNavbar from "../components/HomeNavbar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <HomeNavbar/>
      <Hero />
    </div>
  );
}
