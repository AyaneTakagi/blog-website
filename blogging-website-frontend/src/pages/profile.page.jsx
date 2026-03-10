import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const profileDataStructure = {
    personal_info: {
        fullname: "",
        username: "",
        profile_img: "",
        bio: "",
    },
    account_info: {
        total_posts: 0,
        total_blogs: 0,
    },
    social_links: { },
    joinedAt: " "
}

const ProfilePage = () => {

    let { id: profileId } = useParams();

    let [ profile, setProfile ] = useState(profileDataStructure);

    const fetchUserProfile = () => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-profile", { username: profileId })
        .then(({ data: user }) => {
            console.log(user);
            setProfile(user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchUserProfile();
    }, [])

    return (
        <h1>Profile page - {profileId} </h1>
    )
}

export default ProfilePage;
