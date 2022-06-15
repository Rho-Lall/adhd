import * as React from "react"
//import { Link } from "gatsby"
import { graphql } from "gatsby"
//import { node } from "prop-types"

const sectionSidebar = () => {

    return (
        <div>
            <p>TEST</p>

            {/* <ul>
                {
                    data.allFile.nodes.map(node => (
                        <li key={node.name}>
                            {node.name}
                        </li>
                    )) 
                }
            </ul> */}

        </div>


    )
}

// export const query = graphql`
// query sections {
//     allFile(filter: {ext: {eq: ".mdx"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `
export default sectionSidebar