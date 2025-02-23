import React from "react";

function Big({ videoSrc, videoSrc2, }) {
    return (
        <div>
            {/* first video */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-6">
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center px-10 md:px-20">
                    <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        className="w-full h-550 object-cover rounded-lg"
                    />
                </div>

                {/*Text */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start px-10 md:px-20 text-white">
                    <div className="w-full">
                        <h1 className="text-5xl font-bold mb-4 text-black">Get crafty with our Cans</h1>
                        <p className="text-xl mb-6 text-black p-small">
                            Got a business event, wedding, or just a
                            big party? Personalize our cans to perfectly <br />
                            match your event.
                        </p>
                        <button className="button-nav text-white transition">Customize</button>
                    </div>
                </div>
            </div>


            {/* second video */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-6 pt-10">

                {/* Text */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start px-10 md:px-20 text-white">
                    <div className="w-full lg:px-10">
                        <h1 className="text-5xl font-bold mb-4 text-black">Can-tastic Advertising</h1>
                        <p className="text-xl mb-6 text-black p-small ">
                            Want your brand to make a splash? Promote your brand in Piyaau's allied cafes,
                            restaurants and hotels to captivate thousands of potential customers effortlessly.
                        </p>
                        <button className="button-nav text-white transition">Customize</button>
                    </div>
                </div>

                {/* Left Video */}
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center  pt-10 lg:pt-0 px-10 md:px-20">
                    <video
                        src={videoSrc2}
                        autoPlay
                        loop
                        muted
                        className="w-full h-550 object-cover rounded-lg"
                    />
                </div>


            </div>
        </div>
    );
}

export default Big;
