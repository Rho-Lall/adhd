import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
//import { node } from "prop-types"

const Navigation = () => {

    const data = useStaticQuery(graphql`
    query contents {
      allMdx(sort: {order: ASC, fields: frontmatter___chapter}) {
        nodes {
          frontmatter {
            title
            chapter
          }
          id
          slug
        }
      }
    }
      
    `)

    return (
        <div style={{paddingTop: '2em', backgroundColor: '#F5F7F9'}}>
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                    <li key={node.id} style={{listStyleType: 'none', font: 'var(--font-sx)'}}>
                        <Link to={`/accomodations-for-adhd/${node.slug}`} style={{textDecoration:'none'}}>
                          {node.frontmatter.title}
                        </Link>
                    </li>
                    ))
                }
            </ul>

        </div>


    )
}

export default Navigation