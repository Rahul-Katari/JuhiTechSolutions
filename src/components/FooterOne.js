import Link from "next/link";
import React from "react";
import {
  FaAddressBook,
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div
              className="footer-subscribe-inner bg-cover"
              style={{ backgroundImage: 'url("./assets/img/bg/6.png")' }}
            >
              <div className="row">
                <div className="col-lg-6">
                  <h2 className="mb-lg-0 mb-3">Subscribe To Our Newsletter</h2>
                </div>
                <div className="col-lg-6 align-self-center text-lg-end">
                  <input type="text" placeholder="Your e-mail address" />
                  <Link className="btn btn-black border-radius-0" href="#">
                    Submit now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                {/* <div className="thumb">
                  <img src="assets/img/logo2.png" alt="img" />
                </div> */}
                <div className="details">
                  <div className="mb-4">
                    <h3 className="text-white mb-0">Juhi Tech</h3>
                    <p className="fs-3 lh-1 text-secondary"> Solutions</p>
                  </div>
                  <p className="mt-2">
                      <FaAddressBook />
                    <span>
                      {" "}
                      Villa No. 27, Sri Kasani Krishnaenclave, Bachupally,
                      Hyderabad, 500090.
                    </span>
                  </p>
                  <p className="mt-2">
                    <a className="" href="tel:8978733299">
                      <FaPhoneAlt /> +91&nbsp;&nbsp;8978733299
                    </a>
                  </p>
                  <p className="mt-2">
                    <a href="mailto:hr@juhitechsolutions.com">
                      <FaEnvelope />
                      hr@juhitechsolutions.com
                    </a>
                  </p>
                  <ul className="social-media">
                    <li>
                      <Link href="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Ui Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Digital marketing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Pc Repairs
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link href="/service">
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Contact us</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2023</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link href="/blog-details">
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>© Juhi Tech Solutions 2024 | All Rights Reserved</p>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link href="#">Trams &amp; Condition</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
