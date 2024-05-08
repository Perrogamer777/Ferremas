import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Productos from './Productos';


export default function Home() {
    return (
        <div>
            <Navbar />
            <Productos />
            <h1 className="text-3xl font-bold underline text-center">Ferremas Tienda oficial</h1>
            <h2 className='text-center'>La única e incomparable</h2>
        </div>
    );
}
