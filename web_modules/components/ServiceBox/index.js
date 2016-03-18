import React, { PropTypes } from "react"
import styles from "./index.css"

const ServiceBox = ({ heading, img }) => {
  return (
    <div className={ styles.wrap }>
      <img className={ styles.img } src={ img } alt={ heading } />
      <h3 className={ styles.heading }>{ heading }</h3>
    </div>
  )
}

ServiceBox.propTypes = {
  heading: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default ServiceBox
