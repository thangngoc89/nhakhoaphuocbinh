import remark from "remark"
import html from "remark-html"

export default (text) => (
  remark
    // https://github.com/wooorm/remark-html
    .use(html, { entities: "escape" })
    // render
    .process(text, {
      commonmark: true,
    })
)
