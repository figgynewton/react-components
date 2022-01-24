import React from "react";

function Nav() {
    return (
        <nav className="nav">
            <div>
                <nav to="/">Home</nav>
                <nav to="/about">About</nav>
                <nav to="/contact">Contact</nav>
            </div>
        </nav>
    );
}

export default Nav;