import React from 'react'


export const Tracking = ({track}) => {
    return(
        <>
        <div>
            <h4>{track.name}</h4>
            <h4>{track.address1}</h4>
            <h4>{track.address2}</h4>
            <p>{track.mobile}</p>
            <p>{track.city}</p>
            <p>{track.district}</p>
            <p>{track.code}</p>
            <p>{track.state}</p>
            <p>{track.patient}</p>
            <p>{track.disease}</p>
            <h4>{track.needs}</h4>
            <p>{track.email}</p>
            <p>{track.aemail}</p>
        </div>
        <hr/>
        </>
    )
}
