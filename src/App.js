import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router/Routes/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <section style={{ fontFamily: "'Roboto', sans-serif" }}>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </section>
  );
}

export default App;
