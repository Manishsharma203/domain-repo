import React from 'react'
import '../App.css';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        return (
            <div>
                <div className='d-flex flex-sm-row flex-wrap justify-content-sm-center'>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="covidtracker.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Covid-19 India Tracker
                      </Typography>
                      <p className="card-text">A covid-19 tracker web app with comprehensive data of india and its states/UTs, along with all the latest health related news </p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                                <span className="iconify h1 mx-2" data-icon="logos:redux" data-inline="false"></span>
                                <span class="iconify h1 mx-2" data-icon="logos:react" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:html-5" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/covid19-tracker" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://covid19bharat.netlify.app/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="parkingManager.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Parking Manager
                      </Typography>
                      <p className="card-text">A Parking management system app made for commercial/private buildings</p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                                <span className="iconify h1 mx-2" data-icon="logos:redux" data-inline="false"></span>
                                <span class="iconify h1 mx-2" data-icon="logos:react" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:html-5" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:firebase" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/Parking-manager" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://parking-manager.netlify.com/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="Todo.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      To-Do App
                      </Typography>
                      <p className="card-text">A simple and responsive to-do (CRUD) appplication</p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                                <span className="iconify h1 mx-2" data-icon="logos:redux" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                                <span class="iconify h1 mx-2" data-icon="logos:react" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/react-redux-ToDoApp" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://todo-app-ms.netlify.com/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="villageMart.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Village Mart
                      </Typography>
                      <p className="card-text">A shopping website for fruits and vegetables</p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                                <span class="iconify h1 mx-2" data-icon="logos:react" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:html-5" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                                <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/masai-village-mart" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://village-mart-manish.netlify.com/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="timer.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Timer and Stopwatch
                      </Typography>
                      <p className="card-text">Timer and Stopwatch app made using Reactjs</p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                            <span class="iconify h1 mx-2" data-icon="logos:react" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:html-5" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/portf/tree/master/stopwatch_and_timer" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://timer-ms.netlify.com/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="currconvterter.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Currency Converter
                      </Typography>
                      <p className="card-text">A simple and responsive currency converter app, built by using HTML, CSS and JS using APIs</p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                            <span className="iconify h1 mx-2" data-icon="simple-icons:jquery" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:html-5" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/portf/tree/master/currency_converter" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://manishsharma203.github.io/masai-sprint-3_2/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card>

                <Card className="mx-auto my-4 card-project" style={{ width: "400px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto shadow"
                      component="img"
                      style={{ width: "400px" }}
                      image="whatsapp.png"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                      Whatsapp Clone
                      </Typography>
                      <p className="card-text">A simple and responsive clone of whatsapp's homepage using ReactJS</p>
                    </CardContent>
                        <div>
                            <div className="d-flex techused justify-content-center my-4">
                            <span class="iconify h1 mx-2" data-icon="logos:react" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:html-5" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:css-3" data-inline="false"></span>
                            <span className="iconify h1 mx-2" data-icon="logos:bootstrap" data-inline="false"></span>
                            </div>
                        </div>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                        <div className='d-flex justify-content-around my-2'>
                                <Button variant="contained" color='primary'>
                                    <a href="https://github.com/Manishsharma203/portf/tree/master/whatsapp_clone" target='blank' className="text-white mx-2">Code</a>
                                </Button>
                                <Button variant="contained" color='secondary'>
                                    <a href="https://whatsapp-clone-ms.netlify.com/" target='blank' className="text-white mx-2">Demo</a>
                                </Button>
                        </div>
                  </CardActionArea>
                </Card> 
                </div>
            </div>
        )
    }
}

export default Projects
