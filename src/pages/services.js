import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import {graphql} from "gatsby"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoblock from "../components/Reusable/DualInfoblock"
import Teamphotosection from "../components/OurServices/Teamphotosection"

const Services = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection img={data.img.childImageSharp.fluid} 
  title="Our Services" subtitle=""
   heroclass="about-background"/>
  <Infoblock heading="Services offered by us" />
  <Teamphotosection />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "logo.png" }) {
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

export default Services
