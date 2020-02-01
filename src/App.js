import React from 'react';
import './App.css';
import {BrowserRouter , Link, Switch ,Route} from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-white bg-secondary sticky-top">
            <Link className='navbar-brand ml-md-2 ml-0 d-flex flex-column flex-sm-row' to="/">
              {/* <img src='' style={{width:'120px'}} alt=''/>  */}
              <div>
              <span className='text-white ml-md-2 my-auto vm-span' style={{fontFamily:'Orbitron'}}>Manish Sharma</span>
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="material-icons"> menu </i></span>
            </button>
            <div className="collapse navbar-collapse ml-md-5" id="navbarSupportedContent" >
              <ul className="navbar-nav ml-md-auto text-white">
                <li>
                  ..Coming Soon
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
          <Route exact path='/' render={()=><Home/>} />
          </Switch>

          <div className='text-center bg-secondary' style={{height:'100px'}}>
          <div className='pt-5'></div>
          <div className='pt-2'><small>Cover Pic: <a href="http://www.freepik.com">Designed by Freepik</a></small></div>
          </div>
        </React.Fragment>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
