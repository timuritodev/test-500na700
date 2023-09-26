import React from "react";
import { Card } from './Card.jsx';
import './Cards.scss';

export const CardList = ({ data }) => {
    return (
        <div className='cardlist'>
            {data.map((item) => <Card key={item.id} data={item} />)}
        </div>
    )
}

