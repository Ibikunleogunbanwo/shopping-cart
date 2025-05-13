"use client";

import React, { useReducer } from 'react';

function robotMood(state, action) {
  switch (action.type) {
    case 'MAKE_HAPPY':
      return '😊';
    case 'MAKE_ANGRY':
      return '😡';
    case 'MAKE_SLEEPY':
      return '😴';
    default:
      return state;
  }
}

function Robot() {
  const [mood, dispatch] = useReducer(robotMood, '😊');

  return (
    <div className="w-1/3 p-6">
      <h1 className="text-xl font-bold mb-4">Robot Mood: {mood}</h1>
      <div className="grid grid-rows-3 gap-4 justify-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => dispatch({ type: 'MAKE_HAPPY' })}
        >
          Make Happy
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch({ type: 'MAKE_ANGRY' })}
        >
          Make Angry
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={() => dispatch({ type: 'MAKE_SLEEPY' })}
        >
          Make Sleepy
        </button>
      </div>
    </div>
  );
}

export default Robot;