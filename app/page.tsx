import { Button } from "@/components/ui/button";
import {ArrowBigRight} from "lucide-react"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-black text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl mb-6 ">
              Track Your Job Applications with Ease
            </h1>
            <p className="text-gray-600 text-lg mt-4">
              Stay organized and never miss an opportunity again. Capture,
              organize and track your job applications effortlessly with our
              intuitive platform.
            </p>
            <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 gap-4">
              <Button size='lg' className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300 text-lg">
                Start for free
                <ArrowBigRight className="ml-2" />
              </Button>
              <p className="text-gray-500 text-sm">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
