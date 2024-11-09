'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = [
  { id: 'webdev', label: 'Web Development' },
  { id: 'appdev', label: 'App Development' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'dataScience', label: 'Data Science' },
  { id: 'cloudComputing', label: 'Cloud Computing' },
  { id: 'cybersecurity', label: 'Cybersecurity' },
];

export default function UploadGig() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    categories: [],
    workExperience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        categories: checked 
          ? [...prev.categories, name]
          : prev.categories.filter(cat => cat !== name)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    router.push('/seller_profile');

    
      const response = await fetch('/api/gigs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // router.push('/seller_profile');
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    // } catch (error) {
    //   console.error('Error uploading gig:', error);
    //   alert('Failed to upload gig. Please try again.');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Upload a New Gig</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Gig Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Categories */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categories
          </label>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={category.id}
                  name={category.id}
                  checked={formData.categories.includes(category.id)}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700 mb-2">
            Work Experience
          </label>
          <textarea
            id="workExperience"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            required
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Uploading...' : 'Upload Gig'}
          </button>
        </div>
      </form>
    </div>
  );
}