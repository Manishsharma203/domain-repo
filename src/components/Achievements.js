import React from 'react'

class Achievements extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div className='my-5 text-center'>
                <img className='rounded img-fluid' src='/masaiHack.png' alt='img' />
                <div className='h4 my-5'>🏆 Runners up - Masai School Hackathon</div>
            </div>
        )
    }
}

export default Achievements