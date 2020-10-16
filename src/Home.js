import React from "react";
import { Link } from 'react-router-dom'

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list

  return (
    <div className='home-wrapper'>
      <div className='header'>
        <h2>Your favorite food, delivered while coding</h2>
        <Link to='/pizza'><button className='action-button' id='pizza-button'>Pizza?</button></Link>
      </div>
    </div>
  );
}
