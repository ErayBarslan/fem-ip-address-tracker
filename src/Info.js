import React from 'react'

const Info = ({ info }) => {
  return (<>
    <div className='info-holder'>
      <div>
        <h2>ip address</h2>
        <p>{info.ip}</p>
      </div>
      <div>
        <h2>location</h2>
        <p>
          {info.location && info.location.city}
        </p>
      </div>
      <div>
        <h2>timezone</h2>
        <p>UTC {info.location && info.location.timezone}</p>
      </div>
      <div className='isp'>
        <h2>isp</h2>
        <p>{info.isp}</p>
      </div>
    </div>
  </>)
}

export default Info