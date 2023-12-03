import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import Quote from './components/quote.component';
import TypewriterComponent from './Typewriter';

const url = "https://api.quotable.io/random";

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setQuote({ content: data.content, author: data.author }))
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const copyToClipboard = () => {
    const textToCopy = quote.content + ' ' + '-' + ' ' + quote.author;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

  return (
    <div>
      <h1 className="Title"> Random Quote Generator </h1>
      <img src="./images/whitestars.png"/>
      <div className="quote-message">
        <TypewriterComponent text={quote.content} />
      </div>
      <Quote author={quote.author} />
      <button className="generate" onClick={fetchInfo}>Generate Quote</button>
      <button className="copy" onClick={copyToClipboard}>Copy to Clipboard</button>
      <footer>This program was made possible by Quotable API. Shout out to them for their free service!</footer>
    
    </div>
    
  );
}

export default App;
