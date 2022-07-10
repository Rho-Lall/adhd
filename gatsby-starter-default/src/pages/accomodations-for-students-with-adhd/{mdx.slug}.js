import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Helmet} from 'react-helmet'

const Article = ({ data }) => {

    const image = getImage(data.mdx.frontmatter.hero_image)

    return(
        <Layout>
            <Seo title={data.mdx.frontmatter.title} />
            <Helmet>
                <meta name="description" content={data.mdx.frontmatter.short}/>
                <meta name="keywords" content={data.mdx.frontmatter.keywords}/>
                <meta name="author" content="Rho Lall"/>
                <meta property="og:title" content={data.mdx.frontmatter.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content={data.mdx.frontmatter.short}/>
                <meta property="og:image" content={image}/>
                <meta property="og:image:alt" content={data.mdx.frontmatter.title}/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:url" content="https://rho-lall.github.io/adhd"/>
                <link rel="canonical" href="https://rho-lall.github.io./adhd"/>
            </Helmet>

            <div
                style={{
                    flexBasis: 5,
                    flexGrow: 5,
                }}  
            >
                <h1>{data.mdx.frontmatter.title}</h1>

                {/* <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_alt} style={{marginBottom:'1em'}}/> */}
            
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>

                <h3>A Note on Terms and References.</h3>
                <p>
                    Reference sources such as the Individuals with Disabilities Education Act & Section 504 of the Rehabilitation Act of 1973 and the Americans with Disabilities Act speak about “individuals with disabilities” generally but also make specific mention of ADHD in the language of the law.
                </p>

                <p>
                    This resource is written specifically for ADHD elementary students and discusses specific accomodations for students with ADHD. When the law mentions “individuals with disabilities” generally I may use these terms interchangeably: accomodations for ADHD, accomodations for students with ADHD, ADHD elementary students.
                </p>
                <p>
                    When the language of a law addresses ADHD directly I provide a reference to the source material.
                </p>
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
                    
                        <img src="https://img.icons8.com/material-sharp/24/undefined/export-pdf.png" alt="export PDF"/> Export as PDF
                    
                    </li>
                    <li style={{listStyleType: 'none'}}>
                    <img src="https://img.icons8.com/ios-filled/25/undefined/copy-link.png" alt="copy link"/> Copy Link
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
                                <AnchorLink to={`${item.url}`}>{item.title}</AnchorLink>
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
        hero_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      slug
      body
      tableOfContents(maxDepth: 3)
    }
  }
`


export default Article