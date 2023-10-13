import React, { useEffect } from 'react';
import './App.css';
import styled, {createGlobalStyle} from "styled-components";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import PromotionMainpage from "./Pages/MainPage/PromotionMainPage";
import AboutMainpage from "./Pages/AboutPage/AboutMainPage";
import { AnimatePresence, motion } from 'framer-motion';
import InsertPage from "./Pages/InsertPage/InsertPage";
import DetailPage from './Pages/DetailPage/DetailPage';
import ArtworkMainpage from "./Pages/ArtworkPage/ArtworkMainPage";

function App() {
    const [showInsertPage, setShowInsertPage] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInsertPage(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

  return (
    <>
      <BrowserRouter>
          <AnimatePresence>

          <Routes>
              <Route
                  path="/"
                  element={
                      showInsertPage ? (
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0, transition: { duration: 0.5 } }}
                          >
                              <InsertPage />
                          </motion.div>
                      ) : (
                          <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                          >
                              <PromotionMainpage />
                          </motion.div>
                      )
                  }
              />
            <Route path="/About"  element={<AboutMainpage />}/>
              <Route path="/Artwork"  element={<ArtworkMainpage />}/>
            <Route path="/detail" element= {<DetailPage />}/>

          </Routes>
          </AnimatePresence>
      </BrowserRouter>
      </>
  );
}

export default App;
