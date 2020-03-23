import React from 'react';
import './App.css';
import Proficiencies from './components/Proficiencies';
import Navbar from './components/Navbar';
import NavbarSm from './components/NavbarSm';
import About from './components/About';
import Projects from './components/Projects';
import Github from './components/Github';
import Achievements from './components/Achievements';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    if (this.state.width > 768) {
      return (
        <div>
          <Navbar />
          <div className='offset-md-3'>
            <div id='about'>
            <About/>
            </div>
            <div className='my-5 py-5' id='proficiencies'>
              <Proficiencies />
            </div>
            <div className='my-5 py-5' id='projects'>
              <div className='headings my-5 text-center'>Projects</div>
              <Projects/>
            </div>
            <div className='my-5 py-5' id='achievements'>
              <div className='headings my-5 text-center'>Achievements</div>
              <Achievements/>
            </div>
            <div className='my-5 py-5' id='github'>
             <Github/>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <div>
          <NavbarSm/>
          <div className='offset-md-3'>
            <div id='about'>
            <About/>
            </div>
            <div className='my-5 py-5' id='proficiencies'>
              <Proficiencies />
            </div>
            <div className='my-5 py-5' id='projects'>
              <div className='headings my-5 text-center'>Projects</div>
              <Projects/>
            </div>
            <div className='my-5 py-5' id='achievements'>
              <div className='headings my-5 text-center'>Achievements</div>
              <Achievements/>
            </div>
            <div className='my-5 py-5' id='github'>
             <Github/>
            </div>
          </div>

        </div>
      )
    }
  }

}

export default App;
