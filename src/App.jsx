import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Properties from "./pages/properties/Properties";
import PropertyDetails from "./pages/property_details/PropertyDetails";
import MainLayout from "./layout/MainLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/properties" element={<Properties/>}/>
      <Route path="/propertydetails" element={<PropertyDetails/>}/>
      <Route path="/about" element={<About />} />
    </Route>
  )
);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
