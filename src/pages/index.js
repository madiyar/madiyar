import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Link to="/about">About</Link>
      </main>
    </Layout>
  )
}

export default IndexPage
