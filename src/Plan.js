// Plan.js
import React from 'react';
import './Plan.css';

function Plan({ plan, onSelect }) {
  return (
    <div className="plan">
      <h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="icon"
          viewBox="0 0 16 16"
        >
          <path d="M14 4.5a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 1 1 0-3h11A1.5 1.5 0 0 1 14 4.5zm0 3a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 1 1 0-3h11A1.5 1.5 0 0 1 14 7.5zm0 3a1.5 1.5 0 0 1-1.5 1.5h-11a1.5 1.5 0 1 1 0-3h11A1.5 1.5 0 0 1 14 10.5z"/>
        </svg>
        {plan.name}
      </h2>
      <p className="price">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="icon"
          viewBox="0 0 16 16"
        >
          <path d="M7.93 1.93a4.25 4.25 0 0 1 5.353 0 3.75 3.75 0 0 1 0 5.353L7.707 14.707a1 1 0 0 1-1.414 0L1.38 9.793a3.75 3.75 0 0 1 0-5.353 4.25 4.25 0 0 1 5.353 0l.193.193.193-.193zM9 8.707L6.293 6 4.5 7.793 7 10.293l4-4L9 8.707z"/>
        </svg>
        {plan.price}
      </p>
      <p className="description">{plan.description}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="icon"
              viewBox="0 0 16 16"
            >
              <path d="M16 2a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.8-2.8L7 1H1a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2H3.8l1.3 2.6A2 2 0 0 1 8 4h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5a1.5 1.5 0 1 1 2 0V14h8V6H8a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2H7.8l1.2-2.4A2 2 0 0 1 11 0h4a1 1 0 0 1 1 1z"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button onClick={() => onSelect(plan)}>View Details</button>
    </div>
  );
}

export default Plan;
