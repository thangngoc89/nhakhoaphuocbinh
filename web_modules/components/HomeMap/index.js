import React, { Component } from "react"
import cx from "classnames"
import styles from "./index.css"

export default class HomeMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      overlay: true,
    }

    this.hideOverlay = this.hideOverlay.bind(this)
  }

  hideOverlay() {
    this.setState({ overlay: false })
  }

  render() {
    const overlayClass = cx(styles.overlay, {
      [styles.hideOverlay]: !this.state.overlay,
    })

    return (
      <section className={ cx("pure-u-1", styles.wrap) }>
        <div
          className={ overlayClass }
          onClick={ this.hideOverlay }
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9321.320926327557!2d106.77536066087923!3d10.80114894061392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175268c2c86c283%3A0xa86aea1e861158e0!2zTmhhIEtob2EgUGjGsOG7m2MgQsOsbmg!5e0!3m2!1sen!2s!4v1444475548487"
          height="450"
          width="100%"
          frameBorder="0"
          allowFullScreen
        />
      </section>
    )
  }
}
