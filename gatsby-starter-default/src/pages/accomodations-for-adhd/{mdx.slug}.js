import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Article = ({ data }) => {
    return(
        <Layout>
            {/* I need to add the page title. I also need the meta set up for each page. The layout should accept data.mdx.title as a parameter. */}
            {/* Setup links.  Update Blog page to link to each post - PART 6 in the tut.*/}
            {/* Set up H2  Table of Contents.*/}
            <h1>{data.mdx.frontmatter.title}</h1>

        
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>

    )

}

export const query = graphql`
query content ($id: String){
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        chapter
        keywords
        publish(formatString: "MMMM DD, YYYY")
        update(formatString: "MMMM DD, YYYY")
        short
      }
      slug
      body
    }
  }
`


export default Article