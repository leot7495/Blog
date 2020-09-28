import React from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import Nav from './components/Navbar/Navbar'
import Home from './pages/home/home'
import Footer from './components/Footer/Footer'
import ScrollTop from './components/ScrollTop/ScrollTop'

import BlogCSS from './pages/BlogCSS/BlogCSS'
import BlogJS from './pages/BlogJS/BlogJS'
import BlogReact from './pages/BlogReact/BlogReact'
import BlogRedux from './pages/BlogRedux/BlogRedux'

import Works from './pages/Works/WorksList'
import './App.css'

function App() {
  return (
    <Router>
        <Nav />
      <Switch>

        <Route path="/" exact>
          <Home/>
        </Route>

        <Route path="/BlogCSS" exact>
          <BlogCSS />
        </Route>

        <Route path="/BlogJS">
          <BlogJS />
        </Route>

        <Route path="/BlogReact">
          <BlogReact />
        </Route>

        <Route path="/BlogRedux">
          <BlogRedux />
        </Route>

        <Route path="/Works" exact>
          <Works />
        </Route>

      </Switch>
      <ScrollTop />
      <Footer />
    </Router>
  );
}

export default App;
