import React from "react"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="container-fluid">
          <div className="flex footer-container">
            <ul>
              <li>&copy; Ace Web Solutions. All rights reserved</li>
              <li>
                Inspiration:{" "}
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
                Photos:{" "}
                <a
                  href="http://unsplash.com"
                  title="unsplash"
                  rel="noreferrer"
                  target="_blank"
                >
                  Unsplash
                </a>
              </li>
              <li>
                SVG:{" "}
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
                </a>{" "}
                from{" "}
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
