import React from 'react';

function PlayerResult(props)
{
    return(
        <tr key={props.id}>
            <th scope="row">{props.index}</th>
            <td>{props.name}</td>
            <td>{props.steps}</td>
            <td>{props.difficulty}</td>
            <td>{props.score}</td>
        </tr>
    )
}

export default PlayerResult;