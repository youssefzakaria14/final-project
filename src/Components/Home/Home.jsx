import React, { Component, Fragment } from "react";

import './Home.css'

import CountUp from "react-countup";
import image1 from '../../Assets/logo.svg'
import image2 from '../../Assets/press.svg'
import image3 from '../../Assets/Mat_female.svg'
import image4 from '../../Assets/Mat.svg'
import image5 from '../../Assets/graphicquote-340x340.jpg'
import image6 from '../../Assets/thumbs_b_c_18000f3886a11dd4ca5669ed373a3c8e-340x340.jpg'
import photos from '../../Assets/download-5.png'
import photos3 from '../../Assets/Arms-Trade-Statement-340x340.png'
import posted_6 from '../../Assets/PSC-TU-Conf-24.jpg';
import posted_7 from '../../Assets/Barclays-Tesco-5-e1728552196270.png';
import posted_8 from '../../Assets/DoA19Oct-e1728635564684.jpg';
import posted_9 from '../../Assets/PSC-Event-Poster-1-e1727257634918.jpg';
import posted_10 from '../../Assets/download-5.png';
import posted_11 from '../../Assets/Divestment-Graphic-04-e1721382161898-340x340.jpg';


const statscounter = () => {


    return (


        <Fragment>


            <section className="hop">

                <div className="data">



                    <div className="row">
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images">
                                    <img src={image1} alt="" />
                                </div>
                                <p className="land-4" >  <CountUp start={0} end={41000} duration={22} /></p>
                                <h2 className="landing-4">martyrs of  Gaza </h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images">
                                    <img src={image2} alt="" />
                                </div>
                                <p className="land"><CountUp start={0} end={175} duration={22} /></p>
                                <h2 className="landing">martyrs of the press</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images">
                                    <img src={image3} alt="" />
                                </div>
                                <p className="land-4" ><CountUp start={0} end={11487} duration={22} /></p>
                                <h2 className="landing-4">women-gaza strip</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images ">
                                    <img src={image4} alt="" />
                                </div>
                                <p className="land" ><CountUp start={0} end={2419} duration={22} /></p>
                                <h2 className="landing">elderly-gaza strip</h2>
                            </div>
                        </div>



                    </div>
                </div>
            </section>






            <section className="home">
                <div className="header">
                    <div className="card-home">
                        <img src={image5} alt="" />
                        <p>7 oct 2024</p>
                            <h2>After One Year of Genocide – Uphold International Law, Stop Arming Israel Now</h2>

                       
                    </div>



                    <div className="support-free">
                        <div className="carde">
                            <div className="right">

                                <img src={photos} alt="" />

                                <div className="writes">
                                    <h2> <span>1 oct 2024</span>   PCS calls for sanctions in response to Israel’s bombing and invasion of Lebanon</h2>
                                </div>
                            </div>
                            <a href="/Articles_2" className="link">read more</a>
                        </div>

                        <div className="carde">
                            <div className="right">
                                <img src={photos3} alt="" />
                                <div className="writes">
                                    <h2><span>1 oct 2024</span>Joint Statement on UK-Israel Arms Trade</h2>
                                </div>
                            </div>
                            <a href="" className="link">read more</a>
                        </div>


                        <div className="carde">
                            <div className="right">
                                <img src={posted_11} alt="" />
                                <div className="writes">
                                    <h2><span>1 oct 2024</span>After One Year of Genocide – Uphold International Law, Stop Arming Israel Now</h2>
                                </div>
                            </div>
                            <a href="" className="link">read more</a>
                        </div>



                        <div className="carde">
                            <div className="right">
                                <img src={image6} alt="" />
                                <div className="writes">
                                    <h2><span>1 oct 2024</span> ICJ ruling finds Israel guilty of unlawful occupation and apartheid</h2>
                                </div>
                            </div>
                            <a href="" className="link" >read more</a>
                        </div>


                    </div>

                </div>
            </section>



            <section className="home-1">
                <div className="header-1">


                    <div className="card-home-1">

                        <img src={posted_6} alt="" />
                        <p>7 oct 2024</p>
                        <h2>PSC Conference: Trade Unions Building Solidarity with Palestine </h2>

                    </div>



                    <div className="support-free-1">



                        <div className="carde-1">

                            <div className="right-1">

                                <img src={posted_7} alt="" />

                                <div className="writes-1">
                                    <h2> <span>1 oct 2024</span> FETTER LANE
                                        posted:No to Barclay Buying Tesco Bank </h2>
                                </div>
                            </div>
                            <a href="" className="link-1">read more</a>
                        </div>

                        <div className="carde-1">
                            <div className="right-1">
                                <img src={posted_8} alt="" />
                                <div className="writes-1">
                                    <h2><span>1 oct 2024</span>Day of Action for Palestine – 19 October 2024</h2>
                                </div>
                            </div>
                            <a href="" className="link-1">read more</a>
                        </div>


                        <div className="carde-1">
                            <div className="right-1">
                                <img src={posted_9} alt="" />
                                <div className="writes-1">
                                    <h2><span>1 oct 2024</span>Lambeth for Divestment Lobbies</h2>
                                </div>
                            </div>
                            <a href="" className="link-1">read more</a>
                        </div>



                        <div className="carde-1">
                            <div className="right-1">
                                <img src={photos} alt="" />
                                <div className="writes-1">
                                    <h2><span>1 oct 2024</span> Wandsworth: Stop Funding Genocide</h2>
                                </div>
                            </div>
                            <a href="" className="link-1" >read more</a>
                        </div>


                    </div>

                </div>
            </section>



        </Fragment >
    );
}




export default statscounter;
