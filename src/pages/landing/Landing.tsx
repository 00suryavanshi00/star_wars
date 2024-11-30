import { FC } from 'react';
import {Title} from "@mantine/core";
import YodaLoader from '../../components/YodaLoader';
import { CardUI } from '../../components/Card';
import { CardLoader } from '../../components/CardLoader';

import VerticalScrollCardsRev from '../../components/VerticalScroll';
import VerticalScrollCards from '../../components/VerticalScroll';



const Landing = () => {
	return <>
	<div className='flex'>
		<div className='w-full m-6'>
		<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic text-center">
		Explore the world of star wars!
    	</h1>
		<h1 className=" m-4 text-2xl md:text-4xl lg:text-3xl font-bold text-white font-starjhol text-center animate-bounce">
		Pick a Card👇!
    	</h1>

		</div>

		<VerticalScrollCards/>
		{/* <VerticalScrollCardsRev/> */}
	</div>
	</>;
};

export default Landing

