import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
//import { node } from "prop-types"

const SectionSidebar = () => {

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
        <div>
            <ul>
                {
                    data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                    ))
                }
            </ul>

        </div>


    )
}

export default SectionSidebar