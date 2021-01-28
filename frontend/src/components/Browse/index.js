import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {populateBrowse} from '../../store/browse'
import ItemCard from '../ItemCard';


function Browse({isLoaded}) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    const history = useHistory();
    const [browseLoaded, setBrowseLoaded] = useState(false);
    const browseData = useSelector(state => state.browse)

    useEffect(() => {
        dispatch(populateBrowse(user)).then(setBrowseLoaded(true));
      }, [dispatch, user]);

    const {favoriteItems, browseItems, newlyAddedItems} = browseData;
    console.log(favoriteItems)

    return  isLoaded && browseLoaded && (
        <>
            <h1>Browse</h1>
            <form>
                <input placeholder='Search'></input>
                <label>
                    <span> Category</span>
                    <input
                        type='radio'
                        checked={false}
                        onChange={()=>{}}
                    />
                </label>
            </form>
            <div>
                <h3>Recently Visited</h3>
                <p>NEEDS WORK</p>
            </div>
            <div>
                <h3>Favorites</h3>
                <div>
                    {favoriteItems.map((item) => <ItemCard item={item} />)}
                </div>
            </div>
            <div>
                <h3>Newly Added</h3>
                <div>
                    {newlyAddedItems.map((item) => <ItemCard item={item} />)}
                </div>
            </div>
            <div>
                <h3>Browse</h3>
                <div>
                    {browseItems.map((item) => <ItemCard item={item} />)}
                </div>
            </div>
        </>
    )
}

export default Browse;
