import React from "react";

function Big({ videoSrc, videoSrc2, }) {
    return (
        <div>
            {/* first video */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6">
                <div className="w-full lg:w-1/2 h-full flex justify-center items-center px-10 md:px-20">
                    <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        className="w-full h-550 object-cover rounded-lg"
                    />
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 md:px-16 lg:px-20">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
                        Get crafty with our Cans
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 text-black p-small lg:pr-25">
                        Got a business event, wedding, or just a big party? Personalize our cans to perfectly match your event.
                    </p>
                    <button className="button-nav text-white transition">Customize</button>
                </div>

            </div>


            {/* second video */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-6 pt-10">

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 sm:px-10 md:px-16 lg:px-20">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
                        Can-tastic Advertising
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 text-black p-small lg:pr-18">
                        Want your brand to make a splash? Promote your brand in Piyaau's allied cafes, restaurants, and hotels to captivate thousands of potential customers effortlessly.
                    </p>
                    <button className="button-nav text-white transition">Advertise</button>
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
