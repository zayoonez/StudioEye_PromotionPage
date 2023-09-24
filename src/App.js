import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PromotionMainpage from "./Pages/MainPage/PromotionMainPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/"  element={<PromotionMainpage />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
