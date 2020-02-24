import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div id='navbar-lg'>
            <nav className="col-3 navbar navbar-expand-md navbar-white sticky-top" style={{backgroundImage:'url("/sqrs1.svg")'}}>
            <div className='d-flex flex-column'>
            <div className='col-md-12'>
            <a className='navbar-brand text-center' href="#home">
              <img src='/dummy-profile-pic.jpg' className='rounded-circle' style={{width:'220px',border:'15px solid white'}} alt='img'/> 
            </a>
            </div>
            <div className='col-12 my-4 font-weight-bold mr-auto'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="material-icons"> menu </i></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav d-flex flex-column">
              <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" href="#proficiencies">Proficiencies</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" href="#achievements">Achievements</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" href="#github">Github</a>
                </li>
              </ul>
            </div>
            </div>
            </div>
             </nav>
            </div>
        )
    }
}

export default Navbar