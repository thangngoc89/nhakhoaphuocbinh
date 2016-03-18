import React, { Component } from "react"
import cx from "classnames"
import styles from "./index.css"

import logoArt from "../../../arts/logo-art@1x.png"

export default class HomeIntro extends Component {
  render() {
    return (
      <section className={ cx("pure-u-1", styles.wrap) }>
        <div className={ styles.content }>
          <div className={ styles.logoImgWrap }>
            <img
              src={ logoArt }
              alt="Nha Khoa Phước Bình"
              className={ styles.logoImg }
            />
          </div>
          <h1>Nha Khoa Phước Bình</h1>
          <h2>Tận tâm - Thân thiện - Chuyên nghiệp</h2>

          <button className={ styles.button }>Tìm hiểu ngay</button>
        </div>
      </section>
    )
  }
}
