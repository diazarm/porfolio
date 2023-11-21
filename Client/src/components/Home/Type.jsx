import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Desarrollador full stack",
              "Coach facilitador en UDD Chile",
              "Freelancer",
              "Comprometido con la educación"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type