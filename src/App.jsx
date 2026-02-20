import { BrowserRouter,Routes,Route,createBrowserRouter,RouterProvider } from "react-router-dom"
//import { HomePage } from "./components/HomePage"
//import { NavBar } from "./components/NavBar"
import { HomePage, NavBar, CheckOut, SearchResults, ProductPage } from "./components"
import Layout from "./components/Layout";
function App() {

const router=createBrowserRouter([
{ 

path:"/",element:<Layout/>,
children:[

{index:true,element:<HomePage/>},

{path:"/search",element:<SearchResults/>},

{path:"product/:id",element:<ProductPage/>},

{  path:"/checkout",  element:<CheckOut/>}

]

}


]);



  return (
    <>
<RouterProvider router={router}/>




{/* 
   <BrowserRouter>
<NavBar/>   
   <Routes>
<Route exact  path="/"  element={<HomePage/>} />
<Route   path="/search"  element={<SearchResults/>} />
<Route   path="/product/:id"  element={<ProductPage/>} />
<Route   path="/checkout"  element={<CheckOut/>} />
   </Routes>
   </BrowserRouter>
    */}
</>
  )
}

export default App
