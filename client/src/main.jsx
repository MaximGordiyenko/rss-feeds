import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { PostProvider } from "./context/PostProvider";

createRoot(document.getElementById('root')).render(
  <PostProvider>
    <App/>
  </PostProvider>
);
