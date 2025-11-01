import { useState } from 'react';

function QuoteGenerator() {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Life is what happens to you while you're busy making other plans. - John Lennon",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "In the middle of difficulty lies opportunity. - Albert Einstein",
        "It does not matter how slowly you go as long as you do not stop. - Confucius",
        "The journey of a thousand miles begins with one step. - Lao Tzu",
        "The only true wisdom is in knowing you know nothing. - Socrates",
        "Be the change that you wish to see in the world. - Mahatma Gandhi",
        "Act as if what you do makes a difference. It does. - William James",
        "The purpose of our lives is to be happy. - Dalai Lama"
    ];    
    
    const [quote, setCurrentQuote] = useState(quotes[0]);
    
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
    };
    
    return(
        <>
            <div>
                <h1>{quote}</h1>
                <button onClick={getRandomQuote}>Next Quote</button>
            </div>
        </>
    );
}

export default QuoteGenerator;


import React from 'react';
import QuoteGenerator from './QuoteGenerator';

export default function App() {
  return (
    <div>
      <QuoteGenerator />
    </div>
  );
}
