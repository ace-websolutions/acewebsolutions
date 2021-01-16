import React from "react"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="container-fluid">
          <div className="flex footer-container">
            <ul className="business-info">
              {/* <li>
                <h3>Info</h3>
              </li> */}
              <li>
                <h4>&copy; Ace Web Solutions &#183; All rights reserved</h4>
              </li>
              {/* <li>
                <h5>Address</h5>
                <p>8630-M Guilford Rd STE304 &#183; Columbia, MD 20146</p>
              </li>
              <li>
                <h5>Phone</h5>
                <a href="tel:+0000000000">(000) 000-0000</a>
              </li>
              <li>
                <h5>Email</h5>
                <a href="mailto: info@acewebsolutions.io">
                  info@acewebsolutions.io
                </a>
              </li> */}
            </ul>
            <ul className="copy-write">
              {/* <li>
                <h3>Inspiration</h3>
              </li> */}
              {/* <li>
                <h5>Design</h5>
                <a
                  href="http://html5up.net"
                  title="HTML5 UP"
                  rel="noreferrer"
                  target="_blank"
                >
                  HTML5 UP
                </a>
              </li>
              <li>
                <h5>Photos</h5>
                <a
                  href="http://unsplash.com"
                  title="unsplash"
                  rel="noreferrer"
                  target="_blank"
                >
                  Unsplash
                </a>
              </li> */}
              <li>
                <h5>SVG</h5>
                <a
                  href="https://www.flaticon.com/authors/eucalyp"
                  title="SVG Author"
                  rel="noreferrer"
                  target="_blank"
                >
                  Eucalyp
                </a>{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  title="SVG Author"
                  rel="noreferrer"
                  target="_blank"
                >
                  Freepik
                </a>{" "}
                <a
                  href="https://www.flaticon.com/authors/srip"
                  title="SVG Author"
                  rel="noreferrer"
                  target="_blank"
                >
                  Srip
                </a>
                <p>&#183;</p>
                <a
                  href="https://www.flaticon.com/"
                  title="Flaticon"
                  rel="noreferrer"
                  target="_blank"
                >
                  Flaticon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
