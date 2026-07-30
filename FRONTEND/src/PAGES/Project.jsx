import { useState } from 'react'
import projectImg from "../assets/KHARIDODEV21.png";
import outproImg from "../assets/OUTPRODEV21.png";

function Experience() {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title reveal">Selected Projects</h2>
                <div className="grid grid-cols-3 gap-5">

                    <article className="project-card reveal" tabindex="0" data-title="E-commerce web"
                        data-desc="A realtime analytics e-commerce website with micro-interactions and animated charts."
                        data-img={projectImg}>
                        <div className="experience-container" data-animation="fadeInUp">
                            <div className="project-media ">
                                <img
                                    src={projectImg}
                                    alt="Project: Aurora Dashboard"
                                    className="w-full h-40 object-cover rounded-lg"
                                />
                            </div>
                            <div className="project-body" data-animation="fadeInUp">
                                <h3>KHARIDO(e-commerce website)</h3>
                                <p className="muted">User Authetician · Cart · product</p>
                            </div>
                        </div>
                    </article>

                    <article className="project-card reveal" tabindex="0" data-title="PRODUCT PAGE"
                        data-desc="An animated responsive PRODUCT PAGE with lazy-loading and accessible controls."
                        data-img="product.png">
                        <div className="experience-container" data-animation="fadeInUp">
                            <div className="project-media"><img src={outproImg} alt="Project: PRODUCT PAGE" /></div>
                            <div className="project-body">
                                <h3>Product Page</h3>
                                <p className="muted">Animation · Performance · Accessibility</p>
                            </div>
                        </div>
                    </article>

                    <article className="project-card reveal" tabindex="0" data-title="PORTFOLIO"
                        data-desc="Fast PORTFOLIO UI focused on conversions and motion-driven feedback." data-img="PROJECT3.png">
                        <div className="experience-container" data-animation="fadeInUp">
                            <div className="project-media"><img src="PROJECT3.png" alt="Project:PORTFOLIO" /></div>
                            <div className="project-body">
                                <h3>PORTFOLIO</h3>
                                <p className="muted">PROJECTS · Motion · STYLES</p>
                            </div>
                        </div>
                    </article>

                    <article className="bg-[linear-gradient(180deg,rgba(99, 62, 62, 0.02),transparent)] rounded-xl flex flex-col gap-[15px] cursor-pointer object-contain reveal" tabindex="0" data-title="PORTFOLIO"
                        data-desc="Fast PORTFOLIO UI focused on conversions and motion-driven feedback." data-img="PROJECT3.png">
                        <div className="experience-container" data-animation="fadeInUp">
                            <div className="project-media"><img src="PROJECT3.png" alt="Project:PORTFOLIO" /></div>
                            <div className="project-body">
                                <h3>PORTFOLIO</h3>
                                <p className="muted">PROJECTS · Motion · STYLES</p>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}

export default Experience