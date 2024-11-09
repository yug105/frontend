// app/profile/page.js
"use client";
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = 'user-123'; // Example user ID

  useEffect(() => {
    const fetchProfileData = async () => {
      //try {
        const response = await fetch(`/api/userProfile?userId=${userId}`);
        const data = await response.json();

        if (response.ok) {
          setProfileData(data);
        } else {
          console.error('Failed to fetch profile data:', data.message);
        }
    //}
    //   } catch (error) {
    //     console.error('Error fetching profile data:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    };

    fetchProfileData();
  }, [userId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!profileData) {
//     return <div>Profile not found</div>;
//   }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      
      {/* Profile Section */}
      <div className="flex items-center space-x-6">
        <img
        //   src={profileData.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">User Profile</h2>
          {/* <p className="text-gray-600">Number of Orders: {profileData.numberOfOrders}</p> */}
        </div>
      </div>

      {/* Service Providers */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Service Providers</h3>
        <ul className="list-disc pl-5">
          {/* {profileData.serviceProviders.length > 0 ? (
            profileData.serviceProviders.map((provider, index) => (
              <li key={index} className="text-gray-700">{provider}</li>
            ))
          ) : (
            <li className="text-gray-500">No service providers found</li> */}
          {/* )} */}
        </ul>
      </div>

      {/* Categories */}
      {/* <div className="mt-6">
        <h3 className="text-xl font-semibold">Categories</h3>
        <ul className="list-disc pl-5">
          {profileData.categories.length > 0 ? (
            profileData.categories.map((category, index) => (
              <li key={index} className="text-gray-700">{category}</li>
            ))
          ) : (
            <li className="text-gray-500">No categories selected</li>
          )}
        </ul> */}
      {/* </div> */}
    </div>
  );
}
