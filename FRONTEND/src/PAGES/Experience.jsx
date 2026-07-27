import { useState } from 'react'

function Experience() {
    return (
        <section id="experiences" class="experiences-section">
            <h2>My Experiences</h2>
            <div class="container-grid">
                <div class="experience-container" data-animation="fadeInUp">
                    <div class="icon"><i class="fas fa-code"></i></div>
                    <h3>Front-End Development</h3>
                    <p>Building responsive, interactive UIs with HTML, CSS, JavaScript, and frameworks like React. Focused on user
                        experience and performance optimization.</p>
                </div>
                <div class="experience-container" data-animation="fadeInUp">
                    <div class="icon"><i class="fas fa-server"></i></div>
                    <h3>Back-End Development</h3>
                    <p>Developing scalable APIs and server-side logic using Node.js, Express, and Python (Django/Flask). Ensuring
                        secure, efficient data handling.</p>
                </div>
                <div class="experience-container" data-animation="fadeInUp">
                    <div class="icon"><i class="fas fa-database"></i></div>
                    <h3>Database Management</h3>
                    <p>Designing and optimizing databases with SQL (MySQL/PostgreSQL) and NoSQL (MongoDB). Implementing data
                        modeling and query performance.</p>
                </div>
                <div class="experience-container" data-animation="fadeInUp">
                    <div class="icon"><i class="fas fa-cloud"></i></div>
                    <h3>DevOps & Deployment</h3>
                    <p>Managing CI/CD pipelines with tools like Docker, Jenkins, and AWS. Ensuring reliable deployment and
                        monitoring for full-stack applications.</p>
                </div>
            </div>
        </section>
    )
}

export default Experience