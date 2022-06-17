import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { node } from "prop-types"

const Navigation = () => {

    const data = useStaticQuery(graphql`
        query sections {
            allFile(filter: {ext: {eq: ".mdx"}}) {
            nodes {
                name
            }
            }
        }
    `)

    return (
        <div style={{paddingTop: '2em', backgroundColor: '#F5F7F9'}}>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                    <li key={node.name} style={{listStyleType: 'none', font: 'var(--font-sx)'}}>
                        {node.name}
                    </li>
                    ))
                }
            </ul>

        </div>


    )
}

export default Navigation