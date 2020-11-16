import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import {graphql} from "gatsby"
import Infoblock from "../components/Reusable/Infoblock"
import Contact from "../components/Contact/contact"
const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  <HeroSection img={data.img.childImageSharp.fluid} 
  title="Contact Us" subtitle=""
   heroclass="about-background"/>
   <Infoblock heading="How can we help" />
   <Contact />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: { eq: "contact.png" }) {
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

export default ContactPage
