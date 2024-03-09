import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Navbar() {
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (link) => {
        setActiveLink(link);
    };

    const langHandleClick = () => {
        Swal.fire({
            icon: "error",
            title: "Content Not Yet Available",
            text: "Sorry for the inconvenience.",
            customClass: {
                popup: "custom-swal-popup",
                confirmButton: "custom-swal-confirm-button",
            },
        });
    };

    const logInHandleClick = () => {
        Swal.fire({
            title: "Submit your Github username",
            input: "text",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Look up",
            showLoaderOnConfirm: true,
            customClass: {
                popup: "custom-swal-popup",
                confirmButton: "custom-swal-confirm-button",
                cancelButton: "custom-swal-cancel-button",
            },
            preConfirm: async (login) => {
                try {
                    const githubUrl = `https://api.github.com/users/${login}`;
                    const response = await fetch(githubUrl);
                    if (!response.ok) {
                        throw new Error("User not found"); // Throw an error when user not found
                    }
                    return response.json();
                } catch (error) {
                    throw new Error("Invalid username or failed to fetch user data");
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: `${result.value.login}'s avatar`,
                        imageUrl: result.value.avatar_url,
                        customClass: {
                            popup: "custom-swal-popup",
                            confirmButton: "custom-swal-confirm-button",
                            cancelButton: "custom-swal-cancel-button",
                            image: "custom-swal-image",
                        },
                    });
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "User not found",
                    text: error.message,
                    customClass: {
                        popup: "custom-swal-popup",
                        confirmButton: "custom-swal-confirm-button",
                        cancelButton: "custom-swal-cancel-button",
                    },
                });
            });
    };

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={"logo.png"} className="App-logo" alt="logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse ms-5 "
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className={`nav-link ${activeLink === "home" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("home")}
                                    aria-current="page"
                                >
                                    <small> Home </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/slot-game"
                                    className={`nav-link nav-link-slot ${activeLink === "slot-game" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("slot-game")}
                                >
                                    <small> Slot Game </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/live-casino"
                                    className={`nav-link nav-link-live ${activeLink === "live-casino" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("live-casino")}
                                >
                                    <small> Live Casino </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/sports-betting"
                                    className={`nav-link nav-link-sports ${activeLink === "sports-betting" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("sports-betting")}
                                >
                                    <small> Sports Betting </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/minigame"
                                    className={`nav-link nav-link-mini ${activeLink === "minigame" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("minigame")}
                                >
                                    <small> Minigame </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/lottery"
                                    className={`nav-link nav-link-lottery ${activeLink === "lottery" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("lottery")}
                                >
                                    <small> Lottery </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/events-and-promo"
                                    className={`nav-link nav-link-events ${activeLink === "events-and-promo" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("events-and-promo")}
                                >
                                    <small> Events & Promo </small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/customer"
                                    className={`nav-link nav-link-customer ${activeLink === "customer" ? "active" : ""
                                        }`}
                                    onClick={() => handleClick("customer")}
                                >
                                    <small> Customer </small>
                                </Link>
                            </li>
                        </ul>
                        <div className="navbar-nav ms-auto">
                            <button
                                onClick={logInHandleClick}
                                className="btn btn-outline-secondary square-btn text-light"
                            >
                                LOGIN
                            </button>
                            &nbsp;&nbsp;&nbsp;
                            <button
                                onClick={langHandleClick}
                                className="btn btn-outline-secondary square-btn text-light"
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default Navbar;
