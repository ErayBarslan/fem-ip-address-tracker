import React, { useEffect, useState } from 'react'

const SearchForm = ({ setLoading, setInfo, clientIp }) => {
  const [query, setQuery] = useState(clientIp)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_I0ypenGHtxiMhqTdZ8MvQai23Iber&ipAddress=${query}`)
      const data = await response.json()
      setInfo(data)
      setLoading(false)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  },[])

  const handleSearch = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text" aria-label="search ip address" value={query} placeholder='Search for any IP address or domain' onChange={(e) => { setQuery(e.target.value) }} />
      <button aria-label='search'><img src="./public/images/icon-arrow.svg" alt="arrow icon" aria-hidden="true" /></button>
    </form>
  )
}

export default SearchForm