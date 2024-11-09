// app/become-seller/page.js
"use client"
// app/become-seller/page.js

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function BecomeSellerPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    resumeUrl: '',
    bio: '',
    qualification: '',
    skills: [], // Array to store selected skills
    residence: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      // Add or remove the skill from the skills array
      setFormData((prev) => {
        const updatedSkills = checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value);
        return { ...prev, skills: updatedSkills };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/seller_profile')
    const data = {
      resumeUrl: formData.resumeUrl,
      bio: formData.bio,
      qualification: formData.qualification,
      skills: formData.skills,
      residence: formData.residence,
    };

    try {
      const response = await fetch('/api/submit-seller-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // router.push('/seller_profile')
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Become a Seller</h1>
      <p className="mb-6">Fill in the details below to apply to become a seller.</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Resume URL */}
        <div>
          <label htmlFor="resumeUrl" className="block text-gray-700">Resume Image URL</label>
          <input
            type="url"
            name="resumeUrl"
            value={formData.resumeUrl}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Paste the image URL of your resume"
            
          />
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Tell us about yourself..."
            required
          />
        </div>

        {/* Qualification */}
        <div>
          <label htmlFor="qualification" className="block text-gray-700">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Your highest qualification"
            required
          />
        </div>

        {/* Skills Selection (Multiple Checkboxes) */}
        <div>
          <label className="block text-gray-700">Skills (Choose up to 5)</label>
          <div className="space-y-2">
            <div>
              <input
                type="checkbox"
                id="web-dev"
                name="skills"
                value="web-dev"
                checked={formData.skills.includes('web-dev')}
                onChange={handleChange}
              />
              <label htmlFor="web-dev" className="ml-2">Web Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="app-dev"
                name="skills"
                value="app-dev"
                checked={formData.skills.includes('app-dev')}
                onChange={handleChange}
              />
              <label htmlFor="app-dev" className="ml-2">App Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="graphic-design"
                name="skills"
                value="graphic-design"
                checked={formData.skills.includes('graphic-design')}
                onChange={handleChange}
              />
              <label htmlFor="graphic-design" className="ml-2">Graphic Design</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="seo"
                name="skills"
                value="seo"
                checked={formData.skills.includes('seo')}
                onChange={handleChange}
              />
              <label htmlFor="seo" className="ml-2">SEO</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="digital-marketing"
                name="skills"
                value="digital-marketing"
                checked={formData.skills.includes('digital-marketing')}
                onChange={handleChange}
              />
              <label htmlFor="digital-marketing" className="ml-2">Digital Marketing</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="content-writing"
                name="skills"
                value="content-writing"
                checked={formData.skills.includes('content-writing')}
                onChange={handleChange}
              />
              <label htmlFor="content-writing" className="ml-2">Content Writing</label>
            </div>
          </div>
        </div>

        {/* Residence */}
        <div>
          <label htmlFor="residence" className="block text-gray-700">Residence</label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Where do you live?"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
