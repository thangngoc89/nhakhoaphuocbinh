import React, { Component } from "react"
import cx from "classnames"

import SectionHeader from "../SectionHeader"
import Avatar from "../Avatar"

import styles from "./index.css"
import thang from "../../../arts/thang@web.jpg"
import truc from "../../../arts/truc@web.jpg"
import tuan from "../../../arts/tuan@web.jpg"

const data = [
  {
    img: thang,
    job: "Nha Sĩ",
    name: "Nguyễn Lê Quốc Thắng",
  },
  {
    img: truc,
    job: "Nha Sĩ",
    name: "Lê Thị Cẩm Trúc",
  },
  {
    img: tuan,
    job: "Nha Sĩ",
    name: "Nguyễn Trần Trọng Tuấn",
  },
]
export default class HomeTeam extends Component {
  render() {
    return (
      <section className={ cx("pure-u-1", styles.wrap) }>
        <SectionHeader
          heading="Bác sĩ"
          subHeading="Đội ngũ bác sĩ tại Nha Khoa Phước Bình tự hào tốt nghiệp Khoa Răng Hàm Mặt - Đại Học Y Dược Thành Phố Hồ Chí Minh"
        />
        {
          data.map((entry) => (
            <div
              key={ entry.name }
              className="pure-u-1 pure-u-md-1-3"
              style={ { margin: "auto" } }
            >
              <Avatar {...entry} />
            </div>
          ))
        }
      </section>
    )
  }
}
