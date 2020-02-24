import React from 'react'

class Github extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='d-flex flex-wrap justify-content-center m-5'>
                    <div className='circle h5 p-4 mx-2'>
                        1000+ CODING HOURS
                    </div>
                    <div className='circle h5 p-4 mx-2'>
                        200+ CODING SESSIONS & TASKS
                    </div>
                    <div className='circle h5 p-4 mx-2'>
                        300+ DS/ALGO PROBLEMS
                    </div>
                    <div className='circle h5 p-4 mx-2'>
                    100 Hours SOFT SKILLS
                    </div>
                </div>
                <div class="calendar border border-dark m-2">
                    Loading the data just for you.
                </div>
            </div>
        )
    }
}

export default Github