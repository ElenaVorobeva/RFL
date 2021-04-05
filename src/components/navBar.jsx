import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const NavBar = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <nav className="nav navbar navbar-fixed-top sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav__link nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>

            <li>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                  Basics in reading
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        smooth
                        to="/basics-in-reading#alphabet"
                        scroll={(el) => scrollWithOffset(el)}
                      >
                        Alphabet
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        smooth
                        to="/basics-in-reading#handwriting"
                        scroll={(el) => scrollWithOffset(el)}
                      >
                        Handwriting
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        smooth
                        to="/basics-in-reading#reading-rules"
                        scroll={(el) => scrollWithOffset(el)}
                      >
                        Reading Rules
                      </Link>
                    </li>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>

            <li>
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link" caret>
                  Basics in Speaking
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <li className="nav-item">
                      <Link className="nav-link" to="/basics-in-speaking">
                        Greetings
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem>
                    <li className="nav-item">
                      <Link className="nav-link" to="/basics-in-speaking">
                        Common phrases
                      </Link>
                    </li>
                  </DropdownItem>
                  <DropdownItem>
                    <li className="nav-item">
                      <Link className="nav-link" to="/basics-in-speaking">
                        Tongue Twisters
                      </Link>
                    </li>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/phonetics">
                Phonetics
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/sign-in">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/log-in">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
