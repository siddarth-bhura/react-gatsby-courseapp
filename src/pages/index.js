import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import {graphql} from "gatsby"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import CourseCard from "../components/Card/Coursecard"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection img={data.img.childImageSharp.fluid} title="I write code" subtitle="Sid Jain" heroclass="hero-background"/>
  <Infoblock heading="About Us" />
  <CourseCard courses={data.courses}/>
  <DualInfoblock heading="Our Team" img="https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "heromain.png" }) {
          childImageSharp {
            # Specify a fixed image and fragment.
            # The default width is 400 pixels
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
  }
  courses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image{
          fixed(width: 200,height: 120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  }
`

export default IndexPage
