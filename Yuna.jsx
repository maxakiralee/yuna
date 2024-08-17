import React from 'react';
import { Link } from 'react-router-dom';
import style from './Style.module.css';
import { useAudioContext } from './AudioContext';
import music from './music.mp3';
import music2 from './music2.mp3';

function Yuna() {
  const { playAudio } = useAudioContext();

  return (
    <div className={style.container}>
      <Link to="/forbefore" className={style.startButtonLinkLander}>
        <button className={style.startButton} onClick={() => playAudio('inviteAudio', music2)}>
          For Before
        </button>
      </Link>
      <Link to="/forafter" className={style.startButtonLink}>
        <button className={style.startButton} >
          {/*onClick={() => playAudio('forAfterAudio', music)*/}
          For After
        </button>
      </Link>
    </div>
  );
}

export default Yuna;
