import { FC } from 'react';
import {Title} from "@mantine/core";
import YodaLoader from '../../components/YodaLoader';
import { CardUI } from '../../components/Card';
import { CardLoader } from '../../components/CardLoader';


const Landing = () => {
	return <>
	<div className='flex flex-col w-screen align-middle items-center'>
	<div className='w-full m-6'>
	<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic text-center">
		Explore the world of star wars!
    </h1>
	<h1 className=" m-4 text-2xl md:text-4xl lg:text-3xl font-bold text-white font-starjhol text-center animate-bounce">
		Pick a Card👇!
    </h1>

	</div>

	<div className='grid grid-cols-2 m-6 p-6 gap-6 w-1/2'>

		<CardUI/>
		<CardUI/>
		<CardUI/>
		<CardUI/>
		<CardUI/>
		<CardUI/>
	</div>
	</div>
	</>;
};

export default Landing

