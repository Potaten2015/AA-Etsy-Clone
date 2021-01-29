import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom';
import ItemCard from '../ItemCard';

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
            <h2>{userProfile.username}</h2>
            <p>{userProfile.bio}</p>
            {relatedItems.length > 0 &&
            (
                <>
                    <h3>{`${userProfile.username} is selling:`}</h3>
                    {relatedItems.map(item => <ItemCard item={item} />)}
                </>
            )}
        </>
    )
}

export default UserProfile;
