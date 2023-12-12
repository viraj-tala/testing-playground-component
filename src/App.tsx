import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import SlideOver from "./pages/slideover/index"

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <SlideOver/>,
    },
 
  ]);

  return (
    <>
     <div className="h-screen w-screen">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
