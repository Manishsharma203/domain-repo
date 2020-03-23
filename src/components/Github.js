import React from 'react'
import '../App.css';

class Github extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <div className='d-flex flex-wrap justify-content-center my-5'>
                    <div className='circle h5 p-4 mx-sm-2 text-center'>
                        <div className='m-3'>1200+ CODING HOURS</div>
                    </div>
                    <div className='circle h5 p-4 mx-sm-2 text-center'>
                        <div className='m-3'>200+ CODING SESSIONS</div>
                    </div>
                    <div className='circle h5 p-3 mx-sm-2 text-center'>
                        <div className='m-3'>300+ DS/ALGO PROBLEMS</div>
                    </div>
                    <div className='circle h5 p-3 mx-sm-2 text-center'>
                        <div className='m-3'>100 Hours soft skills</div>
                    </div>
                </div>
                <div class="calendar calnd col-11 mx-auto m-2">
                    Loading the data just for you.
                </div>
            </div>
        )
    }
}

export default Github