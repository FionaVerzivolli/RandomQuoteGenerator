import React from 'react';
import Typewriter from 'typewriter-effect';

function TypewriterComponent({ text }) {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 50,
        strings: [text],
      }}
    />
  );
}

export default TypewriterComponent;
