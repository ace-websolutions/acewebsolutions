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
    title: "Restaurant Site",
    description: "Animated Multi Page App.",
    live: "#",
    code: "#",
    liveColor: "",
    codeColor: "",
    img: "placeholder",
  },
  {
    title: "Doctor Landing",
    description: "Animated Landing Page.",
    live: "#",
    code: "#",
    liveColor: "",
    codeColor: "",
    img: "placeholder",
  },
  {
    title: "Construction Underwriters",
    description:
      "Example of a single page web application.  Features sections such as: Services, About and Contact.  Uses google maps for directions and is completely responsive on mobile devices.",
    live: "https://aceconstruction.herokuapp.com/",
    code: "https://github.com/nick-dasto/construction",
    liveColor: "#00bcd4",
    codeColor: "#33c9dc",
    img: "placeholder",
  },
  {
    title: "Travel App",
    description:
      "Full stack application make to keep track of someones travels.  It is a multi-page application with user authentication and a MongoDB backend. View your account from anywhere and add posts. ",
    live: "https://merntravelapp.herokuapp.com/",
    code: "https://github.com/nick-dasto/travelapp",
    liveColor: "#ff9100",
    codeColor: "#ffa733",
    img: "placeholder",
  },
  {
    title: "To-Do App",
    description: "Full Stack ToDo list",
    live: "#",
    code: "#",
    liveColor: "",
    codeColor: "",
    img: "placeholder",
  },
  {
    title: "Home Dashboard",
    description:
      "Locally hosted web app created to make accessing my work and home web interfaces easy and convenient.  From any device with wifi I can check up on live projects and quickly access my cameras or network attached storage!",
    live: "#",
    code: "#",
    liveColor: "#ee2e31",
    codeColor: "#EB3C3E",
    img: "placeholder",
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
