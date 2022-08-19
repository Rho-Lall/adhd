import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Helmet} from 'react-helmet'
//import * as styles from "../components/index.module.css"

// MVP TO FORK A NEW PROJECT - IE MARKETING NOTES, BDTB
// DONE   hamburger menu on mobile
// DONE   Functional Open Graph links for social media with images

// CSS FORMATING
// DONE   content area is justified and centered on the title
// DONE   Headers are black 
// DONE   links are purple (no underline) and underline on hover
// DONE   Top link to a specific MAIN page, possibly "accomodations for ADHD" ?



// Working Search
// Working Copy Link - should add url to clipboard
// Export to PDF should link to another page so we can track the need for this feature, maybe an opt-in page


// VERSION II
// DOCS in the title is replaced with smaller pill tha reads DOCS.
// Structural headings in the Navigation pane. Format of headings is small, light grey, ALL CAPS
// Previous / Next Buttons - https://www.youtube.com/watch?v=3CfJa4cukt4

// PAGE STRUCTURE
// Navication at the top?
// Outline icon (right justified content)
// Scroll bar on Contents
// Carrots for dropdown menus
// Dropdown Menus
// Powered By Rho Lall with an Image
// text is light grey, and smaller (ask Anna. Is it a good size?)


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

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/getting_started.png" alt="Accomodations for ADHD"/>
      <br/>
      <br/>

      <p>
        Negotiating accommodations for students with ADHD is frustrating and debilitating for many parents. It can be an ordeal to try to get the accommodations for ADHD that your child needs in order to be successful. Some parents give up resigned to make do with what they have. However, other parents prevail and are able to get the accommodations that their child needs. 
      </p>

      <p>
        What makes the difference? Research, planning, and preparation. If you take the time to research possible accommodations for students with ADHD, you will be better prepared to make a case for why your child needs them. You can secure a successful outcome if you take the time to plan and prepare for your meeting with the school. 
      </p>

      <p>
        As a parent of a student with ADHD, you have two objectives. First, ensure your child receives a free appropriate public education, which includes special education and related services tailored to his or her specific needs in order to prepare them for further study, employment, and independent living. Second, establish a healthy working relationship with school staff.
      </p>

      <h2>A note to teachers who work with students with ADHD</h2>  

      <p>
        When emotions are under control on both sides, parents are easier to work with when they understand the law. Parents want their children to learn. Parents want your success. When parents preserve notes of events and agreements, help their IEP team stay on track, and foster positive working relationships with teachers and other professionals, everyone benefits. Especially the child.  
      </p>

      <h2>Getting Up to Speed on Requesting Accommodations for Students with ADHD</h2>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/ieps-and-504s.png" alt="Accomodations for ADHD"/>
      <p>
        Disability is a natural part of the human experience and in no way diminishes your child's right to participate in and contribute to society. Know exactly what you want and be ready to fight for it. With a little bit of effort, you can make sure that your child gets the accommodations for ADHD they need.
      </p>

      <p>
        There is a lot to learn but you don't need to learn it all to start. This article concentrates on the tasks you must accomplish and what you can start doing right now. It's an overview of what you need to know to complete each step. The rest of the articles build on each step with additional knowledge so you can be confident that you know what you need when you need it. It's set up to find information quickly.
      </p>

      <h2>Step One: Request an IEP evaluation from your school</h2> 

      <p>
        Your child is struggling in school. Are you puzzling over how you can help? You can request your child be assessed for an IEP. This will help determine if their education is being negatively impacted by a disability through a formal evaluation and review of data.
      </p>

      <p>
        An IEP, also known as an Individualized Education Program, is a paper that specifies services such as specialized education and accommodations for ADHD to assist your child in school. Accommodations for students with ADHD might include, among other things, additional time for exams, preferred seating, and breaks during class. They are based on each child's unique needs and are meant to ensure your child's access to a free appropriate public education. IEPs and 504 plans are often talked about hand in hand. 
      </p> 

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/testing.png" alt="Accomodations for ADHD"/>
      <p>
        The first step is is to request your child be tested for an IEP. When requesting testing for an IEP, you have the option to fall back to a 504 Plan. These articles cover additional useful information:
      </p>

      <ul>
        <li>Requesting Testing for an IEP: Why It's Important and How to Do It</li>
        <li>IEP Testing Process</li>
      </ul>

      <h2>Step Two: Get Organized</h2>

      <p>
        The second critical thing you need to do after you request your child be tested for ADHD is to get organized. Half the battle is already won through organization and preparation. This isn't a prerequisite to the work at hand . . . this is the work at hand. In the article, Organization Tips for the Busy Parent, we will cover how to get organized. 
      </p>

      <p>
        IEPs are by nature short-term. An advantage of organizing your information is to get the whole picture of everything, you'll be able to see where to focus and what to fight for. In Developing Page One I'll take you through a tool that will help you do just that. Preparedness and organization give your child and IEP team the greatest chance of success. 
      </p>

      <h2>Step Three: Qualify for Services</h2>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/your_legal_rights.png" alt="Accomodations for ADHD"/>
      <p>
        Does an ADHD student qualify for special education? What are the criteria? After completing the evaluation and review of the data available, a team of qualified professionals, parents, and (if appropriate) the student determine whether special education and related services are required.
      </p>

      <p>
        This is a crucial yet understated step. We can't organize a plan until your child meets the necessary requirements for services. We need to cover the criteria for qualifying for specialized services and accommodations for ADHD.
      </p>

      <p>
        This is where we start getting into it. We'll go through IEPs, 504s, and the differences. I've set up distinct articles for each of them. Individualized Education Plans are known as IEPs and are established when a student requires more assistance than the school may give in its general education setting. It is created by a team that includes medical personnel, educators, parents, and the student. IEPs are established by the Individuals with Disabilities Act (IDEA) and are designed to ensure a free appropriate public education for children with disabilities so they can have access to education comparable to their non-disabled peers. 
      </p>

      <p>
        Section 504 of the Rehabilitation Act of 1973 is a federal civil rights law that prohibits discrimination on the basis of disability. A 504 Plan is designed to accommodate children with disabilities so they can access general education with their non-disabled peers. 
      </p>
        
      <p>
        When it comes to ADHD specifically, IEPs and 504s can both be used to ensure that students with ADHD receive necessary services. There are differences. We will get into them. These articles will help clarify the benefits of each and the differences:
      </p>
      <ul>
        <li>Why an IEP May Be Better Than a 504 Plan for Your ADHD Elementary Student</li>
        <li>IEPs for ADHD</li>
        <li>504 Plans for ADHD</li>
        <li>What Every Parent of an ADHD Child Should Know About Their Legal Rights</li>
      </ul>

      <h2>Step Four: Developing Your Plan</h2>

      <p>
        Setting goals is critical to the success of an IEP. Setting objectives is a major component of the IEP. It's tough to know what needs to be done and how to prioritize tasks if there aren't any clear goals. The IEP will be used to keep track of the student's progress. Set up for success! Your success! The IEP team's success! Your child's success! This section will help you develop a plan and set proper goals. These articles will help you brainstorm accommodations for students with ADHD:
      </p>

      <ul>
        <li>Win With Your Child's IEP Team</li>
        <li>IEP Team Members, Roles, and Responsibilities</li>
        <li>Accommodations for ADHD</li>
        <li>504 Accommodations for ADHD</li>
        <li>Classroom Accommodations for ADHD</li>
      </ul>

      <h2>Step Five: Advocacy</h2>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/advocacy.png" alt="Accomodations for ADHD"/>
      <p>
        You may be wondering what the school is required to provide. You might be feeling apprehensive. That helpless feeling is a problem with a simple solution . .. knowledge. There is no substitute for knowing the rules. 
      </p>

      <p>
        In these articles, we cover what advocacy involves and how to do it well, and the dangers to avoid:
      </p>

      <ul>
        <li>Why Parents Are the Best Advocates for Their Children</li>
        <li>Resolving Disputes</li>
      </ul>

      <h2>Step Six: Leadership & Project Management</h2>
      <ul>
        <li>Creating Paper Trails</li>
        <li>Preparing for Meetings</li>
        <li>Leading Effective Meetings</li>
      </ul>

      <h2>Step Seven: Learn</h2>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/understanding_adhd.png" alt="Accomodations for ADHD"/>
      <p>
        Subject Matter Expertise involves constant learning. There is a lot we are still learning about ADHD. These articles will get you started on the journey:
      </p>

      <ul>
        <li>The Top 10 Things You Should Know About ADHD</li>
        <li>ADHD in the Classroom</li>
        <li>High Achievers with ADHD</li>
      </ul>

      <h2>Questions & Answers</h2>

      <p>
        Finally, we close with a list of questions that come up, and their answers.
      </p>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/questions.png" alt="Accomodations for ADHD"/>
  
      <h2>Beyond the IEP Meeting</h2>
      <p>
       There are certain steps that you need to take to secure accomodations for students with ADHD. It's easy to get overwhelmed. Just take it a step at a time. And breath.
      </p>

      <p>
        As you go beyond the meeting, your binder will come in handy for tracking your child's educational documents and progress. When there are disagreements or when the process breaks down it is best to seek to resolve difficulties at the lowest possible level. Most resolution options have a process or chain of command to follow. Documenting your interactions and having an organized binder are essential to navigating that process.
      </p>

    </div>

  </Layout>
)

export default IndexPage
