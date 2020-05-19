import React from 'react'
import "../App.css"

const Team = props => {

    const {team} = props

    console.log(team);

    return (
            <div>
                <h2>{team.name}</h2>
                <p>{team.email}</p>
                <p>{team.role}</p>
             <div>
                 <button>Edit</button>
             </div>
             </div>
    )
}

export default Team;
