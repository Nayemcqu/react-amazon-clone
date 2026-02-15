import { BrowserRouter,Routes,Route } from "react-router-dom"
//import { HomePage } from "./components/HomePage"
//import { NavBar } from "./components/NavBar"
import { HomePage, NavBar, CheckOut, SearchResults, ProductPage } from "./components"

function App() {


  return (
    <>
   <BrowserRouter>
<NavBar/>   
   <Routes>
<Route exact  path="/"  element={<HomePage/>} />
<Route   path="/search"  element={<SearchResults/>} />
<Route   path="/product/:id"  element={<ProductPage/>} />
<Route   path="/checkout"  element={<CheckOut/>} />
   </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App
