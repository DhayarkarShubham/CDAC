import React, { Component } from "react";
import Shrikrushna from './Profile1.jpg'
import Shubham from './Profile2.jpg'
import Swapnil from './Profile3.jpg'
import ShubhamM from './Profile4.jpg'
import Aashvinee from './Profile5.jpg'
import abt from './abt.jpg'

const AboutScreen = (props) => {
              return (
          
                <div class="bg-light">
                  <div class="container">
                    <div class="row h-1 align-items-center">
                      <div class="row align-items-center mb-5">
                        <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                          <br />
                          <h2 class="font-weight-bold mt-5 mb-4"><i>ABOUT US</i></h2><hr/>
                          <p class="font-italic text-muted mb-4"> <b>Our Mission:</b><br/>
                          At AuTo-Hub, we believe that our cars deserve better than what the current Indian automobile marketplace has to offer. A more accessible way where customers receive products that add value to their lives.
                          We’re obsessively passionate about it, and our mission is to help make premium auto products accessible to each and everyone around the Indian nation.</p>

                          <p class="font-italic text-muted mb-4"> <b>Our Vision:</b><br/>
                          We share the same passion for vehicles as you do. Our aim is to provide you with the best products alongwith exceptional service.</p>
                           
                          <p class="font-italic text-muted mb-4"> <b>Our Story:</b><br/>                              
                          <h6>TRANSFORMING THE INDIAN AUTOMOBILE MARKETPLACE:-</h6>
                          According to Amitabh Kant, the chief executive of Niti Ayog, India has about 22 cars per 1000 individuals while this number is 980 and 850 per 1000 individuals in the US and UK, respectively.
                          While there are numerous reasons for this, the inaccessibility of authentic and premium automobile aftermarket products for a large part of the Indian population is a significant part of the problem.
                          AuTo-Hub acknowledges this gap and strives to fill it by putting together a comprehensive and as vast as possible collection of high-quality automobile products, all at one place.</p>
                            <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
                        </div>  
                        <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={abt} alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                      </div>
                    </div>
                  </div>
          
                  <div class="bg-light py-5">
                    <div class="container">
                      <div class="row mb-4">
                        <div class="col-lg-5">
                          <h2 class="display-4 font-weight-italic">Our team:</h2>
                        </div>
                      </div>
          
                      <div class="row text-center">
          
                        <div class="col-xl-2 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={Shrikrushna} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Shrikrushna Ghumre</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                          </div>
                        </div>
          
                        <div class="col-xl-2 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={Shubham} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Shubham Dhayarkar</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                          </div>
                        </div>
          
                        <div class="col-xl-2 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={Swapnil} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Swapnil Wagh</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                          </div>
                        </div>
          
                        <div class="col-xl-2 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ShubhamM} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Shubham Mahajan</h5><span class="small text-uppercase text-muted">CEO - Founder</span>      
                          </div>
                        </div>

                        <div class="col-xl-2 col-sm-6 mb-5">
                          <div class="bg-white rounded shadow-sm py-5 px-3"><img src={Aashvinee} alt="" width="100" class="img-fluid rounded-circle mb-4 img-thumbnail shadow-sm" />
                            <h5 class="mb-0">Ashvinee Najan</h5><span class="small text-uppercase text-muted">CEO - Founder</span>      
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )
            }
export default AboutScreen