import React, { Component } from "react"
import cx from "classnames"
import styles from "./index.css"

import SVG from "react-svg-inline"

import facebook from "../../icons/facebook.svg"
import gPlus from "../../icons/google-plus.svg"

export default class Footer extends Component {

  render() {
    return (
      <footer className={ cx("pure-u-1", styles.wrap) }>
        <a
          href="https://khoanguyen.me/"
          className={ styles.link }
          target="_blank"
        >
          Built with <span className={ styles.heart }>♥</span> by Khoa Nguyen
        </a>
        <p>Copyright @2015-present Nha Khoa Phuoc Binh</p>
        <div className={ styles.social }>

          <a href="https://www.facebook.com/nhakhoaphuocbinh">
            <SVG svg={ facebook } />
          </a>
          <a href="http://google.com/+NhaKhoaPh%C6%B0%E1%BB%9BcB%C3%ACnhH%E1%BB%93Ch%C3%ADMinh">
            <SVG svg={ gPlus } />
          </a>
        </div>
      </footer>
    )
  }
}
