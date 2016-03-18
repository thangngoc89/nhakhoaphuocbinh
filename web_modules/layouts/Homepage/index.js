import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import Intro from "../../components/HomeIntro"
import Services from "../../components/HomeServices"
import Ribbon from "../../components/HomeRibbon"
import Contact from "../../components/HomeContact"
import Team from "../../components/HomeTeam"
import Map from "../../components/HomeMap"

export default class Homepage extends Component {
  static propTypes = {
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      data,
    } = this.context.metadata

    const {
      __url,
      head,
    } = this.props

    const title = `${ head.title } | ${ data.siteName }`
    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <main className="pure-g">
        <Helmet
          title={ title }
          meta={ meta }
        />
        <Intro />
        <Services />
        <Ribbon />
        <Team />
        <Contact />
        <Map />
      </main>
    )
  }
}
