import React from "react";
import SplitText from "../components/splitText.jsx";
import Type from "../components/typeWriter.jsx";
import EnterAnimation from "../components/enterAnimation.jsx";
import AnimatedImage from "../components/animatedImage.jsx";

export default function Profile() {
    const bioText = "I'm a student of Veer Surendra Sai University of Technology, Burla, Odisha and i am a full stack web developer who loves working on the backend. I enjoy building APIs and managing databases. I also work with React.js and tailwind CSS on the frontend to build clean and responsive user interfaces.";

    const hobbies = [
        "I love to play cricket and watch football",
        "I love Exploring new tech and building projects",
        "Helping others on their lives brings me joy and fulfillment."
    ];

    return (
        <div className="relative min-h-screen bg-[url('/src/pictures/Background06.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="relative min-h-screen p-4 md:p-8 font-roboto text-xl md:text-2xl">
                <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-26 h-26 md:w-48 md:h-48">
                    <EnterAnimation>
                        <img
                            src="/src/pictures/myPic.jpg"
                            alt="Profile"
                            className="w-full h-full shadow-2xl rounded-full"
                        />
                    </EnterAnimation>
                </div>

                <div className="flex items-center">
                    <AnimatedImage />
                    <div className="flex flex-col items-start pl-10">
                        <div className="flex flex-wrap items-center gap-2">
                            <SplitText className="font-bold text-4xl">Hello I am</SplitText>
                            <SplitText className="font-bold text-4xl text-green-500">Rudra Pratap Padhi</SplitText>
                        </div>
                        <Type />
                    </div>
                </div>

                {/* Bio Section */}
                <div className="mt-10 pl-10 max-w-6xl">
                    <p className="text-2xl font-semibold leading-relaxed">
                        {bioText}
                    </p>
                </div>

                {/* Hobbies Section */}
                <div className="mt-8 pl-10 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-4">My Hobbies</h2>
                    <ul className="list-disc list-inside space-y-2 ml-7">
                        {hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
