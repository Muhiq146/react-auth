import React from "react";
import { Link } from "react-router-dom";
import bgimg from "./tree.jpeg";

export default function Dashboard() {
  
  const logout= () =>{
    localStorage.removeItem("login");
  }

  // const location = useLocation();
  return (
    <div>
      <div id="main">
        <nav className="navbar navbar-expand-lg navbar-light">
          <p className="navbar-brand">
            Navbar
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto lead">
              <li className="nav-item active">
                <p className="nav-link mr-3">Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link mr-3">Apps</p>
              </li>
              <li className="nav-item">
                <p className="nav-link mr-3">Testimonials</p>
              </li>
              <li className="nav-item">
                <p className="nav-link mr-3">About us</p>
              </li>
              <li className="nav-item">
                <p className="nav-link mr-3" onClick={logout}>
                  <Link to="/">Log Out</Link>
                </p>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ backgroundImage: `url(${bgimg})`, height: "800px" }}>
          <h1 id="header" style={{ color: "white" }}>
            Hello
          </h1>
          <h1 style={{ color: "white" }}>Description</h1>
          {/* <h1 style={{ color: "white" }}></h1> */}
        </div>
      </div>
      <div
        className="sidebar"
        style={{
          height: "100%",
          width: "0",
          position: "fixed",
          zIndex: "1",
          top: "0",
          left: "0",
          backgroundColor: "#111",
          overflowX: "hidden",
          transition: "0.5s",
          paddingTop: "60px",
        }}
      >
        <p
          className="closebtn"
          style={{
            position: "absolute",
            top: "0",
            right: "25px",
            fontSize: "36px",
            marginLeft: "50px",
          }}
        >
          ×
        </p>
        <p
          href="#"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: "25px",
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          About
        </p>
        <p
          href="#"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: "25px",
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          Services
        </p>
        <p
          href="#"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: "25px",
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          Clients
        </p>
        <p
          href="#"
          style={{
            padding: "8px 8px 8px 32px",
            textDecoration: "none",
            fontSize: "25px",
            color: "#818181",
            display: "block",
            transition: "0.3s",
          }}
        >
          Contact
        </p>
      </div>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <p className="navbar-brand" href="#">
          This is a footer
        </p>
      </nav>
    </div>
  );
}
