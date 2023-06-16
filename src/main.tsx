import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalSearchHintsResponse, SearchHandler } from './type'
import 'kit/styles/style.css'

const fetchSearchHints = (phrase: string) : Promise<GlobalSearchHintsResponse> => {

  return fetch('http://localhost:82/api/core/getHints', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phrase: phrase
    })
  })
    .then(res => res.json()) 
}

const handleSearch: SearchHandler = (phrase: string, context: string|null): void => {
  console.log(phrase, context)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App initSearchPhrase='npt' getGlobalSearchHints={fetchSearchHints} handleSearch={handleSearch}/>
  </React.StrictMode>,
)
