import { FC } from "react";
import { CardLoader } from "../../components/CardLoader";
import { CardUI } from "../../components/Card";
import useGetResources from "../../hooks/useGetResources";
import { SwapiRoot } from "../../interfaces/Root";

const Landing: FC = () => {
  const { data: resources, error, isLoading } = useGetResources<SwapiRoot>("/");

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300/50 via-blue-900/80 to-blue-950">
        <CardLoader />
      </div>
    );
  }

  if (error || !resources) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-300/50 via-blue-900/80 to-blue-950 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 font-starjhol italic">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg md:text-xl mt-4">
          Please check your connection or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col  items-center  h-full p-4 bg-gradient-to-br from-yellow-300/50 via-blue-900/80 to-blue-950">

      <div className="w-full  p-4 text-center ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic leading-tight">
          Explore the Galaxy of Star Wars!
        </h1>
        <h2 className="mt-6 text-xl md:text-3xl lg:text-4xl font-bold text-white animate-bounce">
          Pick a Card 👇
        </h2>
        <div className="mt-16">
          <blockquote className="text-xl md:text-2xl text-white italic">
            "We Would Be Honored If You Would Join Us."
          </blockquote>
          <p className="text-right text-xl md:text-2xl text-white italic mt-2">
            - Darth Vader
          </p>
        </div>
      </div>


      <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3  gap-4 p-4 mt-8 lg:mt-0">
        {Object.entries(resources).map(([key, value]) => (
          <CardUI key={key} cardName={key} cardUri={value} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
