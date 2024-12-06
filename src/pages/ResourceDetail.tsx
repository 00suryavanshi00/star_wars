import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

// Interfaces
import { species } from "../interfaces/Species";
import { Planet } from "../interfaces/Planets";
import { Starship } from "../interfaces/Starships";
import { Vehicle } from "../interfaces/Vehicles";
import { Film } from "../interfaces/Film";
import { People } from "../interfaces/People";


// Components
import { CardLoader } from '../components/CardLoader';
import useGetResourceDetail from '../hooks/useGetResourcesDetail';

type ResourceType = species | Planet | Starship | Vehicle | Film | People;

const ResourceDetailScreen = () => {
  const { name, id } = useParams();
  const navigate = useNavigate();

  const { resource, error, isLoading } = useGetResourceDetail<ResourceType>(
    name, 
    id
  );

  const goBack = () => {

    navigate(`/resources/${name}`, { replace: true });
  };

  const renderDetailField = (label: string, value: string | number) => (
    <div className="border-b border-yellow-500/30 py-2">
      <span className="text-yellow-400 font-bold mr-2">{label}:</span>
      <span className="text-blue-200">{value || 'Unknown'}</span>
    </div>
  );

  const renderResourceDetails = () => {
    if (isLoading) return (
      <div className='flex justify-center'>
        <CardLoader/>
      </div>
    );

    if (error) return (
      <div className="text-red-500 text-center">
        {error}
      </div>
    );

    if (!resource) return (
      <div className="text-yellow-400 text-center">
        No details found in the Holocron
      </div>
    );

    // Detailed type checking and rendering
    if (name === 'films' && 'title' in resource) {
      // Film
      const film = resource as Film;
      return (
        <div className="space-y-2">
          {renderDetailField('Title', film.title)}
          {renderDetailField('Episode', film.episode_id)}
          {renderDetailField('Opening Crawl', film.opening_crawl)}
          {renderDetailField('Director', film.director)}
          {renderDetailField('Producer', film.producer)}
          {renderDetailField('Release Date', film.release_date)}
        </div>
      );
    } else if (name === 'planets' && 'climate' in resource) {
      // Planet
      const planet = resource as Planet;
      return (
        <div className="space-y-2">
          {renderDetailField('Name', planet.name)}
          {renderDetailField('Climate', planet.climate)}
          {renderDetailField('Terrain', planet.terrain)}
          {renderDetailField('Population', planet.population)}
          {renderDetailField('Diameter', planet.diameter)}
          {renderDetailField('Rotation Period', planet.rotation_period)}
          {renderDetailField('Orbital Period', planet.orbital_period)}
        </div>
      );
    } else if (name === 'people' && 'gender' in resource) {
      // People
      const person = resource as People;
      return (
        <div className="space-y-2">
          {renderDetailField('Name', person.name)}
          {renderDetailField('Height', person.height)}
          {renderDetailField('Mass', person.mass)}
          {renderDetailField('Hair Color', person.hair_color)}
          {renderDetailField('Skin Color', person.skin_color)}
          {renderDetailField('Eye Color', person.eye_color)}
          {renderDetailField('Birth Year', person.birth_year)}
          {renderDetailField('Gender', person.gender)}
        </div>
      );
    } else if (name === 'species' && 'classification' in resource) {
      // Species
      const speciesDetail = resource as species;
      return (
        <div className="space-y-2">
          {renderDetailField('Name', speciesDetail.name)}
          {renderDetailField('Classification', speciesDetail.classification)}
          {renderDetailField('Designation', speciesDetail.designation)}
          {renderDetailField('Average Height', speciesDetail.average_height)}
          {renderDetailField('Skin Colors', speciesDetail.skin_colors)}
          {renderDetailField('Hair Colors', speciesDetail.hair_colors)}
          {renderDetailField('Eye Colors', speciesDetail.eye_colors)}
          {renderDetailField('Language', speciesDetail.language)}
        </div>
      );
    } else if ((name === 'starships' || name === 'vehicles') && 'model' in resource) {
      // Starship or Vehicle
      const vehicle = resource as Starship | Vehicle;
      return (
        <div className="space-y-2">
          {renderDetailField('Name', vehicle.name)}
          {renderDetailField('Model', vehicle.model)}
          {renderDetailField('Manufacturer', vehicle.manufacturer)}
          {renderDetailField('Cost', vehicle.cost_in_credits)}
          {renderDetailField('Length', vehicle.length)}
          {renderDetailField('Max Atmosphering Speed', vehicle.max_atmosphering_speed)}
          {renderDetailField('Crew', vehicle.crew)}
          {renderDetailField('Passengers', vehicle.passengers)}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header with Back Button */}
      <div className="sticky top-0 bg-black/40 backdrop-blur-lg z-10 p-4 flex items-center border-b border-yellow-500/30">
        <button 
          onClick={goBack} 
          className="text-yellow-400 hover:text-yellow-600 mr-4"
        >
          <ChevronLeft size={32} />
        </button>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic w-full">
          {name} details
          {/* in small cuz the font is already in caps ig */}
        </h1>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-grow overflow-y-auto p-6 space-y-4">
        <div className="max-w-2xl mx-auto bg-black/40 backdrop-blur-lg rounded-2xl shadow-2xl border border-yellow-500/30 p-6 text-sm md:text-xl">
          {renderResourceDetails()}
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0  p-4 text-center text-blue-200 text-sm text-opacity-50">
        Star Wars Encyclopedia - Powered by SWAPI ( and Sanskar )
      </div>
    </div>
  );
};

export default ResourceDetailScreen;