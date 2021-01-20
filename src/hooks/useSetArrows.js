import { useContext, useEffect } from "react"
import { PageContext } from "../context/pagecontext"

const useSetArrows = (left, right) => {
  const { leftPage, rightPage, setLeftPage, setRightPage } = useContext(
    PageContext
  )

  useEffect(() => {
    setLeftPage(left)
    setRightPage(right)
  }, [left, right, setLeftPage, setRightPage])
  return [leftPage, rightPage]
}

export default useSetArrows
