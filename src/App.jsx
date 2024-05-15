import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";
import Carousel from 'react-bootstrap/Carousel';
import newImage from './assets/new-Photoroom.png-Photoroom.png';



function App() {

  return (
    <>
      <Navbar className="">
        <Container >
          <Navbar.Brand href="#home" className='text-white'>
            <a href='/'><img width={'200px'} className='imgEffect' src="https://remonmagdy.vercel.app/assets/images/logo/logo-no-background.png" alt="" /></a>
         </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ul className="navbar-nav  mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link white-bold " href="/">HOME</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link white-bold" href="#aboutMe">ABOUT ME</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link white-bold" href="#services">SERVICES</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link white-bold" href="#skills">SKILL</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link white-bold" href="#portfolio">PORTFOLIO</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link white-bold" href="#contact">CONTACT</a>
                </li>
              </ul>
            </Navbar.Text>


          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="section1 mt-5 m-3 text-white">
        <Row>
          <Col>
            <div className='ms-4 background-text'>
              <h1>HI I'AM</h1>
              <h1>REMON MAGDY</h1>
              <div>
                <h1>I'am A : <span className='m-5 '>
                  <Typewriter onInit={(typewriter) => {
                    typewriter.typeString("Ui designer").pauseFor(1000).deleteAll().
                      typeString("React Developer").pauseFor(1000).deleteAll().
                      typeString("Frontend developer").start();
                  }} /></span></h1>
              </div>



              <p className='mt-3'>
                I Work In Front-End Web Development, And I Have Experience In Dealing With Programming And
                Modern Web Technologies, And I Have Built A Lot Of Projects That Have Increased My
                Experience And Trained A Lot, I Am A Fast Learner And Always Love To Develop Myself.
              </p>
            </div>

            <div className='m-5 '>
              <a href='/'><img width={"25px"} className='ms-5' src="https://remonmagdy.vercel.app/assets/images/socialicon/01.png" alt="" /></a>
              <a href='/'><img width={"25px"} className='ms-5' src="https://remonmagdy.vercel.app/assets/images/socialicon/02.png" alt="" /></a>
              <a href='/'><img width={"25px"} className='ms-5' src="https://remonmagdy.vercel.app/assets/images/socialicon/03.png" alt="" /></a>

            </div>



          </Col>
          <Col>
            <img className='imgEffect ms-5' src="https://codingwalah.com/images/core-java-training.png" alt="" />
          </Col>
        </Row>
      </div>

      <div className='mt-4' style={{ backgroundColor: "#f92552" }}>
        <marquee className="mt-2 mb-2 text-white display-6 fw-bolder">- HTML - Css - javascript - javascript es6 - jquery - Bootstrap - reactjs - redux - redux-toolkit - hooks - sass - tailwind css - material ui - git - github - responsive design - figma - adobe xd - ui design - ux design - swiper js - owl js - slick js </marquee>
      </div>

      <div id='aboutMe' className="section2 mt-5 m-3 text-light">
        <div className='d-flex justify-content-center mb-5'>
          <div className='text-white display-2 fw-bolder background-text title'><i class="fa-solid fa-caret-left leftAro"></i> ABOUT ME <i class="fa-solid fa-caret-right rightA"></i></div>
        </div>
        <Row>

          <Col>
            <img className='img-fluid mt-5 imgEffect' src="https://blog.wrappixel.com/wp-content/uploads/2022/05/woman-working-on-laptop-2.gif" alt="" />
          </Col>
          <Col>
            <div>
              <h3>My Name Is Remon Magdy<span className='text-warning'>
                <Typewriter onInit={(typewriter) => { typewriter.typeString("I'm A Ui designer").pauseFor(1000).deleteAll().typeString("I'm A React Developer").pauseFor(1000).deleteAll().typeString("I'm A Frontend developer").start(); }} /></span></h3>
            </div>

            <div className="mt-3 d-flex ">
              <div><img width={'50px'} className='mt-4' src="https://remonmagdy.vercel.app/assets/images/animation/01.gif" alt="" /></div>
              <p className='ms-3 text'>
                Focused Ui Developer, Competent In Web Development And Ui Design And Is Highly Efficient
                In Creating High-Quality Wireframes, Demos And Prototypes Of User Interfaces. Advanced
                Understanding Of Mobile Platforms. Extremely Detailorientated, EfficIent And Organised.
              </p>
            </div>
            <div className="mt-3 d-flex ">
              <div><img width={'50px'} className='mt-4' src="https://remonmagdy.vercel.app/assets/images/animation/02.gif" alt="" /></div>
              <p className='ms-3 text'>
                I Work In Front-End Web Development, And I Have Experience In Dealing With Programming And Modern Web Technologies,
                And I Have Built A Lot Of Projects That Have Increased My Experience And Trained A Lot,
                I Am A Fast Learner And Always Love To Develop Myself.
              </p>
            </div>
            <div className="mt-3 d-flex ">
              <div><img width={'50px'} className='mt-4' src="https://remonmagdy.vercel.app/assets/images/animation/03.gif" alt="" /></div>
              <p className='ms-3 text'>

                I Have A Passion For Creating Clean, Beautiful, Interactive, Minimalist, Responsive And
                User-Friendly UI, Developed By Modular, Scalable And Functional Code.

              </p>
            </div>
            <button class="cvButton ms-5 mt-3"><span>DOWNLOAD CV</span></button>



          </Col>
        </Row>
      </div>

      <div>
        <marquee className="mt-2 mb-2 text-light display-6 fw-bolder">
          <div>
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/01.png" alt="html" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/02.png" alt="css" />  &nbsp;
            <img className='imgEffect' width={'100px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="sass" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="javascript" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/08.png" alt="git" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/015.png" lt="github" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/014.png" class="jquery" alt="jquery" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/04.png" alt="bootstrap" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/05.png" alt="react" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/010.png" alt="redux" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/06.png" alt="figma" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/07.png" alt="Adobe Xd" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/01.png" alt="html" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/02.png" alt="css" />  &nbsp;
            <img className='imgEffect' width={'100px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png" alt="sass" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="javascript" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/08.png" alt="git" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/015.png" lt="github" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/014.png" class="jquery" alt="jquery" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/04.png" alt="bootstrap" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/05.png" alt="react" /> &nbsp;
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon/010.png" alt="redux" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/06.png" alt="figma" />
            <img className='imgEffect' width={'100px'} src="https://remonmagdy.vercel.app/assets/images/icon3d/07.png" alt="Adobe Xd" />

          </div>

        </marquee>
      </div>

      <div id='services' className="section3 m-3 text-light mb-5" >
        <div className='d-flex justify-content-center mb-5'>
          <button>SERVICES</button>
        </div>

        <Row>
          <Col >
            <div className="card text-white card1 mb-3">
              <div className="d-flex justify-content-center mt-2">
                <img width={'50px'} src="https://remonmagdy.vercel.app/assets/images/animation/06.gif" alt="" />
                <h3 className='mt-2 ms-1' style={{ color: "rgb(255, 0, 162)" }}>WEBSITES</h3>
              </div>

              <div className="card-body">
                <p className="card-text">
                  i Can build professional responsive websites optimized for the most popular search
                  engines.
                </p>
              </div>
            </div>
          </Col>
          <Col >
            <div className="card text-white card1 mb-3">
              <div className="d-flex justify-content-center mt-2">
                <img width={'50px'} src="https://remonmagdy.vercel.app/assets/images/animation/08.gif" alt="" />
                <h3 className='mt-2 ms-1' style={{ color: "rgb(255, 0, 162)" }}>Single Page Application </h3>
              </div>

              <div className="card-body">
                <p className="card-text">

                  i can build professional Single Page Application using reactjs and modern library

                </p>
              </div>
            </div>
          </Col>
          <Col >
            <div className="card text-white card1 mb-3">
              <div className="d-flex justify-content-center mt-2">
                <img width={'50px'} src="https://remonmagdy.vercel.app/assets/images/animation/09.gif" alt="" />
                <h3 className='mt-2  ms-1' style={{ color: "rgb(255, 0, 162)" }}>Web Application </h3>
              </div>

              <div className="card-body">
                <p className="card-text">

                  i can build applications for different purposes using technologies that allow you more
                  security.

                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="card text-white card1 mb-3">
              <div className="d-flex justify-content-center mt-2">
                <img width={'50px'} src="https://remonmagdy.vercel.app/assets/images/animation/013.gif" alt="" />
                <h3 className='mt-2 ms-1' style={{ color: "rgb(255, 0, 162)" }}>PSD TO HTML </h3>
              </div>

              <div className="card-body">
                <p className="card-text">


                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking
                  at its layout.


                </p>
              </div>
            </div>
          </Col>
          <Col >
            <div className="card text-white card1 mb-3">
              <div className="d-flex justify-content-center mt-2">
                <img width={'50px'} src="https://remonmagdy.vercel.app/assets/images/animation/011.gif" alt="" />
                <h3 className='mt-2 ms-1' style={{ color: "rgb(255, 0, 162)" }} >SEO </h3>
              </div>

              <div className="card-body">
                <p className="card-text">


                  SEO stands for Search Engine Optimization,Web performance is the objective measurement
                  and perceived user experience of a web
                  site.

                </p>
              </div>
            </div>
          </Col>
          <Col >
            <div className="card card1 mb-3">
              <div className="d-flex justify-content-center mt-2">
                <img width={'50px'} src="https://remonmagdy.vercel.app/assets/images/animation/010.gif" alt="" />
                <h3 className='mt-2 ms-1' style={{ color: "rgb(255, 0, 162)" }}>Fixed Websites </h3>
              </div>

              <div className="card-body">
                <p className="card-text">


                  i can build professional responsive websites optimized for the most popular search
                  engines.

                </p>
              </div>
            </div>
          </Col>
        </Row>



      </div>

      <div id='skills' className="section4 m-3 text-light" >
        <div className='d-flex justify-content-center mb-5'>
          <div className='text-white display-2 fw-bolder background-text title'><i class="fa-solid fa-caret-left leftAro"></i> MY SKILLS <i class="fa-solid fa-caret-right rightA"></i></div>

        </div>

        <div className='shape shape3 fa-spin'><img  src="https://remonmagdy.vercel.app/assets/images/shapes01/04.png" alt="" /></div>
        <div className='shape shape2 fa-spin'><img  src="https://remonmagdy.vercel.app/assets/images/shapes01/04.png" alt="" /></div>

        <div className='ms- me-'>
          <Row>
            <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon3d/01.png" alt="" />
              </div>
            </Col>
            <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon3d/02.png" alt="" />
              </div>
            </Col>
            <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon3d/04.png" alt="" />
              </div>
            </Col> <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon3d/05.png" alt="" />
              </div>
            </Col> <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon3d/06.png" alt="" />
              </div>
            </Col> <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon3d/07.png" alt="" />
              </div>
            </Col>
          </Row>
          <Row className='mt-3 mb-5'>
            <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon/sass.svg" alt="" />
              </div>
            </Col>
            <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon/014.png" alt="" />
              </div>
            </Col>
            <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon/08.png" alt="" />
              </div>
            </Col> <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon/015.png" alt="" />
              </div>
            </Col> <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon/011.png" alt="" />
              </div>
            </Col> <Col>
              <div className="card cardSkill">
                <img width={"150px"} src="https://remonmagdy.vercel.app/assets/images/icon/012.png" alt="" />
              </div>
            </Col>
          </Row>
        </div>

      </div>

      <div id='portfolio' className="section5 m-3 text-light" >
        <div className='d-flex justify-content-center mb-5'>
          <div className='text-white display-2 fw-bolder background-text title'><i class="fa-solid fa-caret-left leftAro"></i> MY PORTFOLIO<i class="fa-solid fa-caret-right rightA"></i></div>
        </div>

        <div>
          <Carousel slide={false}>
            <Carousel.Item>
              <Row>
                <Col>
                  <div className='cardGaming imgSpace' width="50px">
                    <img className="newImage" src={newImage} alt="" />
                    <img width="100%" className='object-fit-cover border rounded card-img-top' src="https://remonmagdy.vercel.app/assets/images/PortFolio/065.png" alt="" />
                    <div class="top-left overlay" style={{ backgroundColor: "#c9d3d35c" }}>
                      <div class="overlay-content">
                        <h3 className='mt-5 display-3 fw-bolder'>Website Design</h3>
                        <p className="card-text fw-bolder">E-commerce Gaming Website + 11 pages</p>
                        <div style={{ fontSize: "50px" }}>
                          <a href='#'><i className="fa-solid fa-link fw-bolder"></i></a>
                          <a href="#"><i className="fa-brands fa-github ms-4 fw-bolder"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='cardGaming imgSpace' width="50px">
                    <img className="newImage" src={newImage} alt="" />

                    <img width="100%" className='object-fit-cover border rounded card-img-top' src="https://remonmagdy.vercel.app/assets/images/PortFolio/064.png" alt="" />
                    <div class="top-left overlay" style={{ backgroundColor: "#c9d3d35c" }}>
                      <div class="overlay-content">
                        <h3 className='mt-5 display-3 fw-bolder'>Website Design</h3>
                        <p className="card-text fw-bolder">E-commerce Gaming Website + 11 pages</p>
                        <div style={{ fontSize: "50px" }}>
                          <a href='#'><i className="fa-solid fa-link fw-bolder"></i></a>
                          <a href="#"><i className="fa-brands fa-github ms-4 fw-bolder"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* <ExampleCarouselImage text="First slide" /> */}

            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Row>
                <Col>
                  <div className='cardGaming imgSpace' width="50px">
                    <img className="newImage" src={newImage} alt="" />
                    <img width="100%" className='object-fit-cover border rounded card-img-top' src="https://remonmagdy.vercel.app/assets/images/PortFolio/065.png" alt="" />
                    <div class="top-left overlay" style={{ backgroundColor: "#rgb(29 32 32 / 89%)" }}>
                      <div class="overlay-content">
                        <h3 className='mt-5 display-3 fw-bolder'>Website Design</h3>
                        <p className="card-text fw-bolder">E-commerce Gaming Website + 11 pages</p>
                        <div style={{ fontSize: "50px" }}>
                          <a href='#'><i className="fa-solid fa-link fw-bolder"></i></a>
                          <a href="#"><i className="fa-brands fa-github ms-4 fw-bolder"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </Col>
                <Col>
                  <div className='cardGaming imgSpace' width="50px">
                    <img className="newImage" src={newImage} alt="" />
                    <img width="100%" className='object-fit-cover border rounded card-img-top' src="https://remonmagdy.vercel.app/assets/images/PortFolio/064.png" alt="" />
                    <div class="top-left overlay" style={{ backgroundColor: "#rgb(29 32 32 / 89%)" }}>
                      <div class="overlay-content">
                        <h3 className='mt-5 display-3 fw-bolder'>Website Design</h3>
                        <p className="card-text fw-bolder">E-commerce Gaming Website + 11 pages</p>
                        <div style={{ fontSize: "50px" }}>
                          <a href='#'><i className="fa-solid fa-link fw-bolder"></i></a>
                          <a href="#"><i className="fa-brands fa-github ms-4 fw-bolder"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <Row>
                <Col>
                  <div className='cardGaming imgSpace' width="50px">
                    <img className="newImage" src={newImage} alt="" />
                    <img width="100%" className='object-fit-cover border rounded card-img-top' src="https://remonmagdy.vercel.app/assets/images/PortFolio/063.png" alt="" />
                    <div class="top-left overlay" style={{ backgroundColor: "#rgb(29 32 32 / 89%)" }}>
                      <div class="overlay-content">
                        <h3 className='mt-5 display-3 fw-bolder'>Website Design</h3>
                        <p className="card-text fw-bolder">Landing Page Digital Marketing Website</p>
                        <div style={{ fontSize: "50px" }}>
                          <a href='#'><i className="fa-solid fa-link fw-bolder"></i></a>
                          <a href="#"><i className="fa-brands fa-github ms-4 fw-bolder"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='cardGaming imgSpace' width="50px">
                    <img className="newImage" src={newImage} alt="" />
                    <img width="100%" className='object-fit-cover border rounded card-img-top' src="https://remonmagdy.vercel.app/assets/images/PortFolio/062.png" alt="" />
                    <div class="top-left overlay" style={{ backgroundColor: "#rgb(29 32 32 / 89%)" }}>
                      <div class="overlay-content">
                        <h3 className='mt-5 display-3 fw-bolder'>Website Design</h3>
                        <p className="card-text fw-bolder">React Movies Website Using APi</p>
                        <div style={{ fontSize: "50px" }}>
                          <a href='#'><i className="fa-solid fa-link fw-bolder"></i></a>
                          <a href="#"><i className="fa-brands fa-github ms-4 fw-bolder"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>

          </Carousel>
        </div>



      </div>

      <div id='contact' className='footer d-flex justify-content-between'>
        <div className=' shape'><img width={'100px'} src="https://remonmagdy.vercel.app/assets/images/shapes/35.png" alt="" /></div>
        <div className=' shape shape1'><img  src="https://remonmagdy.vercel.app/assets/images/shape03/086.png" alt="" /></div>
        <div className='m-5 '>
          <a href='/'><img width={"25px"} className='ms-5' src="https://remonmagdy.vercel.app/assets/images/socialicon/01.png" alt="" /></a>
          <a href='/'><img width={"25px"} className='ms-5' src="https://remonmagdy.vercel.app/assets/images/socialicon/02.png" alt="" /></a>
          <a href='/'><img width={"25px"} className='ms-5' src="https://remonmagdy.vercel.app/assets/images/socialicon/03.png" alt="" /></a>
        </div>

        <div className='m-5'><p>
          Copyright © 2023 Portfolio Website . All Rights Reserved By Remon Magdy.
        </p>

        </div>

      </div>





    </>
  )
}

export default App
