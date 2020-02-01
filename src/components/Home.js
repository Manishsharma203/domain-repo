import React from 'react'
import styles from './home.module.css'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='text-center py-5' style={{background:'#E6E6E6'}}>
                    <img className={`rounded ${styles.cover}`} src='/UnderCnst.png' alt='Designed by Freepik'/>
                    <div className='p-5 text-left'>
                        <div className={`pt-5 ${styles.t1}`} >Meanwhile Check this out </div>
                        <div className='row pt-2'>
                            <div className={`col-1 text-right ${styles.t1}`}>➥</div>
                            <div className='col pt-sm-2'>
                                <div className='btn btn-success'><a className={`text-white ${styles.btn}`} href='https://village-mart-manish.netlify.com/'>Village Mart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home