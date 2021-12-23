import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.js"
import HomePage from "../../pages/HomePage/HomePage.js";
import ContactPage from "../../pages/ContactPage/ContactPage.js";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.js";
import ProductsPage from "../../pages/ProductsPage/ProductsPage.js";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage.js";
import Footer from '../Footer/Footer';
import ItemDetailPage from "../../pages/ItemDetailPage/ItemDetailPage.js";
import CartPage from "../../pages/CartPage/CartPage.js";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";

export default function AppRouter() {

    return (
        <BrowserRouter>
        <NavBar />
        <Routes> 
            <Route path="/products/:id" element = {<ItemDetailPage />} />
            <Route path="/:category/" element = {<CategoriesPage />} />
            <Route path="/contact" element = {<ContactPage />} />
            <Route path="/cart" element = {<CartPage />} />
            <Route path="/aboutus" element = {<AboutUsPage />} />
            <Route path="/product" element = {<ProductsPage />} />
            <Route path="/" element = {<HomePage />} />
            <Route path="*" element = {<NotFoundPage />} />
        </Routes> 
        <Footer />
        </BrowserRouter>
    )

}