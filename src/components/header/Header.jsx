import React from "react";
import { BiSolidCoffee } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <span className="icon"><BiSolidCoffee/></span>
                <a href="#default" className="title">my<span>portfolio.</span></a>
            </div>

            <div className="header-right">
                <a className="active" href="#home">home</a>
                <a href="#about">about</a>
                <a href="projects">projects</a>
                <a href="articles">articles</a>
                <a href="#contact">contact</a>
                <a className="resume" href="#resume">resume <FaCloudDownloadAlt/></a>
            </div>
        </div>
    );
}

export default Header;