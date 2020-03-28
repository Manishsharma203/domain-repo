import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        return(
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id='navbar-lg'>
            <nav id='navbar-example2' className="col-3 navbar navbar-expand-md navbar-white sticky-top" style={{background:'#330F0B'}}>
            <div className='d-flex flex-column'>
            <div className='col text-center'>
            <a className='navbar-brand text-center' href="#home">
              {/* <img src='/dummy-profile-pic.jpg' className='img-fluid rounded-circle' style={{width:'220px',border:'15px solid #F0CBAC'}} alt='img'/>  */}
              <img src='/profpic.jpg' className='img-fluid rounded-circle' style={{width:'220px',border:'15px solid #F0CBAC'}} alt='img'/>
            </a>
            </div>
            <div className='col-md-12 my-4 font-weight-bold mr-auto'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="material-icons"> menu </i></span>
            </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
              <ul className="navbar-nav d-flex mx-auto flex-column">
              <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" style={{fontFamily:'Martel', color:'#ff8906'}} href="#about">
                    <button className='btn col-12'>About</button>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" style={{fontFamily:'Martel', color:'#ff8906'}} href="#proficiencies">
                    <button className='btn col-12'>Proficiencies</button>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" style={{fontFamily:'Martel', color:'#ff8906'}} href="#projects">
                    <button className='btn col-12'>Projects</button>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" style={{fontFamily:'Martel', color:'#ff8906'}} href="#achievements">
                    <button className='btn col-12'>Achievements</button>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger text-white" style={{fontFamily:'Martel', color:'#ff8906'}} href="#github">
                    <button className='btn col-12'>Github</button>
                    </a>
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