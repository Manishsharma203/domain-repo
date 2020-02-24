import React from 'react'
import styles from './home.module.css'

class About extends React.Component{
    constructor(props){
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
    render(){
            return(
                <div>
                    {this.state.width > 768 ?
                    <></>:<><div className='display-3 my-5'>PORTFOLIO</div></>}    

                    <div className='m-5 text-center'>
                        <div className='display-4 pt-5 font-weight-bold pt-3' style={{color:'#bf4c24'}}>MANISH SHARMA</div>
                        <div className='h3 my-2'>Full Stack Developer</div>  
                        <div className='my-4 col-8 mx-auto h5 text-wrap' style={{textJustify:'auto'}}>
                        A passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai School's numerous training. Actively ready to join in a great lively team of a good start-up to adapt me in any situation and environment with ease and perform the best.
                        </div>
                        <div className='d-flex justify-content-center py-4 row'>
                            <div className='mx-3 row'>
                                <i className="material-icons"> place </i>
                                <p>Bengaluru</p>
                            </div>
                            <div className='mx-3 row'>
                                <i className="material-icons"> phone </i>
                                <p>0123456789</p>
                            </div>
                            <div className='mx-3 row'>
                                <i className="material-icons"> email </i>
                                <p>mail@manish-sharma.com</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center py-2 row'>
                            <div className='mx-4 row'>
                                <img src='/ln.png' style={{width:'50px'}}/>
                                <p className='my-auto'>LinkedIn</p>
                            </div>
                            <div className='mx-4 row'>
                                <img src='/github.png' style={{width:'50px'}}/>
                                <p className='my-auto'>Github</p>
                            </div>
                        </div>
                        <div className='mx-auto pt-4'>
                            <div className='btn btn-info'>Download CV</div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default About