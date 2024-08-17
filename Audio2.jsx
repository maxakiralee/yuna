// Audio2.js
import { useRef } from 'react';

function useAudio2() {  // Removed export from the function name
  const audioRef = useRef(new Audio('./music2.mp3'));

  const playAudio2 = (otherAudioRefs = []) => {
    // Stop other audio
    otherAudioRefs.forEach(audio => {
      if (audio.current && !audio.current.paused) {
        audio.current.pause();
        audio.current.currentTime = 0;
      }
    });
    // Play this audio
    audioRef.current.play();
  };

  return { playAudio2, audioRef };
}

export default useAudio2; // Exporting as default
