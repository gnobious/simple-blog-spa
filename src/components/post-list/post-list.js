import React from 'react';
import './post-list.css';

import PostListItem from '../post-list-item';
import {ListGroup, ListGroupItem} from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <PostListItem {...itemProps}/>
                {/* <PostListItem 
                label={item.label}
                important={item.important} /> */}
            </li>
        )
    });

    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
    )
}

export default PostList;