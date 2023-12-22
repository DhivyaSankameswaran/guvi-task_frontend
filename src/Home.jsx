// Welcome.jsx
import React from 'react';
import Axios from 'axios';  // Import Axios
import { useLocation } from 'react-router-dom';
import { UseStore } from './store';

const Welcome = () => {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.email) {
    // Handle case when state or email is not available
    return <div>No email found in the state</div>;
  }

  const { email, setEmail } = UseStore();
const sample_email = "sample@gmail.com";
const {emailStore,setEmailStore} = UseStore();



  async function handleSubmit(event) {
    event.preventDefault();
    try {
      // Replace 'form.values' with the actual data you want to send
      const ReqData = {
        name: event.target.name.value,
        age: event.target.age.value,
        gender: event.target.gender.value,
        dob: event.target.dob.value,
        mobile: event.target.mobile.value,
      };

      const { data } = await Axios.put(
        `http://localhost:5000/api/add/update/profile/${sample_email}`,
        {
          ReqData,
        }
      );

      // Handle the response if needed
      
      console.log('Profile updated successfully:', data);
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  }

  return (
    <div>
      <h2>Welcome, {email}!</h2>
      <p>This is your profile page.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" />

        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" name="gender" /><br></br>

        <label htmlFor="dob">Date of Birth:</label>
        <input type="text" id="dob" name="dob" />

        <label htmlFor="mobile">Mobile Number:</label>
        <input type="text" id="mobile" name="mobile" /><br></br>

        <button type="submit">Update Profile</button><br></br><br></br>


        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Welcome;
