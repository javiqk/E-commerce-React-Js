import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js"
import HomePage from "../../pages/HomePage/HomePage.js";
import ContactPage from "../../pages/ContactPage/ContactPage.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";
import ItemDetailPage from "../../pages/ItemDetailPage/ItemDetailPage.js";

export default function AppRouter() {

    return (
        <BrowserRouter>
        <NavBar />
        <Routes> 
            <Route path="/products/:id" element = {<ItemDetailPage />} />
            <Route path="/contact" element = {<ContactPage />} />
            <Route path="/" element = {<HomePage />} />
            <Route path="*" element = {<NotFoundPage />} />
        </Routes> 
        </BrowserRouter>
    )

}