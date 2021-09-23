import React from 'react';

import { Card } from '../card/card.component.jsx';

import './card-list.styles.css';


export const CardList = (props) => (
	  <div className='card-list'>
			{props.monsters.map(monster => {
	      // console.log(`rendering ${monster.id}`);
	      return <Card key={monster.id} monster={monster}/>
	    })}
		</div>
);