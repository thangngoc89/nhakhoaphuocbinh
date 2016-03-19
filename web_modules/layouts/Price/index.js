/* eslint-disable react/no-multi-comp */
import React, { Component } from "react"
import cx from "classnames"

import Page from "../Page"
import styles from "./index.css"
import data from "./data"

export default class Price extends Component {
  render() {
    return (
      <Page {...this.props}>
        <p><strong>*Các giá dưới đây được tính theo Việt Nam Đồng VNĐ</strong></p>
        {
          Object.keys(data).map((section) => (
            <div>
              <div className={ styles.sectionTitle }>{ section }</div>
              {
                Object.keys(data[section]).map((itemTitle) => (
                  <div className={ cx("pure-u-1", styles.row) }>
                    <div className="pure-u-1-2">
                      { itemTitle }
                    </div>
                    <div className="pure-u-1-2 itemPrice">
                      { data[section][itemTitle] }
                    </div>
                  </div>
                ))
              }
            </div>
          ))
        }
      </Page>
    )
  }
}
