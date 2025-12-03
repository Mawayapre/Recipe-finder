import './App.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { Home } from './Home'
import { Meal } from './Meal'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route index element={<Home />}/>
      <Route path='/Meal/:id' element={<Meal />}/>
      </>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App


// import React from 'react'
// import { Home } from './pages/home'
// import{ Route,RouterProvider,createRoutesFromElements ,createBrowserRouter } from 'react-router-dom'
// import { Donate } from './pages/donations/donate'
// import { Faq } from "./pages/Faq";



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <Route index element={<Home/>}/>
//     <Route path='/Donate' element={<Donate/>}/>
//     <Route path='/Faq' element={<Faq />}/>
//     </>
//   )
// )

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   )
// }

// export default App
