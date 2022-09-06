import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Helmet} from 'react-helmet'
//import * as styles from "../components/index.module.css"

// CSS FORMATING

// Export as PDF should link to another page so we can track the need for this feature, maybe an opt-in page
// Working Copy Link - should add url to clipboard
// Figure out how to format quotes or code blocks or something to create the formatted call out boxes in the MDX files.
// Figure out what is needed (if anything) for google to index this site.
// Working Search

// VERSION II
// DOCS in the title is replaced with smaller pill tha reads DOCS.
// Structural headings in the Navigation pane. Format of headings is small, light grey, ALL CAPS
// Previous / Next Buttons - https://www.youtube.com/watch?v=3CfJa4cukt4

// PAGE STRUCTURE
// Navigation at the top?
// Navigation has Dropdown Menus with carrots
// Navigation has scroll bar
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
        As a parent of a student with ADHD, you have two objectives. First, ensure your child receives a free appropriate public education, which includes special education and related services tailored to his or her specific needs in order to prepare them for the future. Second, establish a healthy working relationship with school staff.
      </p>

      <h2>A note to teachers who work with students with ADHD</h2>  

      <p>
        Parents are easier to work with when they understand the law and when emotions are under control on both sides. Parents want their children to learn. Parents want your success. By keeping records of developments and discussions, working cordially with school staff, and being an advocate for their child, parents can create a better experience. Everyone benefits. Especially the child. 
      </p>

      <h2>Getting Up to Speed on Requesting Accommodations for Students with ADHD</h2>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/ieps-and-504s.png" alt="Accomodations for ADHD"/>
     
      <p>
        Disability is a natural part of the human experience and in no way diminishes your child's right to participate in and contribute to society. Know exactly what you want and be ready to fight for it. With a little bit of effort, you can make sure that your child gets the accommodations for ADHD they need.
      </p>

      <p>
        There is a lot to learn but you don't need to learn it all to start. This article focuses on the tasks you must accomplish, what you can start doing right now. This is an overview of what you need to know to complete each step. The rest of the articles build on each step with additional knowledge so you can be confident that you know what you need when you need it. It's set up to find information quickly.
      </p>

      <h2>Step One: Request an IEP evaluation from your school</h2> 

      <p>
        Your child is struggling in school. Do you want to help, but don't know how? Request your child be assessed for an IEP. This will help determine if their education is being negatively impacted by a disability through a formal evaluation and review of data.
      </p>

      <p>
        An IEP, or Individualized Education Program, is a document that outlines accommodations and other supports to help your child succeed in school. Accommodations for ADHD can include things like extra time for tests, preferential seating, and breaks during class. They are based on each child's unique needs and are meant to ensure your child’s access to a free appropriate public education. Accommodations for students with ADHD can make a big difference in their ability to learn and succeed in school.
      </p> 

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/testing.png" alt="Accomodations for ADHD"/>
      <p>
        The first step is is to request your child be tested for an IEP. <Link to=''>IEPs and 504s</Link> are talked about hand in hand. When requesting testing for an IEP, you have the option to fall back to a 504 Plan. These articles cover additional useful information:
      </p>

      <ul>
        <li><Link to=''>Requesting Testing for an IEP: Why It's Important and How to Do It</Link></li>
        <li><Link>IEP Testing Process</Link></li>
      </ul>

      <h2>Step Two: Get Organized</h2>

      <p>
        The second critical thing you need to do after you request your child be tested for ADHD is to get organized. Half the battle is already won through organization and preparation. This isn't a prerequisite to the work at hand . . . this is the work at hand. 
      </p>

      <p>
      <Link>Accomodations for ADHD</Link> can make all the difference in your child's success at school. But between work, home life, and everything else on your plate, it can be tough to stay organized and on top of everything. In the article, <Link>Organization Tips for the Busy Parent</Link>, we will cover how to get organized. Having documentation at your fingertips is vital. Start early. You want to get organized and stay organized. 
      </p>
      <p>
        IEPs are by nature short-term. An advantage of organizing your information is to get the whole picture of everything, you'll be able to see where to focus and what to fight for. In <Link>Develop Page One</Link> I'll take you through a tool that will help you do just that. Preparedness and organization give your child and IEP team the greatest chance of success. These articles provide you with additional useful information:
      </p>

      <ul>
        <li><Link>Organization Tips for the Busy Parent</Link></li>
        <li><Link>Develop Page One</Link></li>
      </ul>

      <h2>Step Three: Qualify for Services</h2>

      <StaticImage style={{maxWidth: '800px'}}src="../../blog/media/your_legal_rights.png" alt="Accomodations for ADHD"/>
      <p>
        Does an ADHD student qualify for special education? What are the criteria? Qualifying for services is as crucial as it is understated. We can't organize a plan until your child meets the necessary requirements for services.
      </p>

      <p>
        When it comes to ADHD specifically, <Link>IEPs and 504s</Link> can both be used to ensure students receive necessary services. IEPs and 504s are spoken about hand in hand. There are differences. In many cases, Section 504 children are eligible for services under IDEA. In this article, <Link>IEPs and 504s: Qualify for Services</Link>, you will learn about Section 504, in contrast to the Individuals with Disabilities Act (IDEA). The shorthand between IEPs & 504s comes down to one word: accommodations.
      </p>

      <p>
        If your child simply needs accommodations in order to access the general education curriculum then a 504 will be implemented. If however the general education curriculum is insufficient and your child requires specialized education then an IEP is appropriate.
      </p>

      <p>
        Don't use the term "accommodations for ADHD" when specialized education is appropriate. You may inadvertently pigeonhole your child into a 504 plan when an IEP is warranted.
      </p>
        
      <p>
        These articles will help clarify the benefits of each and the differences:
      </p>
      <ul>
        <li><Link>IEPs and 504s: Qualify for Services</Link></li>
        <li><Link>What Legal Rights Every Parent Should Know About</Link></li>
      </ul>

      <h2>Step Four: Developing Your Plan</h2>

      <p>
        Setting goals is critical to the success of an IEP. Setting objectives is a major component of the IEP. It's tough to know what needs to be done and how to prioritize tasks if there aren't any clear goals. The IEP will be used to keep track of the student's progress. Set up for success! Your success! The IEP team's success! Your child's success! This section will help you develop a plan and set proper goals. These articles will help you brainstorm accommodations for students with ADHD:
      </p>

      <ul>
        <li>Win With Your IEP Team</li>
        <li>IEP Team Members, Roles, and Responsibilities</li>
        <li>Accommodations for ADHD</li>
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
        <li>Creating Paper Trails</li>
        <li>Questions & Answers</li>
      </ul>

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
