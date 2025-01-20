import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import AboutUs from './pages/aboutus/Aboutus.jsx';
import Mission from './pages/aboutus/Mission.jsx';
import Team from './pages/aboutus/Team.jsx';
import BecomeAClient from './pages/BecomeAClient.jsx';
import Insights from './pages/Insight.jsx';
import CSRPage from './pages/Csr.jsx';
import CareersPage from './pages/Careers.jsx';

import TelecomServices from './pages/telecom/TelecomServices.jsx';
import IctPage from './pages/ict/ICTPage.jsx';

import App from './App.jsx'

const router = createBrowserRouter([
  {  path: "/", element: <App />,  },
  {  path: "/about-us", element: <AboutUs />,  },
  {  path: "/mission", element: <Mission />,  },
  {  path: "/team", element: <Team />,  },
  {  path: "/become-a-client", element: <BecomeAClient />,  },
  {  path: "/insight", element: <Insights />,  },
  {  path: "/csr", element: <CSRPage />,  },
  {  path: "/careers", element: <CareersPage />,  },
  {  path: "/telecom", element: <TelecomServices />,  },
  {  path: "/ict", element: <IctPage />,  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
