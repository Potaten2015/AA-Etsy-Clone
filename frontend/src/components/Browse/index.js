import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {populateBrowse} from '../../store/browse'


function Browse({isLoaded}) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user)
    console.log(user)
    const history = useHistory();
    const [browseLoaded, setBrowseLoaded] = useState(false);

    useEffect(() => {
        dispatch(populateBrowse(user)).then(() => setBrowseLoaded(true));
      }, [dispatch]);

    useEffect(()=> {console.log(user)},[user])

    return (
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
            </div>
            <div>
                <h3>Newly Added</h3>
            </div>
            <div>
                <h3>Browse</h3>
            </div>
        </>
    )
}

export default Browse;
