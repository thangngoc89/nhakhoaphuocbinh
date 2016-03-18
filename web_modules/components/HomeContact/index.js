import React, { Component } from "react"
import cx from "classnames"
import SVG from "react-svg-inline"

import email from "../../icons/email.svg"
import location from "../../icons/location.svg"
import phone from "../../icons/phone.svg"

import styles from "./index.css"

const data = [
  {
    key: "email",
    icon: email,
    content: "drthang@nhakhoaphuocbinh.com",
    link: "mailto:drthang@nhakhoaphuocbinh.com",
  },
  {
    key: "address",
    icon: location,
    content: "433, Đường Đỗ Xuân Hợp, Phường Phước Long B, Quận 9, Hồ Chí Minh, Viet Nam",
    link: "https://www.google.com/maps/place/Nha+Khoa+Ph%C6%B0%E1%BB%9Bc+B%C3%ACnh/@10.8028937,106.7801394,16z/data=!4m2!3m1!1s0x0:0xa86aea1e861158e0?hl=en-US",
  },
  {
    key: "tel",
    icon: phone,
    content: "(08) 6674 9658",
    link: "tel:+84866749658",
  },
]

export default class HomeContact extends Component {
  render() {
    return (
      <section className={ cx("pure-u-1", styles.wrap) }>
        {
          data.map((entry) => (
            <div
              key={ entry.key }
              className="pure-u-1 pure-u-md-1-3"
            >
              <a className={ styles.content } href={ entry.link }>
                <div className={ styles.iconWrap }>
                  <SVG svg={ entry.icon } />
                </div>
                <p>{ entry.content }</p>
              </a>
            </div>
          ))
        }
      </section>
    )
  }
}
