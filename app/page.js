import Navbar from "@/components/Navbar";
import { ProgressBar } from "@/components/ProgressBar";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-[90vh]">
        <ProgressBar />
      </div>
      <div className="w-full border"></div>
      <div className="py-12 text-center">
        <p className="max-w-[80%] mx-auto">
          Hey its me Saksham (github.com/sakshamwithweb), I got frustrated by procastinating my project and playing minecraft(Eaglercraft) then at night regret :/
          Hence I wanted to do something new and creative everyday as well as I wanted to build things fast that I don't because of procastinating, hence started 52 week 52 stuff in which every week I will be making something really cool and new things, that will push me to learn, solve problems..
        </p>
      </div>
    </div>
  );
}
