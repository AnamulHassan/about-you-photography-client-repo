import { RouterProvider } from 'react-router-dom';
import './App.css';
import Router from './Router/Routes/Router';

function App() {
  return (
    <section style={{ fontFamily: "'Roboto', sans-serif" }}>
      <RouterProvider router={Router}></RouterProvider>
    </section>
  );
}

export default App;

/* {
  style={{fontFamily: "'Roboto', sans-serif"}}
} */

/* {
   style={{fontFamily: "'Roboto Slab', sans-serif"}}
} */
