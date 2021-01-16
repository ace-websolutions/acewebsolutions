import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { PageContext } from "../context/pagecontext"
import Logo from "../images/logo/Ace.white.svg"

const Landing = () => {
  const { setLeftPage, setRightPage } = useContext(PageContext)

  useEffect(() => {
    // eslint-disable-next-line
    setLeftPage("")
    // eslint-disable-next-line
    setRightPage("about")
  }, [])

  return (
    <section id="landing">
      <div className="container">
        <div className="flex landing-container">
          <div className="logo">
            <Logo />
          </div>
          <div className="text">
            <h2>Front end web developer </h2>
            <p>Want a hand with anything in the world wide web? Here I am! </p>
            <div className="btn-group">
              <a
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebookF size={25} />
              </a>
              <a
                href="https://www.github.com/ace-websolutions"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
            <div className="next-section-button landing-contact">
              <Link to="/contact">Contact Me</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
