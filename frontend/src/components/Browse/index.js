import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {populateBrowse} from '../../store/browse';
import ItemCard from '../ItemCard';
import './Browse.css'


function Browse({isLoaded}) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const [browseLoaded, setBrowseLoaded] = useState(false);
    const browseData = useSelector(state => state.browse);
    const allItems = browseData.browseItems;

    // FOR SEARCH
    const [searching, setSearching] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    let results = allItems.filter(item => {
        return (searchInput.toLowerCase().split('').reduce((accum, letter) => {
            if(item.name.toLowerCase().includes(letter)) accum++;
            return accum;
        }, 0) / searchInput.length) > .8
    })

    console.log(results)

    useEffect(() => {
        dispatch(populateBrowse(user)).then(setBrowseLoaded(true));
      }, [dispatch, user]);

    const {favoriteItems, browseItems, newlyAddedItems} = browseData;

    return isLoaded && browseLoaded && (
        <div className='browse-page'>
            <div className='browse-grid'>
                <h1>Browse</h1>
                <form>
                    <input onFocus={e => setSearching(true)} onBlur={e => {
                        if(e.target.value.length == 0) setSearching(false);
                        }} placeholder='Search' value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
                    <label>
                        <span> Category</span>
                        <input
                            type='checkbox'
                            checked={false}
                            onChange={()=>{}}
                        />
                    </label>
                </form>
                {!searching && (
                <>
                    <div className='outer-product-row'>
                        <h3>Recently Visited</h3>
                        <p>NEEDS WORK</p>
                    </div>
                    <div className='outer-product-row'>
                        <h3>Favorites</h3>
                        <div className='products-favorites product-row'>
                            {favoriteItems.map((item) => <ItemCard key={item.id} item={item} />)}
                        </div>
                    </div>
                    <div className='outer-product-row'>
                        <h3>Newly Added</h3>
                        <div className='products-new product-row'>
                            {newlyAddedItems.map((item) => <ItemCard key={item.id} item={item} />)}
                        </div>
                    </div>
                    <div className='outer-product-row'>
                        <h3>Browse</h3>
                        <div className='products-browse product-row'>
                            {browseItems.map((item) => <ItemCard key={item.id} item={item} />)}
                        </div>
                    </div>
                </>
                    )}
                    {searching && (
                <>
                   <h1>WE ARE SEARCHING</h1>
                   {results.map((item) => <ItemCard key={item.id} item={item} />)}
                </>
                    )}
            </div>
        </div>
    )
}

export default Browse;
