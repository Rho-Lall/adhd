import { graphql } from 'gatsby'
import * as React from 'react'
import "../../components/layout.css"
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Helmet} from 'react-helmet'
import { Link } from "gatsby"

const Article = ({ data }) => {

    const image = getImage("../../blog/media/advocacy.png")
    
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
                    paddingRight: '2em'
                }}  
            >
                <h1>{data.mdx.frontmatter.title}</h1>

                {/* <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_alt} style={{marginBottom:'1em'}}/>
                <StaticImage src="../../blog/media/testing.png" alt="Accomodations for ADHD"/> */}
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
                <br/>
                <h3>A Note on Terms and References.</h3>
                <p>
                    When the language of a law addresses ADHD directly I provide <Link to='https://sites.ed.gov/idea/statute-chapter-33/subchapter-i/1400'>a reference to the source material.</Link>
                </p>
                <p>
                    Reference sources such as the <Link to='https://sites.ed.gov/idea/statute-chapter-33/subchapter-i/1400'>Individuals with Disabilities Education Act</Link> & Section 504 of the Rehabilitation Act of 1973 and the Americans with Disabilities Act speak about “individuals with disabilities” generally but also make specific mention of ADHD in the language of the law.
                </p>
                <p>
                    This is written specifically for parents looking for help getting specialized education and <Link to='/accomodations-for-students-with-adhd/accommodations-for-adhd'>accommodations for ADHD</Link> and discusses specific <Link to='/accomodations-for-students-with-adhd/accommodations-for-adhd'>accomodations for students with ADHD</Link>. When the law makes general mention of “individuals with disabilities” I may use any of these terms interchangeably: accomodations for ADHD, accomodations for students with ADHD, ADHD elementary students.
                </p>
            </div>

            <aside
                style={{
                    width: '240px',
                    marginTop: '2em',
                    padding: '.5em',
                    borderLeft: '1px dotted grey',
                    alignSelf: 'flex-start'
                    
                }}
                className='hideOnMobile'        
            >
                <ul style={{}}>
                    <li style={{listStyleType: 'none'}}>
                    
                        <img src="https://img.icons8.com/material-sharp/20/undefined/export-pdf.png" alt="export PDF"/> Export as PDF
                    
                    </li>
                    <li style={{listStyleType: 'none'}}>
                    <img src="https://img.icons8.com/ios-filled/20/undefined/copy-link.png" alt="copy"/> Copy Link
                    </li>
                </ul>
    
                <p
                    style={{
                        paddingLeft: '1.5em'
                    }}
                >
                    <img src="https://img.icons8.com/ios-filled/15/undefined/align-right.png" alt="TOC Link"/> Table of Contents
                </p>

                <ul style={{}}>

                    {
                        data.mdx.tableOfContents.items.map(item => (
                            <li key={item.title} style={{listStyleType: 'none', textAlign: 'left'}}>                    
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
            }
            slug
            body
            tableOfContents(maxDepth: 3)
        }
    }
`


export default Article