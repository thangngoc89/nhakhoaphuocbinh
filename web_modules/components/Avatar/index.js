import React, { Component, PropTypes } from "react"
import styles from "./index.css"

export default class Avatar extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
  };

  render() {
    const { img, name, job } = this.props
    return (
      <div className={ styles.wrap }>
        <div>
          <img src={ img } />
        </div>
        <div className={ styles.details }>
          <div className={ styles.innerDetails }>
            <p>{ name }</p>
            <p>{ job }</p>
          </div>
        </div>
      </div>
    )
  }
}
