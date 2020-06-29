import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Views/About";
import Show from "./Views/Show";
import Season from "./Views/Season";
import ShowSearchResults from "./Views/ShowSearchResults";
import Person from "./Views/Person"
import Character from "./Views/Character"
import SearchPage from "./Views/SearchPage"
import Home from './Views/Home'
import EpisodePage from './Views/EpisodePage'

function App() {
  return (
    <div className = "relative pb-10 min-h-screen">
          
      <Router>
      <Header />  
        <div className = "p-3">
        <Switch>
          <Route exact path = "/">
          
           <Home />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/show/:id">
            <Show />
          </Route>
          <Route path = "/person/:id">
            <Person />
          </Route>
          <Route path = "/character/:id">
            <Character />
          </Route>
          <Route path = "/showsearchresults/:by/:qr">
            <ShowSearchResults />
          </Route>
          <Route path = "/searchpage/:by">
            <SearchPage />
          </Route>
          <Route path = "/season/:id">
            <Season />
          </Route>
          <Route path = "/episode/:id">
            <EpisodePage />
          </Route>
        </Switch>
        </div>
        <Footer />
      </Router>

      
      
    </div>
  );
}

export default App;
