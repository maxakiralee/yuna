import React from 'react';
import style from './Style.module.css';
import './index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={style.container}>
      <p className={style.text}>
        headphones on! 😴🎶🔊
      </p>

      <Link to="/yuna" className={style.startButtonLink}>
        <button className={style.startButton}>START</button>
        </Link>

    </div>
  );
}

export default Home;