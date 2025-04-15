import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function SplitText({ children, className }) {
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            const h1 = containerRef.current?.querySelector("h1")
            if (!h1) return

            containerRef.current.style.visibility = "visible"

            const { words } = splitText(h1, {
                by: "words",
                class: "split-word", // Adds a class to each word span
            })

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h1 className={`h1 ${className}`}>{children}</h1>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: inline-flex;
                text-align: left;
                visibility: hidden;
                flex-wrap: wrap;
            }

            .split-word {
                will-change: transform, opacity;
                display: inline-block;
            }
        `}</style>
    );
}

