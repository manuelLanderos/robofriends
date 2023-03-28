import React from "react"

const Scroll = (props) => {
  return (
    <div style={{
      overflowX: "scroll", border: "5 px solid black", height: "800px"
    }
    }>
      {props.children}
    </div>
  )
}
export default Scroll