import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import cx from "classnames"

import styles from "./index.css"

export default class Page extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    const {
      __filename,
      __url,
      head,
      body,
    } = this.props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <main className={ cx("pure-g", styles.wrap) }>
        <Helmet
          title={ metaTitle }
          meta={ meta }
        />
        <div className="pure-u-1 pure-u-md-20-24" style={ { margin: "auto" } }>
          {
            head.title &&
            <h1>{ head.title }</h1>
          }
          {
            body &&
            <div
              dangerouslySetInnerHTML={ { __html: body } }
            />
          }
          { this.props.children }
        </div>
      </main>
    )
  }
}
