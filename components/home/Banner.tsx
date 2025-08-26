import GeneratePlanButton from "@/components/GeneratePlanButton";
import { MapPin } from "lucide-react";
import TravelHero from "@/components/home/TravelHero";

const Banner = () => {
  return (
    <section
      className="lg:px-20 px-5 py-2 
                bg-background
                w-full h-full
                flex lg:flex-row flex-col lg:justify-between justify-center items-center
                gap-5
                min-h-[calc(100svh-4rem)]"
    >
      <article className="flex flex-col h-full justify-center items-center lg:flex-1">
        <h1
          className="font-bold lg:text-7xl md:text-5xl text-4xl font-sans
      text-left w-full"
        >
          Smart Travel with <br /> <span className="text-blue-500">Trip Genius</span>
        </h1>

        <div className="mt-5 lg:mt-10 rounded-md w-full text-left lg:text-lg md:text-md text-base">
          <div className="flex justify-start items-center">
            <MapPin className="mr-1 text-red-500" />
            <span className="text-center ">Your personal AI-powered trip planner</span>
          </div>
          <div className="p-2">
            <p className="text-blue-500 font-bold tracking-wide lg:text-md md:text-base text-sm">
              "3-day adventure in the mountains, <br className="lg:hidden" />
              budget-friendly, filled with scenic views."
            </p>
            <p
              className="mt-5 mb-5 
                        lg:text-md md:text-base text-sm
                      text-muted-foreground
                        font-medium
                        tracking-wide
                        md:max-w-xl 
                        text-left"
            >
              Whether you crave thrilling adventures, hidden gems, or cultural experiences,
              *Trip Genius* curates the perfect itinerary. Simply tell us what you love,
              and we’ll craft a seamless journey—so you can focus on making memories.
            </p>
          </div>
        </div>
        <div className="w-full ml-2 flex justify-start">
          <GeneratePlanButton />
        </div>
      </article>
      <figure className="h-full lg:flex-1 flex-1 overflow-hidden">
        <TravelHero />
      </figure>
    </section>
  );
};

export default Banner;
