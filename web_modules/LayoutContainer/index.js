import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import Header from "../components/Header"
import Footer from "../components/Footer"

import styles from "./index.css"
import "../styles/global.styles"

export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      data,
    } = this.context.metadata

    return (
      <div className={ styles.wrap }>
        <Helmet
          meta={ [
            { property: "og:site_name", content: data.siteName },
          ] }
        />
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
