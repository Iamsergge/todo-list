import React from 'react';

const Card = () => {
    return (
            <div class = "card-wrapper mr-5">
                <div class = "card-top" style= {{"background-color": "chartreuse"}}></div>
                <div class = "task-holder" >
                    <span class = "card-header" style={{"background-color": "#F2FAF1"}}></span>
                    <p>Learn react</p>

                    <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                        <li class = "far fa-edit" style={{"color" : "#5DC250"}}></li>
                        <li class="fas fa-trash-alt" style = {{"color": "#5DC250"}}></li>

                    </div>
                

                </div>

            </div>


    )
} 
export default Card;