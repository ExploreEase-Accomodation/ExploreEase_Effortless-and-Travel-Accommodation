import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/api/v/user/profile');
                setUserProfile(response.data.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
            }
        };

        fetchUserProfile();
    }, []);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('profilePic', file);
        try {
            const response = await axios.post('/api/v/user/upload-profile-pic', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Profile picture uploaded:', response.data.data);
            // Optionally, you can update the user profile state with the new profile picture path
        } catch (error) {
            console.error('Error uploading profile picture:', error);
            // Handle error
        }
    };

    return (
        <div className='profile-container'>
            <h1>User Profile</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                userProfile && (
                    <div>
                        <div className='profile-details'>
                            <p><strong>Name:</strong> {userProfile.fullname}</p>
                            <p><strong>Email:</strong> {userProfile.email}</p>
                            <p><strong>Mobile Number:</strong> {userProfile.mobileno}</p>
                            {/* Display other user details as needed */}
                        </div>
                        <div className='profile-pic'>
                            <p><strong>Profile Picture:</strong></p>
                            {userProfile.profilePic ? (
                                <img src={userProfile.profilePic} alt="Profile" />
                            ) : (
                                <p>No profile picture uploaded</p>
                            )}
                            <input type="file" accept="image/*" onChange={handleFileUpload} />
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ProfilePage;
