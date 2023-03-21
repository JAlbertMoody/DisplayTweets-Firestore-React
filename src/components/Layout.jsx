import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"
import SubHeader from "./SubHeader"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <SubHeader />
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}