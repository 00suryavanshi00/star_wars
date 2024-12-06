
import moviessrc from '../images/moviesbackground.jpg';
import peoplesrc from '../images/peoplebackground.jpg';
import planetssrc from '../images/planetsbackground.png';
import speciessrc from '../images/speciesbackground.webp';
import spaceshipssrc from '../images/spaceshipsbackground.webp';
import vehiclessrc from '../images/vehiclesbackground.jpg'
import mainbackground from '../images/nightbackground.jpg'



export const resourceImageRoutes = new Map<string, string>([
    ["films", moviessrc],
    ["people", peoplesrc],
    ["planets", planetssrc],
    ["species", speciessrc],
    ["starships", spaceshipssrc],
    ["vehicles", vehiclessrc],
    ["background", mainbackground]
  ]);
  