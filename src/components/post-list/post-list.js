import React from 'react';
import './post-list.css';

import PostListItem from '../post-list-item';
import {ListGroup, ListGroupItem} from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        if ( typeof item === 'object' && notEmpty (item) ) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}/>
                    {/* <PostListItem 
                    label={item.label}
                    important={item.important} /> */}
                </li>
            )    
        }        
        
    })

    function notEmpty(obj) {
        for (let key in obj) 
        {
            // если тело цикла начнет выполняться - значит в объекте есть свойства
            return true;
        }
        return false;
    }

    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;