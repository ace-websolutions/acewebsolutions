import React from "react"
import CodingSVG from "../images/coding.svg"
import HostingSVG from "../images/hosting.svg"
import SeoSVG from "../images/seo.svg"

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaSass,
  FaNpm,
  FaCode,
  FaServer,
  FaSearch,
} from "react-icons/fa"
import {
  SiJavascript,
  SiMongodb,
  SiMaterialUi,
  SiGreensock,
} from "react-icons/si"

export const PROJECTS = [
  {
    title: "Coming Soon",
    description:
      "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses form submission and completely responsive on mobile devices.",
    live: "#",
    code: "#",
    img: "construction.png",
  },
  {
    title: "Dog Walking",
    description:
      "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses form submission and completely responsive on mobile devices.",
    live: "https://festive-villani-dc6a2f.netlify.app/",
    code: "https://github.com/ace-websolutions/dogwalking",
    img: "construction.png",
  },
  {
    title: "Construction Underwriters",
    description:
      "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses google maps for directions and is completely responsive on mobile devices.",
    live: "https://eloquent-brown-193374.netlify.app/",
    code: "https://github.com/ace-websolutions/construction-underwriters",
    img: "construction.png",
  },
]

export const SKILLICONS = [
  { import: <FaHtml5 size={50} />, name: "HTML" },

  { import: <FaCss3Alt size={50} />, name: "CSS" },

  { import: <SiJavascript size={50} />, name: "Javascript" },

  { import: <FaReact size={50} />, name: "React" },

  { import: <FaSass size={50} />, name: "Sass" },

  { import: <SiMaterialUi size={50} />, name: "Material" },

  { import: <SiGreensock size={50} />, name: "GSAP" },

  { import: <FaNode size={50} />, name: "NodeJS" },

  { import: <FaNpm size={50} />, name: "NPM" },

  { import: <SiMongodb size={50} />, name: "MongoDB" },

  { import: <FaGitAlt size={50} />, name: "Git" },

  { import: <FaGithub size={50} />, name: "Github" },
]
export const SERVICES = [
  {
    icon: <FaCode size={50} />,
    svg: <CodingSVG />,
    title: "Front-End",
    description:
      "Custom built websites made to your satisfaction.  Every detail approved by you, for you.",
  },
  {
    icon: <FaServer size={50} />,
    svg: <HostingSVG />,
    title: "Hosting",
    description:
      "From domain registration to server deployment, your site will be taken care of.  I host on fast, reliable, secure, and scalable servers.",
  },
  {
    icon: <FaSearch size={50} />,
    svg: <SeoSVG />,
    title: "SEO",
    description:
      "My code is optimized for search engines, meaning your site will have the best chance of being seen in top search engines.",
  },
]
