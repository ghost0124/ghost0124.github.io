import React from "react";
import Navbar from "./navbar";
import '../styles/global.css'

export default function Layout({ children }) {
    return(
        <div className="layout">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Hold onto your sanity 2023</p>
            </footer>
        </div>
    )
}