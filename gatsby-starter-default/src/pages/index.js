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
    <Seo title="Accommodations for ADHD & Resources for Students with ADHD, their Parents, & Teachers." />
    <Helmet>
        <meta name="description" content="Accomodations for ADHD and other resources to develop accommodations for ADHD elementary students, thier parents, and teachers."/>
        <meta name="keywords" content="accommodations for adhd, accommodations for students with adhd, accommodations for adhd elementary students"/>
        <meta name="author" content="Rho Lall"/>
        <meta property="og:title" content="Accommodations for ADHD & Resources for Students with ADHD, their Parents, & Teachers."/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Accomodations for ADHD and other resources to develop accommodations for ADHD elementary students, thier parents, and teachers."/>
        <meta property="og:image" content="../../blog/media/advocacy.png"/>
        <meta property="og:image:alt" content="Accommodations for ADHD & Resources for Students with ADHD, their Parents, & Teachers."/>
        <meta property="og:locale" content="en_US"/>
        <meta property="og:url" content="https://rho-lall.github.io/adhd"/>
        <link rel="canonical" href="https://rho-lall.github.io./adhd"/>
    </Helmet>

    <div>

      <h1>A good education, is the most important gift you can give your child.</h1> 
      {/* <GatsbyImage image={image} alt={"Accomodations for ADHD"} style={{marginBottom:'1em'}}/> */}

      <StaticImage src="../../blog/media/advocacy.png" alt="Accomodations for ADHD"/>
      <p>
        As a parent of a child with the disability, you have two goals. One to ensure the school provides your child with <span>a free appropriate public education</span>, that includes special education and related services designed to meet your child's unique needs and prepare them for further education, employment, and independent living. Second, to build a healthy working relationship with school personnel. 
      </p>

      <h2>A note to special educators.</h2> 
        <p>
        If emotions are under control on both sides, you will find it easier to work with parents, who learn the law. These parents want their children to learn. They want you to succeed. When parents document events and agreements, help their teams stay on task, and build strong working relationships with school personnel, everyone wins. Especially the children.
        </p>


      <h2>Step One. Request to have your child tested for an IEP.</h2> 
      <p>
        The school needs to get your written permission to test your child. At the very least you will need to sign a release. There could be other documents you need to fill out as well. Ask for copies of everything.
        If you get pushback from the front desk, just ask them for the documents that you need to fill out so you can get started on them.
      </p>

      <h2>Step Two. Get Organized. </h2>
      <p>
        Having documentation at your fingertips is vital. You want to get organized and stay organized.
      </p>

      <h2>Step Three. Test Your Child. </h2>
      <p>
        You want to have independent evaluations done as well.
      </p>
  
      <h2>Step Four. Meet with the school.</h2>
      <p>
        Discuss and review the tests.
        Understand what the different tests are.
        Understand the results of the tests.
        Determine significance of the results, what does this mean for your child?
        Gather feedback from medical team to identify the child’s needs.
      </p>
      <p>
        There might be pushback from the school that the child doesn’t qualify for an IEP. 
        Kow the eligibility criteria for an IEP (statutory, regulatory, & case law)
        What are the local laws, and school board policies?
        What other pertinent information do you need to know about eligabiilty
      </p>

      <h2>Step Five. What is an IEP?</h2>
      <p>
        What to expect in the IEP meeting
        Understand what your role is and what you bring to the table
        Then we can talk about testing, subject matter expertise, project management, etc 
        What the agenda should be, the purpose of the meeting(s)?
        How frequently are they going to be held?
      </p>  
      
      <h2>Step Six. Managing Your IEP Meeting</h2>
        Peparing for your first IEP meeting
        Project Management.
        RACI Matrix.
        SMART IEP Goals and OKRs.
    </div>
  </Layout>
)

export default IndexPage
