import { useRef, useState } from "react";


function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "⚡",
        "Django",
        "⚛",
    ];
    return (
        <div className="w-[98%] overflow-hidden ml-5">
            <div className="flex gap-[50px] animate-[var(--animate-scroll)]">
                {[...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="text-5xl font-bold text-white opacity-90 min-w-[125px] text-center"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills