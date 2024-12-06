import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Landing from './pages/landing/Landing';
import './styles/abstracts/index.css'
import ResourceScreen from './pages/Resource';
import NotFound from './pages/NotFound';
import SignIn from './pages/auth/SignIn';
import ResourceDetailScreen from './pages/ResourceDetail';

export const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Landing />
			},
			{
				path: '/resources/:name',
				element: <ResourceScreen />,
			  },
			  {
				path: '/auth/signin',
				element: <SignIn/>
			  },
			  {
				path: '/resources/:name/:id',
				// path: 'test',
				element: <ResourceDetailScreen/>
			  },
			  {
				path: '*', // Catch-all for unmatched routes
				element: <NotFound />,
			  },
		]
	}
];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>

);
