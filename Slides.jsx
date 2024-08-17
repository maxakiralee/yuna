import React, { useState } from 'react';
import style from './Style.module.css';
import './index.css';

function Slides() {
  // Array of strings to display
  const textArray = [
    "Dear Yuna,", 
    "you have a date!",
    "scheduled for..", 
    "Sunday, August 18th ✍",
    "With..",
    "Max 🦍 (Your man)",
    "The Itinerary:",
    "I will pick you up at 2pm 🕛",
    "Natural History Museum 🏛",
    "until close at 5pm 🌚",
    "then snacks at..",
    "About Time Cafe 🍵",
    "or elsewhere..",
    "then..",
    "reservation at 6:30pm 🕕",
    "at Mastro's! 🥩🍽",
    "Afterwards..",
    "Griffith Observatory 🌌",
    "and perhaps some dessert 🍨",
    "then perhaps..",
    "a movie in car 🎥",
    "finally..",
    "I will drop you off at home 🏡",
    "Please kindly notify me if..",
    "you are/aren't interested 👽👽",
    "Attire:",
    "formal 🕴👗",
    "I will be..",
    "in a black suit 🕴",
    "and a black shirt 👔",
    "with black pants 🩳",
    "with a change of clothes 🧥",
    "a comfy hoodie and sweatpants 🧥🩳",
    "What to bring:",
    "a change of clothes 🧥🩳",
    "be comfortable 🩳👟",
    "also bring..",
    "your beautiful self 🦍🦍",
    "your beautiful heart 🦍🦍",
    "your beautiful mind 🦍🦍",
    "Thats all! 🤠",
    "See you soon beautiful",
];

  // State to track the current index of the text array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for the Next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < textArray.length - 1) {
        return prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };

  // Handler for the Back button
  const handleBack = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <div className={style.container}>
      <p className={style.text}>
        {textArray[currentIndex]}
      </p>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={handleBack} disabled={currentIndex === 0}>Back</button>
        <button className={style.button} onClick={handleNext} disabled={currentIndex === textArray.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default Slides;
