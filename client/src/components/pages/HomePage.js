import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <Link to='/Fibonacci'>Calculate Fobinacci</Link>
    </div>
);

export default HomePage;