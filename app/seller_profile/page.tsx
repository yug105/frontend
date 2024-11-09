// app/sellerProfile/page.js
"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function SellerProfile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetching profile data from the backend API
  useEffect(() => {
    const fetchProfileData = async () => {
     
        const response = await fetch('/api/sellerProfile');
        const data = await response.json();

        if (response.ok) {
          setProfileData(data);
        } else {
          console.error('Failed to fetch profile data:', data.message);
        }
     
    };

    fetchProfileData();
  }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!profileData) {
//     return <div>Profile not found</div>;
//   }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Seller Profile</h1>

      {/* Profile Summary Row */}
      <div className="flex items-center space-x-6 mb-8">
        <img
        //   src={profileData.profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          {/* <h2 className="text-2xl font-semibold">{profileData.name}</h2>
          <p className="text-gray-600">Total Orders: {profileData.totalOrders}</p> */}
        </div>
      </div>

      {/* Resume Row */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Resume</h3>
        <img
        //   src={profileData.resumeImage}
          alt="Resume"
          className="w-full max-w-sm rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Bio */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Bio</h3>
        {/* <p className="text-gray-700">{profileData.bio}</p> */}
      </div>

      {/* Qualification */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Qualification</h3>
        {/* <p className="text-gray-700">{profileData.qualification}</p> */}
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc pl-5">
          {/* {profileData.skills.length > 0 ? (
            profileData.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">{skill}</li>
            ))
          ) : (
            <li className="text-gray-500">No skills provided</li>
          )} */}
        </ul>
      </div>

      {/* Residence */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Residence</h3>
        {/* <p className="text-gray-700">{profileData.residence}</p> */}
      </div>
      <div className="mb-8">
       <Link href="/upload_gig" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
        Upload a Gig
        </Link>
        </div>
    </div>
  );
}
