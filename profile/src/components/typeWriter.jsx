import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Type() {
    return (
        <div>
            <h1
                style={{
                    paddingTop: "3rem",
                    margin: "auto 0",
                    fontSize: "2rem", 
                    fontWeight: "bold", // Make the text bold
                }}
            >
                I'm a
                <span
                    style={{
                        color: "red",
                        fontWeight: "bold", // Ensure the typewriter text is also bold
                        marginLeft: "10px",
                    }}
                >
                    <Typewriter
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        words={['Full Stack Web Developer']}
                    />
                </span>
            </h1>
        </div>
    );
}

export default Type;
