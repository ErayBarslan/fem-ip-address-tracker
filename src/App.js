import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import Info from './Info'
import LocationMap from './LocationMap'
import LoadEffect from './LoadEffect'

const App = () => {
  const [info, setInfo] = useState({})
  const [clientIp, setClientIp] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchClientIp = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://geolocation-db.com/json/')
      const data = await response.json()
      setClientIp(data.Ipv4)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchClientIp()
  }, [])

  return (<>
    <div className='img-container' aria-hidden="true">
      <img src="images/pattern-bg.png" alt="background" className='img-pattern' />
    </div>
    {!loading && (<>
      <LocationMap info={info} />
    </>)}
    <section className='content-holder'>
      <h1>IP Address Tracker</h1>
      <SearchForm setLoading={setLoading} setInfo={setInfo} clientIp={clientIp} />
      {loading && <LoadEffect />}
      {!loading && (<>
        <Info info={info} />
      </>)}
    </section>
  </>)
}

export default App