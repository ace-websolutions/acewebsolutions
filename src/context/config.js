import React from "react"
import CodingSVG from "../images/coding.svg"
import HostingSVG from "../images/hosting.svg"
import SeoSVG from "../images/seo.svg"
import HandSVG from "../images/handshake.svg"

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
  SiGatsby,
  SiFramer
} from "react-icons/si"

export const SKILLICONS = [
  { import: <FaHtml5 size={50} />, name: "HTML" },
  { import: <FaCss3Alt size={50} />, name: "CSS" },
  { import: <SiJavascript size={50} />, name: "Javascript" },
  { import: <FaReact size={50} />, name: "React" },
  { import: <FaSass size={50} />, name: "Sass" },
  { import: <SiGatsby size={50} />, name: "Gatsby" },
  { import: <SiFramer size={50} />, name: "Framer Motion" },
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
    svg: <HandSVG />,
    title: "Business Asset",
    description:
      "My ultimate goal is to help you do your business better.  I want to help drive more traffic to your brand.",
  },
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
