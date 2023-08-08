import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { MainProvider } from "./context/MainProvider.jsx";

createRoot(document.getElementById('root')).render(
  <MainProvider>
    <App/>
  </MainProvider>
);
