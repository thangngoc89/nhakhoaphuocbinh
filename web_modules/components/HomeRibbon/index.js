import React, { Component } from "react"
import cx from "classnames"
import styles from "./index.css"

export default class HomeRibbon extends Component {
  render() {
    return (
      <section className={ cx("pure-u-1", styles.wrap) }>
        <div className={ styles.content }>
          <div className="pure-g">
            <div className={ cx("pure-u-3-4", styles.col) }>
              <p>Khám và từ vấn miễn phí tại Nha Khoa Phước Bình</p>

              <button className={ styles.button }>Đặt lịch hẹn ngay</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
