import { createBrowserRouter } from 'react-router-dom';

import { PUBLIC_URL } from '../library/constants';

import ShowAnalyzes from '../components/ShowAnalyzes';
import ShowHistory from '../components/ShowHistory';
import ShowSuggestion from '../components/ShowSuggestion';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';
import PageLayout from '../pages/PageLayout';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/show-history',
                element: <ShowHistory />,
            },
            {
                path: '/show-analyze',
                element: <ShowAnalyzes />,
            },
            {
                path: '/show-suggestion',
                element: <ShowSuggestion />,
            },

        ],
    },
], {
    basename: PUBLIC_URL,
});