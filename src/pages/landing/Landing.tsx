import { FC } from 'react';
import {Title} from "@mantine/core";
import YodaLoader from '../../components/YodaLoader';
import { CardUI } from '../../components/Card';
import { CardLoader } from '../../components/CardLoader';

import VerticalScrollCardsRev from '../../components/VerticalScroll';
import VerticalScrollCards from '../../components/VerticalScroll';
import useGetResources from '../../hooks/useGetResources';
import { SwapiRoot } from '../../interfaces/Root';



const Landing = () => {
	const { 
		data: resources, 
		error: error, 
		isLoading: isLoading 
	  } = useGetResources<SwapiRoot>('/');

	  console.log("i'm inside the landing page ", resources)
	  
	return <>
	<div className='flex items-center h-screen p-4'>
		<div className='w-1/2 p-4'>
			<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-yellow-400 font-starjhol italic text-center">
		Explore the world of star wars!
    		</h1>
			<h1 className=" m-4 text-2xl md:text-4xl lg:text-3xl font-bold text-white font-starjhol text-center animate-bounce">
		Pick a Card👉!
    		</h1>



			<div className=' flex flex-col rounded-lg items-end mr-9 mt-20'>
		<p className='text-2xl text-white italic'>
		"We Would Be Honored If You Would Join Us."
		</p>
		<p className='text-2xl text-white italic'>
			- Darth Vador
		</p>

		</div>

		</div>
		
		<div className='w-1/2 grid grid-cols-2 p-4 gap-4 mr-5'>
		{ Object.entries(resources).map(([key, value]) => {
			console.log(key,value)
      return <CardUI key={key} cardName={key} cardUri={value} />
}
	)
}

</div>

	</div>
	</>;
};

export default Landing

