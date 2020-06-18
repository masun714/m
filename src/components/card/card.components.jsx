import React from 'react';

export const Card = props => {
    return <div className="card-Container">
        {/* <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="" /> */}
        <h1 className={props.monster.id}>{props.monster.name}</h1>
    </div>

}