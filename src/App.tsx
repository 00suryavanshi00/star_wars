import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import './App.scss';
import SplashScreen from './pages/SplashScreen';
import Splash from './pages/spash';

export default function App() {
	const { pathname } = useLocation();
	const [splash, setSplash] = useState(true)

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {splash ? (
		<SplashScreen onComplete={()=>setSplash(false)}/>
		// <Splash/>
      ) : (
        // Main Application
        <Outlet />
      )}
    </MantineProvider>
	);
}
