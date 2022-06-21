import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Article = ({ data }) => {
    return(
        <Layout>
            {/* I need to add the page title. I also need the meta set up for each page. The layout should accept data.mdx.title as a parameter. */}
            {/* Setup links.  Update Blog page to link to each post - PART 6 in the tut.*/}

            <div
                style={{
                    flexBasis: 5,
                    flexGrow: 5,
                }}  
            >
                <h1>{data.mdx.frontmatter.title}</h1>

                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </div>

            <aside
                style={{
                    flexBasis: 1,
                    flexGrow: 1,
                    marginTop: '2em',
                    padding: '.5em',
                    borderLeft: '1px dotted grey',
                    alignSelf: 'flex-start'
                }}        
            >
                <ul style={{}}>
                    <li style={{listStyleType: 'none'}}>
                    
                        <img src="https://img.icons8.com/material-sharp/24/undefined/export-pdf.png"/> Export as PDF
                    
                    </li>
                    <li style={{listStyleType: 'none'}}>
                    <img src="https://img.icons8.com/ios-filled/25/undefined/copy-link.png"/> Copy Link
                    </li>
                </ul>

                <p
                    style={{
                        paddingLeft: '1.5em'
                    }}
                >
                    Table of Contents
                </p>

                <ul style={{}}>

                    {
                        data.mdx.tableOfContents.items.map(item => (
                            <li key={item.title} style={{listStyleType: 'none'}}>                    
                                <AnchorLink to={`${item.url}`} style={{textDecoration:'none'}}>{item.title}</AnchorLink>
                            </li>
                        ))
                    }



                </ul>


            </aside>
        </Layout>

    )

}

export const query = graphql`
query content($id: String) {
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
      tableOfContents(maxDepth: 3)
    }
  }
`


export default Article