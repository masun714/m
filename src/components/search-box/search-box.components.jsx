import React from 'react';

export const SearchBox = ({ placeHolder, chnageHandling }) => {
    return <input
        type='search'
        placeholder={placeHolder}
        onChange={chnageHandling}
    />
}