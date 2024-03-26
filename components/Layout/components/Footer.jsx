import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer>
    <div className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row ">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div  className="fw-logo mb-25">
                  <Link href="#">
                    <img    src="assets/img/logo/logo.png" alt="" />
                  </Link> 
                </div>
                <div className="footer-content">
                  <p>
                    Felis consquat magnis fames sagittis ultrices plasodales
                    porttitor quisque ultrice tempor turpis.
                  </p>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                     
                     
                      <li>
                        <a href="javascript:void(0)">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div  className="col-xl-2 "> </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Information</h4>
                <div className="footer-info-list">
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone-call" />
                      </div>
                      <div className="content">
                        <a href="tel:992 061 9074">+91 992 061 9074</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-envelope" />
                      </div>
                      <div className="content">
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arun@cfosupport.in"  target="_blank">arun@cfosupport.in</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-pin" />
                      </div>
                      <div className="content">
                        <p>
                        Powei , Mumbai City
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h4 className="fw-title">Top Links</h4>
                <div className="footer-link-list">
                  <ul className="list-wrap">
                   
                    <li>
                      <Link href="#">WHY VIRTUAL CFO</Link>
                    </li>
                    <li>
                      <Link href="#">WHAT WE DO</Link>
                    </li>
                    <li>
                      <Link href="#">SERVICES OFFERED</Link>
                    </li>
                    <li>
                      <Link href="#">TEAM</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <h4 className="fw-title">Instagram Posts</h4>
                <div className="footer-instagram">
                  <ul className="list-wrap">
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="assets/img/images/footer_insta01.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="assets/img/images/footer_insta02.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="assets/img/images/footer_insta03.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="assets/img/images/footer_insta04.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="assets/img/images/footer_insta05.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <img
                          src="assets/img/images/footer_insta06.jpg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row text-center">
         
            <div className="">
              <div className="copyright-text">
                <p>
                  Copyright © <Link href="#">CFO Support</Link> | All Right
                  Reserved
                </p>
             
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </footer>
  )
}
