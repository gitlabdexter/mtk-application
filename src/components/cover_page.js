import React from 'react'

const cover_page = (props) => {
  return (
    <div key={props.id}>
     <div className="navbar">
        <div className="logo">{props.siteName}</div>
    </div>
    
    <div className="container">
            <img src={props.image} alt="https://i.ibb.co/dsBK8FTw/app-main-logo.png"/>
            <div className="title">{props.siteName}</div>
            <div className="subtitle">{props.description}</div>
            <div className='displayStack__2'>
            <a className='appLink' href={props.siteLink}>
            
            </a>
          </div>
    </div>
    <div className='app_title'>OUR VPN LIST</div>
    </div>
  )
}

export default cover_page
