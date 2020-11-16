import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import {graphql} from "gatsby"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Teamphotosection from "../components/About/Teamphotosection"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection img={data.img.childImageSharp.fluid} 
  title="About Sid Jain" subtitle=""
   heroclass="about-background"/>
  
  <DualInfoblock heading="A message from CEO" img="https://images.pexels.com/photos/5054776/pexels-photo-5054776.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
  <Infoblock heading="Our Vision" />
  <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "about.png" }) {
          childImageSharp {
            # Specify a fixed image and fragment.
            # The default width is 400 pixels
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
  }
  }
`

export default AboutPage
