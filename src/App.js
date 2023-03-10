import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes';
import { Toaster } from 'react-hot-toast';




function App() {
  return (
    <div className="App" >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />

    </div>
  );
}

export default App;
