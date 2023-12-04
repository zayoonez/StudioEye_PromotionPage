import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PromotionMainpage from "./Pages/MainPage/PromotionMainPage";
import AboutMainpage from "./Pages/AboutPage/AboutMainPage";
import { AnimatePresence, motion } from 'framer-motion';
import InsertPage from "./Pages/InsertPage/InsertPage";
import DetailPages from './Pages/DetailPage/DetailPages';
import ArtworkMainpage from "./Pages/ArtworkPage/ArtworkMainPage";
import AdminMainPage from "./Pages/AdminPage/AdminMainPage";
import AboutEditPage from "./Pages/AdminPage/AboutEditPage";
import ArtworkEditPage from "./Pages/AdminPage/ArtworkEditPage";
import ContactEditPage from "./Pages/AdminPage/ContactEditPage";
import NoticeEditPage from "./Pages/AdminPage/NoticeEditPage";
import NoticeMainPage from "./Pages/NoticePage/NoticeMainPage";
import ContactPage from './Pages/ContactPage/ContactPage';

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

                        {/*<Route*/}
                        {/*    path="/"*/}
                        {/*    element={*/}
                        {/*        showInsertPage ? (*/}
                        {/*            <motion.div*/}
                        {/*                initial={{ opacity: 0 }}*/}
                        {/*                animate={{ opacity: 1 }}*/}
                        {/*                exit={{ opacity: 0, transition: { duration: 0.5 } }}*/}
                        {/*            >*/}
                        {/*                <InsertPage />*/}
                        {/*            </motion.div>*/}
                        {/*        ) : (*/}
                        {/*            <motion.div*/}
                        {/*                initial={{ opacity: 0 }}*/}
                        {/*                animate={{ opacity: 1 }}*/}
                        {/*                exit={{ opacity: 0 }}*/}
                        {/*                transition={{ duration: 0.5 }}*/}
                        {/*            >*/}
                        {/*                <PromotionMainpage />*/}
                        {/*            </motion.div>*/}
                        {/*        )*/}
                        {/*    }*/}
                        {/*/>*/}
                        <Route path="/" element={<PromotionMainpage />} />
                        <Route path="/About" element={<AboutMainpage />} />
                        <Route path="/Contents" element={<ArtworkMainpage />} />
                        <Route path="/detail/:id" element={<DetailPages />} />
                        <Route path="/notice" element={<NoticeMainPage />} />
                        <Route path="/admin" element={<AdminMainPage />} />
                        <Route path="/admin/about" element={<AboutEditPage />} />
                        <Route path="/admin/artwork" element={<ArtworkEditPage />} />
                        <Route path="/admin/contact" element={<ContactEditPage />} />
                        <Route path="/admin/notice" element={<NoticeEditPage />} />
                        <Route path="/Contact" element={<ContactPage />} />
                    </Routes>
                </AnimatePresence>
            </BrowserRouter>
        </>
    );
}

export default App;
