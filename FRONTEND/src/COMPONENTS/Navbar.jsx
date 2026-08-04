import { useState, useEffect } from 'react'

function Navbar() {

    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);
    return (
        <nav
            class="fixed top-4 sm:top-5 lg:top-6 left-1/2 -translate-x-1/2 z-50
        w-[99%] sm:w-[94%] lg:w-[88%] max-w-7xl
  rounded-full
  bg-[#121218]/90
  backdrop-blur-xl
  border border-white/10
  shadow-[0_8px_30px_rgba(0,0,0,0.4)]
  px-4 py-1 sm:px-6 lg:px-8">

            <div class="flex items-center justify-between">


                <h2 class="text-4xl font-black text-white tracking-wide">
                    TARUN
                </h2>


                <ul class="hidden lg:flex items-center gap-8 text-gray-300">

                    <li>
                        <a href="HOME"
                            class="bg-lime-400 text-black
          px-6 py-3
          rounded-full
          font-semibold
          shadow-[0_0_20px_#b7ff00]">
                            Home
                        </a>
                    </li>

                    <li><a href="ABOUT" class="hover:text-lime-400 transition">About</a></li>

                    <li><a href="JOURNEY" class="hover:text-lime-400 transition">Journey</a></li>

                    <li><a href="LAB" class="hover:text-lime-400 transition">Lab</a></li>

                    <li><a href="SKILLS" class="hover:text-lime-400 transition">Skills</a></li>

                    <li><a href="Projects" class="hover:text-lime-400 transition">Projects</a></li>

                    <li><a href="Services" class="hover:text-lime-400 transition">Services</a></li>

                    <li><a href="Blog" class="hover:text-lime-400 transition">Blog</a></li>

                    <li><a href="Contact" class="hover:text-lime-400 transition">Contact</a></li>

                </ul>


                <div class="hidden lg:flex items-center gap-3">


                    <button
                        onClick={() => setDark(!dark)}
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
                    >
                        {dark ? "☀️" : "🌙"}
                    </button>

                    <button
                        class="flex items-center gap-2
                        rounded-full
                        border border-white/10
                        px-4 py-2
                        
                        hover:border-lime-400">

                        🔍
                        <span class="hidden lg:inline text-white">Search</span>

                        <kbd
                            class="hidden lg:inline rounded bg-white/10 px-2 py-1 text-gray-500">
                            ⌘K
                        </kbd>

                    </button>
                    <button
                        class="xl:hidden text-white text-3xl">

                        ☰

                    </button>

                    <button
                        class="rounded-full
                        border border-lime-400
                        text-lime-400
                        px-5 lg:px-7
                        py-2 lg:py-3
                        font-semibold
                        hover:bg-lime-400
                        hover:text-black
                        transition-all">

                        ↓ Resume

                    </button>

                </div>



            </div>

        </nav>
    )
}

export default Navbar