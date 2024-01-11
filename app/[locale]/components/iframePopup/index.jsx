"use client"
import React from 'react'
import './style.scss'
import { useAppContext } from '@/app/context/AppContextProvider'

function IframePopup() {
    const {iframeUrl, setIframeUrl} = useAppContext();

    const closePopup = () =>{
        setIframeUrl("")
    }
  
    return (
    iframeUrl ?
    <div className='popup' onClick={closePopup}>
        <iframe src={iframeUrl} frameBorder="0"></iframe>
        <div className="close_popup">✖</div>
    </div>
    :
    <></>
  )
}

export default IframePopup