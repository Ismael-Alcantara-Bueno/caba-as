import './App.css';
import Formulario from './components/Formulario';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const router = createBrowserRouter([
  {
    path: '/',
    element:<Formulario/>,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/Principal',
    element:<Principal/>
  },
  
]);



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <RouterProvider router={router}/>
       

      </header>
    </div>
  );
}

export default App;
