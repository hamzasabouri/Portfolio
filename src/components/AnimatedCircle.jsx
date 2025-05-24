import React from 'react';
import './Spinner.css';


export default function AnimatedCircle() {

  return (
    
      <section className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 flex flex-col items-center justify-center px-6 py-16 text-white">
        <div className="demo-3">
      <ul className="spinner">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
      </section>
   
  );
}
