import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./style.css"
import Signin from "./pages/signin";
import Home from "./pages/home";
import Order from "./pages/order";
import Navbar from "./components/Navbar";
import Basket from "./pages/basket";
import Checkout from "./pages/checkout";


export default function App() {


    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/sign-in"} element={<Signin />} />
                <Route path={"/returns-orders"} element={<Order />} />
                <Route path={"/basket"} element={<Basket />} />
                <Route path={"/check-out"} element={<Checkout />} />
            </Routes>
        </Router>
    );
}
