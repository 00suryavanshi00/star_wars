import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useGetResources from "../hooks/useGetResources";
import { CardLoader } from "../components/CardLoader";
import { species } from "../interfaces/Species";
import { Planet } from "../interfaces/Planets";
import { Starship } from "../interfaces/Starships";
import { Vehicle } from "../interfaces/Vehicles";
import { Film } from "../interfaces/Film";
import { People } from "../interfaces/People";
import NameCard from "../components/NameCard";
import CustomPagination from "../components/Pagination";
import SearchForm from "../components/Search";

const ResourceScreen: React.FC = () => {
  const { name } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  type dataType = species | Planet | Starship | Vehicle | Film | People;

  const {
    data: resources,
    error,
    isLoading,
  } = useGetResources<{ results: dataType[]; count: number }>(
    `/${name}`, 
    currentPage, 
    searchQuery
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Type guard for films
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
        <p>{error}</p>
      </div>
    );
  }

  // Render no resources found
  if (!resources?.results?.length) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic text-center mt-4">
          {name}
        </h1>
        <div className="mb-4">
          <SearchForm name={name} onSearch={handleSearch} />
        </div>
        <div className="text-center text-xl">
          {searchQuery 
            ? `No results found for "${searchQuery}"` 
            : `No resources found for "${name}"`}
        </div>
      </div>
    );
  }

  // Render resource details
  return (
    <div className="container mx-auto p-4 flex flex-col justify-between h-screen">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic text-center mt-4">
        {name}
      </h1>

      <div className="mb-4">
        <SearchForm name={name} onSearch={handleSearch} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {resources.results.map((item: dataType, index: number) =>
          isFilm(item) ? (
            <NameCard name={item.title} key={index} />
          ) : (
            <NameCard name={(item as any).name} key={index} />
          )
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10">
        <CustomPagination
          currentPage={currentPage}
          totalPages={Math.ceil(resources.count / 10)}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ResourceScreen;