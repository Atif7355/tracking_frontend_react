import React from 'react'
import {Tracking} from "./Tracking";

export const Website = ({mylist}) => {
        let myStyle = {
            minheight:"70vh",
            position:"relative",
            margin:"40px auto",
            backgroundColor:"violet",
            color:"blue",
            fontFamily:"Cursive",
            fontSize:"20px",
            borderRadius:"5px",
            border:"2px solid black",
            transform:"translate(0,-38px)"
        
        }
        return (
            <div className="container" style={myStyle}>
                <h3 className="my-3">Detailed List</h3>
                {mylist.length===0?"No detail to display":
                React.Children.toArray(
                mylist.map((track)=>{
        
                    return(<Tracking track={track}/>
                    )
                })
                )
            }
               
        </div>
    )
}
