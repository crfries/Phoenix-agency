import React from 'react'
import styled from 'styled-components'
import ScrollTop from '../components/ScrollTop'

//animation import
import { motion } from 'framer-motion'
import { pageAnimation, titleAnimation } from '../animation'

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>send us a message</h2>
          </Social>
        </Hide>
      </div>

      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>send us a message</h2>
          </Social>
        </Hide>
      </div>

      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <h2>send us a message</h2>
          </Social>
        </Hide>
      </div>
      <ScrollTop />
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;

  h2 {
    font-family: 'Roboto Condensed', sans-serif;
  }

  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
    font-family: 'Roboto Condensed', sans-serif;
  }
`

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
  flex-direction: row;
`

export default ContactUs
