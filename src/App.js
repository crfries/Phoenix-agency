import React from 'react'
import GlobalStyle from './components/GlobalStyle'

//import pages
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetail from './pages/MovieDetail'

//router imports
import { Switch, Route, useLocation } from 'react-router-dom'

//animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact' exact>
            <ContactUs />
          </Route>
        </Switch>
        <GlobalStyle />
      </AnimatePresence>
    </div>
  )
}

export default App
