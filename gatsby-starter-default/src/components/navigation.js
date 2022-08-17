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
        <div style={{paddingTop: '2em', maxWidth: '260px', paddingRight: '2em'}} className="">
            
            <Link to={`/`} style={{textDecoration:'none', font: 'var(--font-sx)', fontWeight: 'bold', paddingLeft: '1.5rem', paddingTop: '.3em', paddingRight: '.2em'}}>
              Start Here
            </Link>

            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                    <li key={node.id} style={{listStyleType: 'none', font: 'var(--font-sx)', paddingTop: '.3em', paddingRight: '.2em'}}>
                        <Link to={`/accomodations-for-students-with-adhd/${node.slug}`} style={{textDecoration:'none'}}>
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