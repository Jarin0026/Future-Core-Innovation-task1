import React from "react";
import logo from "../images/logo.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-first flex-grow-1 pe-3">
              <div class="dropdown">
                <a
                  class="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Features
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      <img src={todo} alt="" />
                      <span className="list">Todo List</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img src={calendar} alt="" />
                      <span className="list">Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img src={reminders} alt="" />
                      <span className="list">Reminders</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <img src={planning} alt="" />
                      <span className="list">Planning</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="dropdown">
                <a
                  class="btn dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>

                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      History
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Careers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <div className="account d-flex">
              <a href="">Login</a>
              <a href="" className="reg">
                Register
              </a>
            </div>
          </div>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
