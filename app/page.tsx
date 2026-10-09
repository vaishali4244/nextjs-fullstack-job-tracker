import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigRight, BarChart, Briefcase, TrendingUp } from "lucide-react";
import ImageTabs from "@/components/image-tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* HERO SECTION */}
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
              <Button
                render={<Link href="/sign-up" />}
                nativeButton={false}
                size="lg"
                className=" text-white focus:ring-blue-300 text-lg"
              >
                Start for free
                <ArrowBigRight className="ml-2" />
              </Button>
              <p className="text-gray-500 text-base">
                Free forever. No credit card required.
              </p>
            </div>
          </div>
        </section>

{/* IMAGE TABS */}
        <ImageTabs />

        {/* FEATURES SECTION */}
        <section className="border-t bg-white py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-around rounded-full bg-primary text-white">
                  <Briefcase className="h-6 w-6 text-secondary"/>
                </div>
                <h3 className="mb-3 text-2xl font-semifold text-black">Organize Applications</h3>
                <p>
                  Keep track of all your job applications in one place. Easily manage and update the status of each application, ensuring you never miss an opportunity.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-around rounded-full bg-primary text-white">

                  <TrendingUp className="h-6 w-6 text-secondary"/>
                </div>
                <h3 className="mb-3 text-2xl font-semifold text-black">Track Progress</h3>
                <p>
                  Monitor the status of your job applications and stay informed about the latest developments. Our intuitive dashboard provides a clear overview of your job search progress.
                </p>
              </div>
               <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-around rounded-full bg-primary text-white">
                  <BarChart className="h-6 w-6 text-secondary"/>
                </div>
                <h3 className="mb-3 text-2xl font-semifold text-black">Gain Insights</h3>
                <p>
                  Understand your job search performance with detailed analytics and reports. Make data-driven decisions to optimize your job hunting strategy.
                </p>
              </div>
            </div>
          </div>


        </section>
      </main>
    </div>
  );
}
