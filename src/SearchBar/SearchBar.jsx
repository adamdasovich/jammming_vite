import React, {useCallback, useState} from 'react'
import './SearchBar.css'

const SearchBar = ({onSearch, onPlaylists}) => {
  const [term, setTerm] = useState(() => {
    return localStorage.getItem('spotifySearchTerm') || '';
  })
  
  const handleTermChange = useCallback((e) => {
    const newTerm = e.target.value;
    setTerm(newTerm)
    localStorage.setItem('spotifySearchTerm', newTerm)
  }, [])

  const search = useCallback(() => {
    onSearch(term)
  }, [term, onSearch])

  console.log(term)
 

  const playlists = useCallback(() => {
    onPlaylists()
  }, [])

  return (
    <div className='SearchBar'>
    <div className='input-term'>
      <input 
        placeholder='Song, Artist or Album'
        onChange={handleTermChange}
        value={term}
      />
    </div>
    <div className='search-button'>
      <button className='SearchButton'
        onClick={search}
      >
        Search
      </button>
    </div>
    <br />
    <div className='playlist-button'>
      <button className='SearchButton'
        onClick={playlists}
      >
        Your Playlists
      </button>
    </div>
    </div>
  )
}

export default SearchBar