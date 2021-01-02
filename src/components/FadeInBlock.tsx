import { relative } from 'path'
import React from 'react'
import { useSpring, animated } from "react-spring"

const before = { opacity: 0, position: relative, top: "12px" }
const after = { opacity: 1, position: relative, top: 0 }

export const FadeInBlock = ({ children }) => {
  const props = useSpring({ opacity: 1, left: 0, from: { opacity: 0, left: "12px" }, config: { duration: 800 } })
  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  )
}
