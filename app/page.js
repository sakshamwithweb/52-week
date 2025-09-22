import Navbar from "@/components/Navbar";
import { ProgressBar } from "@/components/ProgressBar";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Navbar/>
      <ProgressBar/>
    </div>
  );
}
