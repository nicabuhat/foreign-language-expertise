import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import homeStyle from "./index.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={homeStyle.home}>
      <main className={homeStyle.main}>
        <h1>Blog of the Day</h1>
      </main>
      <section className={homeStyle.about}>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <h2>Greetings!</h2>
        <p>
          Hello, I am Alexander Arguelles. I have devoted my life to learning as
          many foreign languages as I can, as well as I can, in a systematic and
          scholarly fashion. I would like to share my knowledge and experience
          with you.
        </p>
      </section>
    </div>

    {/* <Link to="/blog/">Go to page 2</Link> <br />
    <Link to="/about/">Go to page 2</Link> <br />
    <Link to="/contact/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
