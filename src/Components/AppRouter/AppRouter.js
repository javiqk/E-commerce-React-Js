import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.js"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import HomePage from "../../pages/HomePage/HomePage.js";
import ContactPage from "../../pages/ContactPage/ContactPage.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";

export default function AppRouter() {

    return (
        <BrowserRouter>
        <NavBar />
        <Routes> 
            <Route path="/contact" element = {<ContactPage />} />
            <Route path="/product" element = {<ItemDetailContainer />} />
            <Route path="/" element = {<HomePage />} />
            <Route path="*" element = {<NotFoundPage />} />
            <p>
            Bienvenido a Monkey
            </p>
        </Routes> 
        </BrowserRouter>
    )

}