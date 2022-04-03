import React, {createContext, useEffect, useState} from "react";
import Header from "../components/Header";


export default function Home({ changeCartCounter }) {

    return(
        <div>
            <Header changeCartCounter={changeCartCounter} />
        </div>
    );
}
