import { useRef, useState } from "react";
import video from "../assets/VIDEOS/about-me.mp4";

function Video() {
    const videoRef = useRef(null);
    const playVideo = () => {
        videoRef.current?.play();
    };

    const pauseVideo = () => {
        videoRef.current?.pause();
    };
    
    
    return (
        // <section className="py-12 flex justify-center bg-white">
        //     <div className="w-full max-w-5xl px-4 ">
        //         <video
        //             className="w-full max-w-xl rounded-3xl shadow-2xl"
        //             autoPlay
        //             muted
        //             loop
        //             playsInline
        //             controls
        //         >
        //             <source src={video} type="video/mp4" />
        //         </video>
        //         <div className="space-x-4">
        //             <button
        //                 onClick={playVideo}
        //                 className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        //             >
        //                 Play
        //             </button>

        //             <button
        //                 onClick={pauseVideo}
        //                 className="px-5 py-2 bg-red-600 text-white rounded-lg"
        //             >
        //                 Pause
        //             </button>
        //         </div>
        //     </div>
        // </section>
        <div className="w-full min-h-screen flex justify-center items-center bg-white">
            <div className="w-[500px] flex flex-col items-center">
                <video
                    ref={videoRef}
                    className="w-full rounded-3xl shadow-2xl"
                    playsInline
                    controls
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="flex gap-4 mt-4">
                    <button
                        onClick={playVideo}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Play
                    </button>

                    <button
                        onClick={pauseVideo}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg"
                    >
                        Pause
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Video