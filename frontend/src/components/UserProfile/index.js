import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import ItemCard from '../ItemCard';
import './UserProfile.css'

const UserProfile = () => {

    const userId = parseInt(useParams().id,10)
    const [profileLoaded, setProfileLoaded] = useState(false)

    const userProfile = useSelector(state => state.browse.currentProfile);
    const relatedItems = useSelector(state => state.browse.browseItems).filter(ele => ele.sellerId === userId);

    useEffect(() => {
        if(userProfile && relatedItems) setProfileLoaded(true);
    }, [userProfile])

    return profileLoaded && (
        <>
            <div className='profile-header-holder'>
                <h2 className='profile-header-username'>{userProfile.username.split('').join(' ').toUpperCase()}'S • P R O F I L E</h2>
                <button className='profile-follow-button'>F O L L O W</button>
            </div>
            <h3>B I O</h3>
            <p>{userProfile.bio}</p>
            {relatedItems.length > 0 &&
            (
                <>
                    <h3>{`${userProfile.username.split('').join(' ').toUpperCase()} • I S • C U R R E N T L Y • S E L L I N G:`}</h3>
                    <div className='profile-selling-container'>
                        {relatedItems.map(item => <ItemCard className='profile-item-card' item={item} />)}
                    </div>
                </>
            )}
        </>
    )
}

export default UserProfile;
