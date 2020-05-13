import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavComponents/NavBar';
import Home from './Components/HomeComponents/Home';
import About from './Components/AboutComponents/About';
import Recipes from './Components/RecipesComponents/Recipes';
import Blog from './Components/BlogComponents/Blog';
import Pages from './Components/PagesComponents/Pages';
import Contact from './Components/ContactComponents/Contact';
import { BrowserRouter , Route } from 'react-router-dom';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route path='/' exact="true" component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/recipes' component={Recipes}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/pages' component={Pages}/>
        <Route path='/contact' component={Contact}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
