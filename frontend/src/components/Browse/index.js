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
    const categories = useSelector(state => state.browse.categories);

    // FOR SEARCH
    const [searching, setSearching] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [categoryCheck, setCategoryCheck] = useState('');
    const [update, setUpdate] = useState(false);

    let results = searchInput.length > 0 ? allItems.filter(item => {
        return ((searchInput.toLowerCase().split('').reduce((accum, letter) => {
            if(item.name.toLowerCase().includes(letter)) accum++;
            return accum;
        }, 0) / searchInput.length) > .85)
    }) : allItems

    useEffect(() => {
        if(user && !browseLoaded) dispatch(populateBrowse(user));
        if(browseData) setBrowseLoaded(true);
    }, [dispatch, user, browseData]);

    useEffect(() => {
    if(browseLoaded && !categoryCheck) {
        const catNames = {}
        Array.from(categories).forEach(cat => catNames[cat.name] = false);
        setCategoryCheck(catNames)
    }
    }, [browseLoaded]);

    const {favoriteItems, newlyAddedItems, recentlyVisited} = browseData;

    return isLoaded && browseLoaded && (
        <div className='main-page'>
                <div className='search-area'>
                    <form>
                        <input className='search-input' onFocus={e => setSearching(true)} onBlur={e => {
                            if(e.target.value.length == 0) setSearching(false);
                        }} placeholder='S E A R C H' value={searchInput} onChange={e => setSearchInput(e.target.value)}></input>
                        {/* {Array.from(categories).map(cat =>
                            (<>
                                <input type='checkbox' key={cat.id} checked={categoryCheck[cat.name]} name={cat.name} value={cat.name} onChange={e => {
                                    setCategoryCheck(state => {
                                        console.log('THE OLD STATE:     ', state)
                                        state[e.target.value] = !state[e.target.value]
                                        console.log('THE NEW STATE:     ', state)
                                        return state
                                    })
                                }}></input>
                                <label key={cat.name} htmlFor={cat.name}>{cat.name}</label>
                                {console.log(cat.name)}
                                </>)
                            )} */}
                        <button className='clear-search-button' onClick={e => {
                            e.preventDefault()
                            setSearchInput('')
                            // setCategoryCheck(state => {
                                //     Object.keys(state).forEach(thing => state[thing] = false)
                                // })
                            }}>C L E A R • S E A R C H</button>
                    </form>
                    {/* {searching && <p>Filter By Category</p>} */}
                </div>
            {!searching && (<div className='browse-page'>
                <div className='browse-grid'>
                    {!searching && (
                        <>
                        {/* <div className='outer-product-row'>
                            <h2 className='section-header'>E V E R Y T H I N G</h2>
                            <div className='products-browse product-row'>
                                {browseItems.map((item) => <ItemCard key={item.id} item={item} />)}
                            </div>
                        </div> */}
                        <div className='outer-product-row'>
                            <h2 className='section-header'>F R E S H • U P</h2>
                            <div className='products-new product-row'>
                                {newlyAddedItems.map((item, index) => <ItemCard key={index} item={item} />)}
                            </div>
                        </div>
                        <div className='outer-product-row'>
                            <h2 className='section-header'>B E E N • T H E R E</h2>
                            <div className='product-row'>
                                {recentlyVisited.map((item, index) => <ItemCard key={index} item={item} />)}
                            </div>
                        </div>
                        <div className='outer-product-row'>
                            <h2 className='section-header'>M Y • F A V S</h2>
                            <div className='products-favorites product-row'>
                                {favoriteItems.map((item, index) => <ItemCard key={index} item={item} />)}
                            </div>
                        </div>
                    </>
                        )}
                </div>
            </div>)}
            {searching && (
                <div className='product-row'>
                    {results.map((item, index) => <ItemCard key={index} item={item} />)}
                </div>
                )}
        </div>
    )
}

export default Browse;
