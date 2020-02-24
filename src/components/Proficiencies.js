import React from 'react'

class Proficiencies extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='m-5'>
                <div className='row'>
                    <img className='profIcons' src='HTML.png'/>
                    <img className='profIcons' src='CSS3.png'/>
                    <img className='profIcons' src='js.png'/>
                    <img className='profIcons' src='Bootstrap.png'/>
                </div>
                <div className='row'>
                    <img className='profIcons' src='jquery.png'/>
                    <img className='profIcons' src='Reactjs.png'/>
                    <img className='profIcons' src='redux.svg'/>
                    <img className='profIcons' src='github.png'/>
                </div>
            </div>
        )
    }
}

export default Proficiencies