import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Helmet} from 'react-helmet'
//import * as styles from "../components/index.module.css"

// MVP TO FORK A NEW PROJECT - IE MARKETING NOTES, BDTB
// Functional Open Graph links for social media with images
// hamburger menu on mobile

// CSS FORMATING
// content area is justified and centered on the title
// Headers are black 
// Structural headers are small, light grey, ALL CAPS
// text is light grey, and smaller
// links are purple (no underline) and underline on hover

// Working Search
// Working Copy Link - should add url to clipboard
// Export to PDF should link to another page so we can track the need for this feature, maybe an opt-in page


// VERSION II


// DOCS in the title is replaced with smaller pill tha reads DOCS.

// PAGE STRUCTURE
// Top link to a specific MAIN page, possibly "accomodations for ADHD" ?
// Navication at the top?
// Outline icon (right justified content)
// Scroll bar on Contents
// Carrots for dropdown menus
// Dropdown Menus
// Powered By Rho Lall with an Image
// Previous / Next Buttons

//const image = getImage('./media/504_plan_or_iep.png')

const IndexPage = () => (
  <Layout>
    <Seo title="Accommodations for ADHD & Resources for Students with ADHD, Parents, & Teachers." />
    <Helmet>
        <meta name="description" content="Accomodations for ADHD and other resources to develop accommodations for ADHD elementary students, thier parents, and teachers."/>
        <meta name="keywords" content="accommodations for adhd, accommodations for students with adhd, accommodations for adhd elementary students"/>
        <meta name="author" content="Rho Lall"/>
        <meta property="og:title" content="Accommodations for ADHD & Resources for Students with ADHD, Parents, & Teachers."/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Accomodations for ADHD and other resources to develop accommodations for ADHD elementary students, thier parents, and teachers."/>
        <meta property="og:image" content="../../blog/media/advocacy.png"/>
        <meta property="og:image:alt" content="Accommodations for ADHD & Resources for Students with ADHD, Parents, & Teachers."/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:url" content="https://rho-lall.github.io/adhd"/>
        <link rel="canonical" href="https://rho-lall.github.io./adhd"/>
    </Helmet>

    <div>

      <h1>A good education, is the most important gift you can give your child.</h1> 
      {/* <GatsbyImage image={image} alt={"Accomodations for ADHD"} style={{marginBottom:'1em'}}/> */}

      <StaticImage src="../../blog/media/advocacy.png" alt="Accomodations for ADHD"/>
      <br/>
      <br/>
      <p>
        As a parent of a student with ADHD, you have two objectives. First, ensure your child receives a free appropriate public education, which includes special education and related services tailored to his or her specific needs in order to prepare them for further study, employment, and independent living. Second, establish a healthy working relationship with school staff.
      </p>

      <h2>A note to teachers who work with students with ADHD.</h2>  
        <p>
          When emotions are under control on both sides, parents are easier to work with when they understand the law. Parents want their children to learn. Parents want your success. When parents preserve notes of events and agreements, help their IEP team stay on track, and foster positive working relationships with teachers and other professionals, everyone benefits. Especially the child.
        </p>


      <h2>Step One. Request to have your child tested for an IEP.</h2> 
      <p>
        Your child is struggling in school. Are you puzzling over how you can help? You can request for your child be assessed for an IEP. This will help determine if their education is being negatively impacted by a disability through a formal evaluation and review of data. 
      </p>

      <h2>Step Two. Test Your Child. </h2>
      <p>
        The evaluation requires a variety of assessment tools and strategies to gather information about your child's academic ability as well as functional and developmental ability.
      </p> 
      <p>
        This is the time to start developing subject matter expertise, so start reading.
      </p>
  
      <h2>Step Three. Get Organized. </h2>
      <p>
        Having documentation at your fingertips is vital. Get organized. Stay organized.  This isn't a prelude to the job. This is the job. It's time to set up your binder.
      </p>

      <h2>Step Four. Review the results with the school.</h2>
      <p>
        The school must use a variety of technically sound instruments to assess the relative contribution of these factors: cognitive, behavioral, physical, and developmental. Is there sufficient evidence to present an assessment in each area? 
      </p>

      <h2>Step Five. Qualify For Services.</h2>
      <p>
        Does an ADHD student qualify for special education? What are the criteria? After completing the evaluation and review of the data available, a team of qualified professionals, parents, and (if appropriate) the student determine whether special education and related services are required.
      </p>

      <h2>Step Six. Develop a Plan</h2>
      <p>
        What is an IEP? What is a 504 Plan? How do they differ? Which option is better for your child? Each has its own set of rules. You should be familiar with the distinctions to ensure that the correct plan is employed for your child.
      </p>  

      <p>
      Keep in mind that the team starts by discussing the needs of the child. The next step is to determine what services are required. The team also decides where the services should be delivered. One of the goals of IDEA is for a kid with a disability to receive an education that is similar to that provided to children without disabilities,  in the Least Restrictive Environment.
      </p>
      
      <h2>Step Seven. Beyond the IEP Meeting</h2>
      <p>
        As you go beyond the meeting, a file folder or binder will come in very handy for tracking your child's educational documents and history of needs and services. When there are disagreements or when the process breaks down it is best to seek to resolve difficulties at the lowest possible level. Most resolution options have a process or chain of command to follow. Having an organized binder is essential to navigating the process chain.
      </p>
        
    </div>
  </Layout>
)

export default IndexPage
