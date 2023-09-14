"use client";
import React, { useEffect, useState } from "react";
import { DropdownOptions, DropdownToggler } from "./Dropdown";

export default function Navbar() {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [expandNavbar, setExpandNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ExpandMobileNav = () => {
    setExpandNavbar(true);
  };
  const CloseMobileNav = () => {
    setExpandNavbar(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="container">
          <div className="inner-container">
            <div className="row">
              <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12">
                <div className="logo-box">
                  <a aria-label="logo image" href="/">
                    <img src="wevvo-removebg-preview.png" width="101" alt="" />
                  </a>
                  <span
                    className="fa fa-bars mobile-nav__toggler"
                    onClick={ExpandMobileNav}
                  ></span>
                </div>
              </div>
              <div className="d-none d-md-none d-lg-none d-xl-block col-xl-10 col-lg-12 col-md-12 col-sm-12">
                <div className="main-header__top">
                  <p>Welcome to our community-based platform</p>
                  <div className="main-header__social">
                    <a href="https://twitter.com/wevvo_ng" aria-label="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://web.facebook.com/Wevvo.ng"
                      aria-label="facebook"
                    >
                      <i className="fab fa-facebook-square"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/wevvo.ng/"
                      aria-label="instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <nav className="main-menu dynamic-radius">
                  <ul className="main-menu__list undefined">
                    <li className="dropdown">
                      <a>Home</a>
                      <button aria-label="dropdown toggler">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="dropdown-list">
                        <li>
                          <a href="index">Home One</a>
                        </li>
                        <li>
                          <a href="index-2">Home Two</a>
                        </li>
                        <li className="dropdown">
                          <a>Header Styles</a>
                          <button aria-label="dropdown toggler">
                            <i className="fa fa-angle-down"></i>
                          </button>
                          <ul className="dropdown-list">
                            <li>
                              <a href="index">Header One</a>
                            </li>
                            <li>
                              <a href="index-2">Header Two</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Causes</a>
                      <button aria-label="dropdown toggler">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="dropdown-list">
                        <li>
                          <a href="causes">Causes</a>
                        </li>
                        <li>
                          <a href="cause-details">Cause Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Events</a>
                      <button aria-label="dropdown toggler">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="dropdown-list">
                        <li>
                          <a href="events">Events</a>
                        </li>
                        <li>
                          <a href="event-details">Event Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>News</a>
                      <button aria-label="dropdown toggler">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="dropdown-list">
                        <li>
                          <a href="news">News</a>
                        </li>
                        <li>
                          <a href="news-details">News Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a>Pages</a>
                      <button aria-label="dropdown toggler">
                        <i className="fa fa-angle-down"></i>
                      </button>
                      <ul className="dropdown-list">
                        <li>
                          <a href="about">About</a>
                        </li>
                        <li>
                          <a href="volunteers">Volunteers</a>
                        </li>
                        <li>
                          <a href="become-volunteer">Become a Volunteer</a>
                        </li>
                        <li>
                          <a href="gallery">Gallery</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="main-header__info">
                  <ul className="list-unstyled main-header__info-list">
                    <li>
                      <i className="azino-icon-email"></i>
                      <a href="mailto:contact@wevvo.ng">contact@wevvo.ng</a>
                    </li>
                    <li>
                      <i className="azino-icon-telephone"></i>
                      <a href="tel:+2348136326729">+2348136326729</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`stricky-header stricked-menu ${
          stickyHeader && "stricky-fixed"
        }`}
      >
        <div className="container">
          <div className="logo-box">
            <a aria-label="logo image" href="index.html">
              <img src="image-10.png" width="101" alt="" />
            </a>
          </div>
          <div className="sticky-header__content">
            <ul className="main-menu__list undefined">
              <li className="dropdown">
                <a>Home</a>
                <button aria-label="dropdown toggler">
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li>
                    <a href="index">Home One</a>
                  </li>
                  <li>
                    <a href="index-2">Home Two</a>
                  </li>
                  <li className="dropdown">
                    <a>Header Styles</a>
                    <button aria-label="dropdown toggler">
                      <i className="fa fa-angle-down"></i>
                    </button>
                    <ul className="dropdown-list">
                      <li>
                        <a href="index">Header One</a>
                      </li>
                      <li>
                        <a href="index-2">Header Two</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a>Causes</a>
                <button aria-label="dropdown toggler">
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li>
                    <a href="causes">Causes</a>
                  </li>
                  <li>
                    <a href="cause-details">Cause Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a>Events</a>
                <button aria-label="dropdown toggler">
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li>
                    <a href="events">Events</a>
                  </li>
                  <li>
                    <a href="event-details">Event Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a>News</a>
                <button aria-label="dropdown toggler">
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li>
                    <a href="news">News</a>
                  </li>
                  <li>
                    <a href="news-details">News Details</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a>Pages</a>
                <button aria-label="dropdown toggler">
                  <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-list">
                  <li>
                    <a href="about">About</a>
                  </li>
                  <li>
                    <a href="volunteers">Volunteers</a>
                  </li>
                  <li>
                    <a href="become-volunteer">Become a Volunteer</a>
                  </li>
                  <li>
                    <a href="gallery">Gallery</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
              <li className="search-btn search-toggler">
                <span>
                  <i className="azino-icon-magnifying-glass"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`mobile-nav__wrapper ${expandNavbar && "expanded"}`}>
        <div className="mobile-nav__overlay side-menu__block-overlay"></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close side-menu__close-btn"
            onClick={CloseMobileNav}
          >
            <i className="far fa-times"></i>
          </span>
          <div className="logo-box">
            <a aria-label="logo image" href="index.html">
              <img src="image-10.png" width="101" alt="" />
            </a>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list undefined">
              <DropdownToggler lead="Home">
                <DropdownOptions>
                  <li>
                    <a href="index">Home One</a>
                  </li>
                  <li>
                    <a href="index-2">Home Two</a>
                  </li>
                  <DropdownToggler lead="Header Styles">
                    <DropdownOptions>
                      <li>
                        <a href="index">Header One</a>
                      </li>
                      <li>
                        <a href="index-2">Header Two</a>
                      </li>
                    </DropdownOptions>
                  </DropdownToggler>
                </DropdownOptions>
              </DropdownToggler>
              <DropdownToggler lead="Causes">
                <DropdownOptions>
                  <li>
                    <a href="causes">Causes</a>
                  </li>
                  <li>
                    <a href="cause-details">Cause Details</a>
                  </li>
                </DropdownOptions>
              </DropdownToggler>
              <DropdownToggler lead="Events">
                <DropdownOptions>
                  <li>
                    <a href="events">Events</a>
                  </li>
                  <li>
                    <a href="event-details">Event Details</a>
                  </li>
                </DropdownOptions>
              </DropdownToggler>
              <DropdownToggler lead="News">
                <DropdownOptions>
                  <li>
                    <a href="news">News</a>
                  </li>
                  <li>
                    <a href="news-details">News Details</a>
                  </li>
                </DropdownOptions>
              </DropdownToggler>
              <DropdownToggler lead="Pages">
                <DropdownOptions>
                  <li>
                    <a href="about">About</a>
                  </li>
                  <li>
                    <a href="volunteers">Volunteers</a>
                  </li>
                  <li>
                    <a href="become-volunteer">Become a Volunteer</a>
                  </li>
                  <li>
                    <a href="gallery">Gallery</a>
                  </li>
                </DropdownOptions>
              </DropdownToggler>

              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="azino-icon-email"></i>
              <a href="mailto:contact@wevvo.ng">contact@wevvo.ng</a>
            </li>
            <li>
              <i className="azino-icon-telephone"></i>
              <a href="tel:+2348136326729">+2348136326729</a>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <a href="https://twitter.com/wevvo_ng" aria-label="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://web.facebook.com/Wevvo.ng" aria-label="facebook">
                <i className="fab fa-facebook-square"></i>
              </a>

              <a
                href="https://www.instagram.com/wevvo.ng/"
                aria-label="instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
