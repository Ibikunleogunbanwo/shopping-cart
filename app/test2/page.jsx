
"use client"
import React, { useState, useEffect } from 'react';

function UserProfile() {
  const [userId, setUserId] = useState(1);
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUserData(null);
      }
    };

    fetchUserData();
  }, [userId]); 


  return (
    <div className='items-center p-4'>
      <h1 className='text-xl font-bold mb-4'>useEffect Hook</h1>

      <div className="space-x-2 mb-4">
        <button className='bg-amber-100 text-black px-4 py-2 rounded' onClick={() => setUserId(userId >= 10 ? 1 : userId + 1)}>UserId +</button>
        <button className='bg-gray-200 text-black px-4 py-2 rounded' onClick={() => setUserId(userId > 1 ? userId - 1 : 1)}>UserId -</button>
      </div>

      {userData ? (
        <div className='bg-gray-100 p-4 rounded text-black'>
          <h2 className='text-lg font-semibold'>User Profile</h2>
          <p><strong>UserId:</strong> {userData.id}</p>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default UserProfile;