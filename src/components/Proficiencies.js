import React from 'react'

class Proficiencies extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                <div className='headings my-5 text-center'>Tech Stack</div>
                <div className='m-sm-5 d-flex flex-sm-column flex-row'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <img className='profIcons img-fluid' src='HTML.png' alt='img'/>
                        <img className='profIcons img-fluid' src='CSS3.png' alt='img'/>
                        <img className='profIcons img-fluid' src='js.png' alt='img'/>
                        <img className='profIcons img-fluid' src='ts-logo-512.png' alt='img'/>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <img className='profIcons img-fluid' src='material-ui-480.png' alt='img'/>
                        <img className='profIcons img-fluid' src='Reactjs.png' alt='img'/>
                        <img className='profIcons img-fluid' src='redux.svg' alt='img'/>
                        <img className='profIcons img-fluid' src='graphQl.png' alt='img'/>
                    </div>
                </div>

                <div className='headings my-5 text-center'>Tools</div>
                <div className='m-sm-5 d-flex flex-column'>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <span className="iconify mx-auto my-4" data-icon="logos:visual-studio-code" data-inline="false" style={{fontSize:'100px'}}></span>
                        <span className="iconify mx-auto my-4" data-icon="logos:figma" data-inline="false" style={{fontSize:'100px'}}></span>
                    </div>
                    <div className='d-flex flex-wrap justify-content-center'>
                        <span className="iconify mx-auto my-4" data-icon="logos:git-icon" data-inline="false" style={{fontSize:'100px'}}></span>
                        <span className="iconify mx-auto my-4" data-icon="logos:npm-2" data-inline="false" style={{fontSize:'100px'}}></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Proficiencies