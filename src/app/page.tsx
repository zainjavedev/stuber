import { LoginForm } from "@/components/ui/form";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
export default function Home() {
  return (
    <>
    <div className="md:px-20 bg-black">
      <Header/>
      <Hero/>
    </div>

    </>
  );
}
