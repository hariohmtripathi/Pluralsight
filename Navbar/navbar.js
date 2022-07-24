function navbar(){
    return ` <div class="first">
    <a href="index.html"><div id="logo"><img src="./image/pluralsight.svg" alt=""></div></a>
    <a href="index.html" class="logo_font"><p>PLURALSIGHT</p></a>
    <a href="#Platform" ><p>Platform <span id="arrow"><img src="./image/icons8-expand-arrow-30.png" alt=""></span></p></a>
    <div id="Platform" class="overlay">
        <div class="popup">
            <div id="border"></div>
            <a class="close" href="#">&times;</a>
            <div class="course">
                <div class="course1">
                    <div class="heading">WAYS TO UPSKILL</div>
                    <a href="">
                        <span><img src="./courseimage/dashboard.png" alt=""></span>
                        <p>Courses</p>
                    </a>
                    <a href="">
                        <span><img src="./courseimage/iq.png" alt=""></span>
                        <p>Skill assessments</p>
                    </a>
                    <a href="">
                        <span><img src="./courseimage/cloud.png" alt=""></span>
                        <p>Labs</p>
                        <button>NEW</button>
                    </a>
                    <a href="../handsonlearning.html">
                        <span><img src="./courseimage/hand.png" alt=""></span>
                        <p>Hands-on learning</p>
                    </a>
                    <a href="">
                        <span><img src="./courseimage/certifications.png" alt=""></span>
                        <p>Certification prep</p>
                    </a>
                    <a href="">
                        <span><img src="./courseimage/analytics.png" alt=""></span>
                        <p>Team efficiency</p>
                    </a>
                </div>

            </div>
            <div class="course2">
                <div class="skill">
                    <div class="heading">SKILLS FOR</div>
                    <a href=""><p>Software development</p></a>
                    <a href=""><p>IT ops</p></a>
                    <a href=""><p>Info & cyber securityIT ops</p></a>
                    <a href=""><p>Cloud computing</p></a>
                    <a href=""><p>Machine learning / AI</p></a>
                    <a href=""><p>Data professional</p></a>
                </div>

                <div class="trending">
                    <div class="heading">TOP TRENDING PATHS</div>
                    <a href="">
                        <div class="trend">
                        <img src="https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png?w=75" alt="">
                        <div>
                           <p id="h"> Microsoft Azure Deployment</p>
                           <p id="course_time">
                               <span>4</span>
                               <span>Courses</span>
                               <span>7</span>
                               <span>Hours</span>
                               <span id="s"><img src="./courseimage/iq.png" alt=""></span>
                            </p>
                        </div>
                    </div>
                    </a>

                   <a href="">
                    <div class="trend">
                        <img src="https://pluralsight2.imgix.net/paths/images/r-programming-eb2e267a97.png?w=75" alt="">
                        <div>
                          <p id="h">  Cleaning Data With R</p>
                          <p id="course_time">
                            <span>5</span>
                            <span>Courses</span>
                            <span>8</span>
                            <span>Hours</span>
                            <span id="s"><img src="./courseimage/iq.png" alt=""></span>
                         </p>
                        </div>
                    </div>
                   </a>
                   
                    <a href="">
                        <div class="trend">
                            <img src="https://pluralsight2.imgix.net/paths/images/ruby-7e88ddd5f0.png?w=75" alt="">
                            <div>
                                <p id="h">Ruby Language Fundamentals</p>
                                <p id="course_time">
                                    <span>7</span>
                                    <span>Courses</span>
                                    <span>13</span>
                                    <span>Hours</span>
                                    <span id="s"><img src="./courseimage/iq.png" alt=""></span>
                                 </p>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div class="trend2">
                            <img src="https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png?w=75" alt="">
                            <div>
                               <p> Aws Operations</p>
                               <p id="course_time">
                                <span>7</span>
                                <span>Courses</span>
                                <span>14</span>
                                <span>Hours</span>
                                <span><img src="./courseimage/iq.png" alt=""></span>
                             </p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="trend3">
                            <img src="https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png?w=75" alt="">
                            <div>
                               <p> Core Python</p>
                               <p id="course_time">
                                <span>24</span>
                                <span>Courses</span>
                                <span>43</span>
                                <span>Hours</span>
                                <span><img src="./courseimage/iq.png" alt=""></span>
                             </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>
        <button>See our entire course library</button>
    </div>
    <a href="#Products"><p>Products <span id="arrow"><img src="./image/icons8-expand-arrow-30.png" alt=""></span></p></a>
    <div id="Products" class="overlay">
        <div class="popup">
            <div id="border1"></div>
            <a class="close" href="#">&times;</a>
            <div class="skill1">
                <div class="comman">
                    <img id="skillimage" src="./courseimage/Skill_logo_white.png" alt="">
                    <a href="../product.html"><p>Build tech skills to drive results</p></a>
                </div>
                <div class="comman1">
                    <a href="../product.html"><p>What is Skills?</p></a>
                    <a href=""../fw18_0390_falgun/skill&price day4/skills&price.html""><p>View plans</p></a>
                </div>
            </div>
            <div class="follow">
               <div class="comman">
                <img id="skillimage" src="./courseimage/Flow_Logo_white.png" alt="">
                <a href=""><p>Get insights into your workflow</p></a>
               </div>
               <div class="comman1">
                <a href=""><p>What is Flow?</p></a>
                <a href=""><p>View plans</p></a>
               </div>
            </div>
        </div>
    </div>
    <a href="#Resource"><p>Resource <span id="arrow"><img src="./image/icons8-expand-arrow-30.png" alt=""></span></p></a>
    <div id="Resource" class="overlay">
        <div class="popup">
            <div id="border2"></div>
            <a class="close" href="#">&times;</a>
            <div class="learn">
                <div class="heading1">LEARN</div>
                <a href="#"><p>Blog</p></a>
                <a href="#"><p>Customer stories</p></a>
                <a href="#"><p>Resource center</p></a>
                <a href="#"><p>Guides</p></a>
                <a href="#"><p>App download</p></a>
                <a href="#"><p>Support</p></a>
            </div>
            <div class="connect">
                <div class="heading1">CONNECT</div>
                <a href=""><p>Events</p></a>
                <a href=""><p>Webinars</p></a>
                <a href=""><p>Podcast</p></a>
                <div class="heading1">PODCASTS</div>
                <a href="#"><p>All Hands on Tech</p></a>
                <a href="#"><p>Perspectives in Leadership</p></a>
            </div>
            <div class="tech">
              <h3>2022 Tech Forecast and
                Build Better Blueprint</h3>
                <p>PREPARE FOR SHIFTS AND TRENDS IN THE INDUSTRY</p>
                <a href="">
                    <Button>CHECK IT OUT</Button>
                </a>
            </div>
        </div>
    </div>
    <a href=""><p>For Individuals</p></a>
    </div>
    
    <div class="second" >
        <a href="#search">
            <svg viewBox="0 0 797 801" width="20" height="20" x="0px" y="0px">
                <path fill="white" stroke="white" stroke-width="40" class="st0" d="M763.6,743.8L508.9,490c22.5-24.3,40-51.9,52.5-82.6s19-64.1,19.6-100c-2.4-77.3-29.2-141.2-80.3-191.7
                            S386.3,39,310.8,37.2c-79.7,1.8-145,28-195.8,78.5S37.9,230.1,36,307.4c2.4,77.3,29.2,141.2,80.3,191.7s114.4,76.7,189.9,78.5
                            c34.1-0.6,65.7-6.4,94.9-17.3c29.2-11,56-26.5,80.3-46.6l253.8,254.7L763.6,743.8z M306.3,537.5c-65.1-1.8-119.3-24.3-162.5-67.6
                            S78,372.6,76.2,307.4c1.8-65.1,24.3-119.4,67.6-163s97.4-66.2,162.5-68c65.1,1.8,119.4,24.5,163,68s66.2,97.8,68,163
                            c-1.8,65.1-24.5,119.3-68,162.5S371.4,535.7,306.3,537.5z"></path>
                </svg>
        </a>
        <div id="search" class="overlay">
            <div class="popup">
                <a class="close1" href="#">&times;</a>
                <input type="text" id="query" placeholder="What do you want to learn?">
                <svg id="serachany" viewBox="0 0 797 801" width="20" height="20" x="0px" y="0px">
                    <path fill="white" stroke="white" stroke-width="40" class="st0" d="M763.6,743.8L508.9,490c22.5-24.3,40-51.9,52.5-82.6s19-64.1,19.6-100c-2.4-77.3-29.2-141.2-80.3-191.7
                                S386.3,39,310.8,37.2c-79.7,1.8-145,28-195.8,78.5S37.9,230.1,36,307.4c2.4,77.3,29.2,141.2,80.3,191.7s114.4,76.7,189.9,78.5
                                c34.1-0.6,65.7-6.4,94.9-17.3c29.2-11,56-26.5,80.3-46.6l253.8,254.7L763.6,743.8z M306.3,537.5c-65.1-1.8-119.3-24.3-162.5-67.6
                                S78,372.6,76.2,307.4c1.8-65.1,24.3-119.4,67.6-163s97.4-66.2,162.5-68c65.1,1.8,119.4,24.5,163,68s66.2,97.8,68,163
                                c-1.8,65.1-24.5,119.3-68,162.5S371.4,535.7,306.3,537.5z"></path>
                    </svg>
            </div>
        </div>
        <a href="#sign"><p>Sign in<span id="arrow"><img src="./image/icons8-expand-arrow-30.png" alt=""></span></p></a>
        <div id="sign" class="overlay">
            <div class="popup">
                <a class="close" href="#">&times;</a>
                <a href="../fw18_0390_falgun/signIn day-2/signIn.html"><div class="chose_1">
                   <div class="head">SIGN IN WITH</div> 
                   <img src="./courseimage/Skill_logo_white.png" alt=""> 
                   <img id="crose" src="./image/icons8-expand-arrow-30.png" alt="">
                </div></a>
                <a href=""><div class="plane">
                    <div class="head">SIGN IN WITH</div>
                    <img src="./courseimage/Flow_Logo_white.png" alt="">
                    <img id="crose" src="./image/icons8-expand-arrow-30.png" alt="">
                </div></a>
            </div>
        </div>
        <a href=""><Button>TRY FOR FREE</Button></a>
    </div>`
}
export default navbar;