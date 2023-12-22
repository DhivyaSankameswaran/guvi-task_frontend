import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    gender: '',
    dob: '',
    mobile: '',
  });

  useEffect(() => {
    // Fetch user data from the backend and update the state
    // You should replace this with your actual API call
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user-profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include any authorization headers if needed
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send updated user data to the backend for storage
      // You should replace this with your actual API call
      const response = await fetch('/api/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include any authorization headers if needed
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        // You can perform additional actions upon successful update
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
        />

        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          value={userData.gender}
          onChange={handleInputChange}
        />

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="text"
          id="dob"
          name="dob"
          value={userData.dob}
          onChange={handleInputChange}
        />

        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={userData.mobile}
          onChange={handleInputChange}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
