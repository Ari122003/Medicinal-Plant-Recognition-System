import "./App.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import AppPage from "./components/AppPage";

import Home from "./components/Home";
import ImageRecognition from "./components/ImageRecognition";
import ScientificNames from "./components/ScientificNames";
import ImageSearch from "./components/ImageSearch";

const App=()=>{
  return(
    <RecoilRoot>
  {/* <AppPage/> */}
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<AppPage/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/image" element={<ImageRecognition/>}></Route>
    <Route path="/scientific" element={<ScientificNames/>}></Route>
    <Route path="/imageSearch" element={<ImageSearch/>}></Route>
  </Routes>
  </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
