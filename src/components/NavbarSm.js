import React from 'react'

class NavbarSm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-white sticky-top" style={{ background: '#360909' }}>
          <a className='navbar-brand' href="#home">
            {/* <img src='' style={{width:'120px'}} alt=''/>  */}
            <div>
              <span className='text-white' style={{ fontFamily: 'Orbitron' }}>Manish Sharma</span>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="material-icons text-white"> menu </i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex flex-column">
              <li class="nav-item ">
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
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger text-white" href="#cv">Download CV</a>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    )
  }
}

export default NavbarSm