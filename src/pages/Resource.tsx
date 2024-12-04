import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import useGetResources from "../hooks/useGetResources";
import { CardLoader } from "../components/CardLoader";
import { species } from "../interfaces/Species";
import { Planet } from "../interfaces/Planets";
import { Starship } from "../interfaces/Starships";
import { Vehicle } from "../interfaces/Vehicles";
import { Film } from "../interfaces/Film";
import { People } from "../interfaces/People";
import NameCard from "../components/NameCard";
import { Pagination } from "@mantine/core";
import CustomPagination from "../components/Pagination";

const ResourceScreen: React.FC = () => {
  const { name } = useParams();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState<number>(1);

  type dataType = species | Planet | Starship | Vehicle | Film | People;

  const {
    data: resources,
    error,
    isLoading,
  } = useGetResources<{ results: dataType[] }>(`/${name}`, currentPage);

  console.log('this is the name', name);

  // since film doesn't have name some extra logic needs to be done for it
  const isFilm = (item: dataType): item is Film => {
    return item.title !== undefined;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CardLoader />
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        <h1>Error Loading Resource</h1>
        <p>
          {typeof error === "string" ? error : "An unknown error occurred."}
        </p>
      </div>
    );
  }

  if (!resources?.results?.length) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl">No resources found for "{name}"</h1>
      </div>
    );
  }

  // Render resource details
  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic text-center p-8 mb-7">
            {name}
          </h1>

      <div className="grid grid-cols-2 gap-4">
        {resources.results.map((item, index) =>
          isFilm(item) ? (
            <NameCard name={item.title} key={index} />
          ) : (
            <NameCard name={(item as any).name} key={index} />
          )
        )}
      </div>

      {/* since the swapi api is paginated for 10 per req */}
      {resources.count > 10 ? <div className="flex justify-center mt-10">
        <CustomPagination currentPage={1} totalPages={Math.ceil(resources.count / 10)} onPageChange={setCurrentPage}/>
      </div> : null}
    </div>
  );
};

export default ResourceScreen;
