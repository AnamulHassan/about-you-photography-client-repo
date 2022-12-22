import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router/Routes/Router';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import LoaderPrimary from './Components/LoaderPrimary/LoaderPrimary';

function App() {
  const [siteLoading, setSiteLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setSiteLoading(false), 1000);
  }, []);

  if (siteLoading) {
    return (
      <div className="w-screen h-screen bg-[#e8e7e2] flex items-center justify-center">
        <LoaderPrimary></LoaderPrimary>
      </div>
    );
  }
  return (
    <section style={{ fontFamily: "'Roboto', sans-serif" }}>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster />
    </section>
  );
}

export default App;
