import { useRef } from 'react';

function useAudio(audioFilePath) {
  const audioRef = useRef(new Audio(audioFilePath));

  const playAudio = (otherAudioRefs = []) => {
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

  return { playAudio, audioRef };
}

export default useAudio;
