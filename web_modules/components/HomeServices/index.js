import React, { Component } from "react"
import cx from "classnames"
import SectionHeader from "../SectionHeader"
import ServiceBox from "../ServiceBox"

import styles from "./index.css"
import thammy from "./thammy.png"
import phuchoi from "./phuchoi.png"
import phongngua from "./phongngua.png"

const data = [
  {
    img: thammy,
    heading: "Nha khoa thẩm mỹ",
  },
  {
    img: phuchoi,
    heading: "Nha khoa phục hồi",
  },
  {
    img: phongngua,
    heading: "Nha khoa phòng ngừa",
  },
]
export default class HomeServices extends Component {
  render() {
    return (
      <section id="services" className={ cx("pure-u-1", styles.wrap) }>
        <SectionHeader
          heading="Dịch vụ nha khoa"
          subHeading="Tại Nha Khoa Phước Bình chúng tôi cung cấp những dịch vụ sau"
        />
        <div className="pure-g">
          {
            data.map((entry) => (
              <div
                key={ entry.heading }
                className="pure-u-1 pure-u-md-7-24"
                style={ { margin: "auto" } }
              >
                <ServiceBox {...entry} />
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}
