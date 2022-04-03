import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./style.css"
import Signin from "./pages/signin";
import Home from "./pages/home";
import Order from "./pages/order";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";


export default function App() {


    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/sign-in"} element={<Signin />} />
                <Route path={"/returns-orders"} element={<Order />} />
                <Route path={"/check-out"} element={<Cart />} />
            </Routes>
        </Router>
    );
}
