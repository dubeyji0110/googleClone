import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import './Search.css';

function Search({ hideButtons = false }) {

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        history.push('/search');
    };

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                    <Button variant='outlined'>I'm feeling Lucky</Button>
                </div>
            ) : (
                    <div className='search__buttons'>
                        <Button className='search__buttonshidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
                        <Button className='search__buttonshidden' variant='outlined'>I'm feeling Lucky</Button>
                    </div>
                )
            };
        </form>
    )
}

export default Search