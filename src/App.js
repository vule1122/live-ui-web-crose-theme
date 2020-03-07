import React from 'react';
<<<<<<< HEAD
=======
import './App.css';

>>>>>>> develop
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
<<<<<<< HEAD
import ClergyListPage from './pages/ClergyListPage';
import Index from './pages/Index';
import Directors from './pages/Directors';
import DeptInfo from './pages/DeptOwnerPage';
import About from './pages/About';
import Acitivities from './pages/Activities';
import './css/style.css';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

const App = () => {
  return (
    <Router>
          <Route path="/clergy-list" component={ClergyListPage} exact />
          <Route path="/departments/:id" render={(prop) => <DeptInfo {...prop}/>} exact />
          <Route path="/directors" render={() => <Directors/>} exact/>
          <Route path="/" render={(prop) => <Index {...prop}/>} exact/>   
          <Route path="/about" render={() => <About/>}/>
          <Route path="/activities" render={() => <Acitivities/>}/>
          <Route path="/articles" component={Articles}/>   
          <Route path="/detail/:date" component={ArticleDetail}/>
=======
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //return '';
  return (
    <Router>
    	<div className="App">
			    <Route path="/blog-list/:id" component={BlogPage} exact />
        	<Route path="/blog-list" component={BlogListPage} exact />
      	</div>
>>>>>>> develop
    </Router>
  ) 
}


export default App;
