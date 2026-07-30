import { useState } from 'react'

function Experience() {
    return (
        <section id="projects" class="section projects">
            <div className="container">
                <h2 class="section-title reveal">Selected Projects</h2>
                <div class="project-grid">

                    <article class="project-card reveal" tabindex="0" data-title="E-commerce web"
                        data-desc="A realtime analytics e-commerce website with micro-interactions and animated charts."
                        data-img="PROJECT1.png">
                        <div class="experience-container" data-animation="fadeInUp">
                            <div class="project-media "><img src="PROJECT1.png" alt="Project: Aurora Dashboard" /></div>
                            <div class="project-body" data-animation="fadeInUp">
                                <h3>KHARIDO(e-commerce website)</h3>
                                <p class="muted">User Authetician · Cart · product</p>
                            </div>
                        </div>
                    </article>

                    <article class="project-card reveal" tabindex="0" data-title="PRODUCT PAGE"
                        data-desc="An animated responsive PRODUCT PAGE with lazy-loading and accessible controls."
                        data-img="product.png">
                        <div class="experience-container" data-animation="fadeInUp">
                            <div class="project-media"><img src="product.png" alt="Project: PRODUCT PAGE" /></div>
                            <div class="project-body">
                                <h3>Product Page</h3>
                                <p class="muted">Animation · Performance · Accessibility</p>
                            </div>
                        </div>
                    </article>

                    <article class="project-card reveal" tabindex="0" data-title="PORTFOLIO"
                        data-desc="Fast PORTFOLIO UI focused on conversions and motion-driven feedback." data-img="PROJECT3.png">
                        <div class="experience-container" data-animation="fadeInUp">
                            <div class="project-media"><img src="PROJECT3.png" alt="Project:PORTFOLIO"/></div>
                            <div class="project-body">
                                <h3>PORTFOLIO</h3>
                                <p class="muted">PROJECTS · Motion · STYLES</p>
                            </div>
                        </div>
                    </article>

                    <article class="project-card reveal" tabindex="0" data-title="PORTFOLIO"
                        data-desc="Fast PORTFOLIO UI focused on conversions and motion-driven feedback." data-img="PROJECT3.png">
                        <div class="experience-container" data-animation="fadeInUp">
                            <div class="project-media"><img src="PROJECT3.png" alt="Project:PORTFOLIO"/></div>
                            <div class="project-body">
                                <h3>PORTFOLIO</h3>
                                <p class="muted">PROJECTS · Motion · STYLES</p>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Experience