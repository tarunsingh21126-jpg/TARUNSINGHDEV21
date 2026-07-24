import { useState } from 'react'

function Navbar() {
    return (
        <header className="backdrop-blur-[6px] sticky top-0 z-30">
            <nav className="flex items-center justify-between p-0" aria-label="Main navigation">
                <div className="font-bold tracking-[1px]">TARUN<span className="text-[var(--accent)]">DEV21</span></div>
                <nav class="navbar">
                    <div className="flex justify-between items-center max-w-[1200px] mx-auto py-4 px-8">
                        <button class="nav-toggle" aria-expanded="false" aria-controls="navMenu" aria-label="Toggle navigation">
                            <a href="mailto:your.email@example.com" title="INSTA">
                                <i class="fa-brands fa-instagram"></i></a>
                        </button>

                        <button id="theme-toggle" class="theme-toggle" aria-expanded="false" aria-label="Toggle dark mode">
                            <i class="fas fa-moon"></i>
                        </button>
                        <ul class="navbar-menu" id="nav-menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experiences">Experiences</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>

                        <div class="hidden flex-col cursor-pointer">
                            <span class="w-[25px] h-[3px] bg-[var(--navbar-text)] my-[3px] transition-all duration-300"></span>
                            <span class="w-[25px] h-[3px] bg-[var(--navbar-text)] my-[3px] transition-all duration-300"></span>
                            <span class="w-[25px] h-[3px] bg-[var(--navbar-text)] my-[3px] transition-all duration-300"></span>
                        </div>
                    </div>
                </nav>
            </nav>
        </header>
    )
}

export default Navbar