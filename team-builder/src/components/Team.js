import React from 'react'

const Team = props => {
    return (
        <>
            {props.team.map((member, index) =>

            <div key={index}>
                <p>{member.name}</p>
                <p>{member.email}</p>
                <p>{member.role}</p>
             </div>
            )}
        </>
    )
}

export default Team;
