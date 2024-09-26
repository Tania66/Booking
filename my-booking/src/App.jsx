import "./App.css";
import { Routes,Navigate, Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";


export const App =() => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About />} />
        </Route>
        <Route path="*"  element ={<Navigate to = " / "/>}/>
      </Routes>
    </div>
  );
}

