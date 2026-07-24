import { useState } from 'react'

function Mainpage() {
    return (
        <>
            <section class="hero" id="home">
                <div class="hero-inner container">
                    <div class="hero-left">
                        <p class="eyebrow">"Hi, I'm Tarun — Full Stack Developer" </p>
                        <h1 class="headline">I build beautiful web applications having <span class="typed"
                            aria-hidden="true"></span><span class="cursor">|</span></h1>
                        <p class="lead">"Expert in JavaScript, React, Node.js, MongoDB, and AWS."</p>
                        <div class="hero-ctas ">
                            <a class="btn " href="#projects">View Work</a>
                            <a class="btn btn-outline" href="#contact">Get in Touch</a>
                        </div>
                        <div class="skill-dis">

                            <h2>My Skills</h2>
                            {/* <div class="skill-container">
                                <div class="skill">
                                    <svg>
                                        <circle class="bg" cx="60" cy="60" r="50"></circle>
                                        <circle class="progress" cx="60" cy="60" r="50" stroke-dasharray="0 314"
                                            style="stroke-dasharray: 283 314;"></circle>
                                    </svg>
                                    <div class="skill-name">HTML</div>
                                </div>
                                <div class="skill">
                                    <svg>
                                        <circle class="bg" cx="60" cy="60" r="50"></circle>
                                        <circle class="progress" cx="60" cy="60" r="50" stroke-dasharray="0 314"
                                            style="stroke-dasharray: 267 314;"></circle> 
                                    </svg>
                                    <div class="skill-name">CSS</div>
                                </div>
                                <div class="skill">
                                    <svg>
                                        <circle class="bg" cx="60" cy="60" r="50"></circle>
                                        <circle class="progress" cx="60" cy="60" r="50" stroke-dasharray="0 314"
                                            style="stroke-dasharray: 251 314;"></circle> 
                                    </svg>
                                    <div class="skill-name">JavaScript</div>
                                </div>
                                <div class="skill">
                                    <svg>
                                        <circle class="bg" cx="60" cy="60" r="50"></circle>
                                        <circle class="progress" cx="60" cy="60" r="50" stroke-dasharray="0 314"
                                            style="stroke-dasharray: 236 314;"></circle> 
                                    </svg>
                                    <div class="skill-name">Python</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="hero-right reveal">
                        <img src="dev.jpeg" alt="Abstract illustration" width="540" height="360" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Mainpage