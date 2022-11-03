import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const domElement = document.getElementById('webshop-widget') as HTMLDivElement;
const publicId = domElement.getAttribute("data-public-id");

ReactDOM.createRoot(domElement).render(
  <React.StrictMode>
    <App publicId={publicId} />
  </React.StrictMode>
)
