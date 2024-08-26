import React from 'react'
import '../Style/Loader.css'

export default function Loader() {
    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='bigtosmallsmalltobig' style={{ width: '5rem', height: '5rem', borderRadius: '5rem', border: '5px dotted black' }} >
                <img src='./Icons/Music-icon3.jpg' style={{ width: '100%', height: "100%", borderRadius: "5rem" }} />
            </div>
        </div>
    )
}
