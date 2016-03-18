import React, { PropTypes } from "react"

import TitleDivider from "../TitleDivider"
import styles from "./index.css"

const SectionHeader = ({ children, heading, subHeading }) => {
  return (
    <div className={ styles.wrap }>
      <h2 className={ styles.heading }>{ heading }</h2>
      <TitleDivider />
      {
        subHeading &&
        <p className={ styles.subHeading }>{ subHeading }</p>
      }
      { children }
    </div>
  )
}

SectionHeader.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
}

export default SectionHeader
