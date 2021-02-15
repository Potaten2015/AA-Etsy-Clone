import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {populateSplash} from '../../store/splash';
import ItemCardSplash from '../ItemCardSplash';
import './Splash.css'
import * as sessionActions from "../../store/session"

function Splash() {

    const history = useHistory();
    const dispatch = useDispatch();
    const {splashItems} = useSelector(state => state.splash);
    let splashItemsShort;

    useEffect(async () => {
        await dispatch(populateSplash()).then(() => {
            if(splashItems) splashItemsShort = splashItems.slice(0,12)
        })
    }, [])

    const demoLogin = e => {
        e.preventDefault();
        dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}))
    }

    return (
        <div className="splash-page">
            <div className="splash-center-container">
                <h1 className="splash-header">S O U R C E D</h1>
                <p>WHO ARE YOU BUYING FROM?</p>
            </div>
            <div className="splash-lower-container">
                <button onClick={e => history.push('/entry/1')} className="splash-button">L O G • I N</button>
                <button onClick={e => history.push('/entry/3')} className="splash-button">D E M O</button>
                <button onClick={e => history.push('/entry/2')} className="splash-button">S I G N • U P</button>
            </div>
            <div className='splash-grid'>
                {splashItems.map( item => <ItemCardSplash item={item} />)}
            </div>
            <div className='splash-grid-2'>
                {splashItems.map( item => <ItemCardSplash item={item} />)}
            </div>
        </div>
    )

}

export default Splash;
