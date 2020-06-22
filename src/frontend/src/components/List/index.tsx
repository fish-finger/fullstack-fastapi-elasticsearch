import * as React from 'react';
import './style.css';

export interface List { 
    items: any[];
    onClickEvent?: Function;
}

export const List = ({ items, onClickEvent }: List) => (
    <ul className="items-list">
        {
            items.map((url, i) => {
                return ( 
                        <li 
                            className="item"
                            key={i}
                            onClick={() => onClickEvent(url._source.url)}
                        >
                            {url._source.url}
                        </li>
                );
            })
        }
    </ul>
);