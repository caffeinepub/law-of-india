import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Layout from './components/Layout';
import LawsPage from './pages/LawsPage';
import LawDetailPage from './pages/LawDetailPage';
import PreamblePage from './pages/PreamblePage';
import LawInitializer from './components/LawInitializer';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LawsPage,
});

const lawDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/law/$number',
  component: LawDetailPage,
});

const preambleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/preamble',
  component: PreamblePage,
});

const routeTree = rootRoute.addChildren([indexRoute, lawDetailRoute, preambleRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <LawInitializer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
