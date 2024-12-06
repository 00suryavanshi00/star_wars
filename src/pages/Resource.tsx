import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useGetResources, { SwapiResponse } from "../hooks/useGetResources";
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

import { notifications } from "@mantine/notifications"; 
import { useUserStore } from "../store/app.store";
import { ChevronLeft } from "lucide-react";
import { resourceImageRoutes } from "../utils/imagemap";

const ResourceScreen: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");


  const { user } = useUserStore();

  type dataType = species | Planet | Starship | Vehicle | Film | People;

  const {
    data: resources,
    error,
    isLoading,
  } = useGetResources<dataType>(`/${name}`, currentPage, searchQuery);

  const goBack = () => {
    navigate(`/`, { replace: true });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const isFilm = (item: dataType): item is Film => {
    return item.title !== undefined;
  };

  const handleCardClick = (item: dataType) => {
    // Extract ID helper function
    const extractId = (url: string) => {
      const matches = url.match(/\/(\d+)\//);
      return matches ? matches[1] : null;
    };


    if (!user) {

      notifications.show({
        title: 'Authentication Required',
        message: 'Please sign in to access resource details',
        color: 'yellow'
      });
      
// redirect
      navigate('/auth/signin', { 
        state: { 
          from: `/resources/${name}`, 
          itemId: extractId(item.url) 
        } 
      });
      return;
    }

    const itemId = extractId(item.url);
    
    if (itemId) {
      navigate(`/resources/${name}/${itemId}`);
    }
  };

  // Helper logs
  useEffect(() => {
    console.log('Current Resource Name:', name);
    console.log('Resources:', resources);
    console.log('Is Loading:', isLoading);
    console.log('Error:', error);
    console.log('Current User:', user);
  }, [name, resources, isLoading, error, user]);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CardLoader />
      </div>
    );
  }


  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500">
        <h1>Error Loading Resource</h1>
        <p>{error}</p>
        <p>Resource Name: {name}</p>
      </div>
    );
  }

//   render if resouces not found
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

  // render resource details
  return (
<div className=" p-4 flex flex-col justify-between min-h-screen" style={{
        backgroundImage: `url(${resourceImageRoutes.get("background")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", 
      }}>

  <div className="flex items-center justify-between mb-6">

    <button
      onClick={goBack}
      className="flex items-center text-yellow-400 hover:text-yellow-300"
    >
      <ChevronLeft className="mr-2 w-6 h-6" />
    </button>


    <h1 className="flex-grow text-xl md:text-3xl lg:text-4xl font-bold text-yellow-400 font-starjhol italic text-center">
      {name}
    </h1>
  </div>


  <div className="mb-6">
    <SearchForm name={name} onSearch={handleSearch} />
  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
    {resources.results.map((item: dataType, index: number) => (
      <div
        key={index}
        onClick={() => handleCardClick(item)}
        className="cursor-pointer transform hover:scale-105 transition-transform duration-300 border rounded-lg p-4 shadow-md"
      >
        {isFilm(item) ? (
          <NameCard name={item.title} />
        ) : (
          <NameCard name={(item as any).name} />
        )}
      </div>
    ))}
  </div>


  <div className="flex justify-center mt-8">
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