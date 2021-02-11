import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setindex] = useState(0);
  const {id, name, job, image, text} = people[index]

  const checkIndex = (number) => {
    if(number > people.length-1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const prevPerson = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex)
    })
  }
  const nextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex)
    })
  }
  const surprisePerson = () => {
      let random = Math.floor(Math.random()*people.length);
      if(random === index) {
        random = index += 1;
      }
      setIndex(checkIndex(random));
    }
  }


  return (
  <article key={id} className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img'/>
      <span className="quote-icon">
      <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">
      {name}
    </h4>
      <p className="job">
        {job}
      </p>
      <p className="info">
      {text}
      </p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>
      </div>
        <button className='random-btn' onClick={surprisePerson}>
          surprise me
        </button>
    </article>
  )
}

export default Review;
