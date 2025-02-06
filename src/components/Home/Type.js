import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Flutter Developer",
          "Firebase Enthusiast",
          "Advanced Flutter Diploma Holder",
          "Mobile App Creator",
          "Open Source Contributor",
          "Creative Thinker",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;