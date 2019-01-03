import React from 'react';
import './Instructions.css';

export default function Instructions() {
    return (
        <header className="text-white">
            <div className="container py-3">
                <h1 className="display-4">Till It 'Clicks'!</h1>
                <h5>Click on every image once (and only once!) to win. The images will shift and swirl, testing your memory might.</h5>
                <h5>Be careful though - if you forget and select the same pic twice, the game starts over. </h5>
            </div>
        </header>
    )
}