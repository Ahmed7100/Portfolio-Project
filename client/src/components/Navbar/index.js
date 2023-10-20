import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElelments";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
 
                <NavMenu>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/project" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/Contact" activeStyle>
                        Contact
                    </NavLink>
                    
                    <NavBtn>
                    <NavBtnLink to="/subscribe">
                        Subscribe
                    </NavBtnLink>
                </NavBtn>

                </NavMenu>
            </Nav>
        </>
        );
        };

    export default Navbar;