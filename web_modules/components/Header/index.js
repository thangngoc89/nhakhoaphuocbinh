import React, { Component } from "react"
import { Link } from "statinamic/lib/Link"
import cx from "classnames"
import styles from "./index.css"

export default class Header extends Component {

  render() {
    return (
      <header
        className={ cx("pure-menu pure-menu-horizontal pure-menu-fixed", styles.wrap) }
      >
        <Link
          to="/"
          className={ cx("pure-menu-heading", styles.heading) }
        >
          Nha Khoa Phước Bình
        </Link>

        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link
              to="/bang-gia/"
              className="pure-menu-link"
            >
              Bảng giá
            </Link>
          </li>
        </ul>
      </header>
    )
  }
}
