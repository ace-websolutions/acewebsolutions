import React, { useState, createContext } from "react"

export const PageContext = createContext()

export const PageProvider = props => {
  const [leftPage, setLeftPage] = useState("")
  const [rightPage, setRightPage] = useState("about")
  const [open, setOpen] = useState(false)

  return (
    <PageContext.Provider
      value={{ leftPage, setLeftPage, rightPage, setRightPage, open, setOpen }}
    >
      {props.children}
    </PageContext.Provider>
  )
}
