import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";


export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white  ">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Briefcase />
          JOB TRACKER
        </Link>
        <div className="flex items-center gap-4">
            <Link href="/sign-in" >
            <Button variant="ghost" className="text-gray-700 hover:text-black text-lg"> Log In</Button>
            </Link>
            <Link href="/sign-up" >
            <Button  className="bg-primary hover:bg-primary/90 text-lg"> Start for free</Button>
            </Link>
        </div>
      </div>
    </nav>
  );
}
