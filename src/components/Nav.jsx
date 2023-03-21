import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav(){
    return (
        <div className="Nav">
            <p className="Nav-Text">Sort By:</p>
            <nav className="Nav-Options">
                <NavLink to="/">Date</NavLink>
                <NavLink to="Liked">Likes</NavLink>
                <NavLink to="Retweets">Retweets</NavLink>
                <NavLink to="Replies">Replies</NavLink>
            </nav>
        </div>
    )
}