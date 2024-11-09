// components/GigCard.js
import Image from 'next/image';

export default function GigCard({ title, image, price, description }) {
  // Extract the first 5 words of the description
  const previewDescription = description.split(' ').slice(0, 5).join(' ');

  return (
    <div className="border rounded-lg shadow-md p-4 w-64">
      {/* Gig Image */}
      <div className="h-32 w-full mb-4">
        <Image 
          src={image} 
          alt={title} 
          width={256} 
          height={128} 
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      
      <h3 className="text-lg font-semibold mb-2">{title}</h3>

     
      <p className="text-gray-600 mb-2">{previewDescription}...</p>

    
      <p className="text-blue-500 font-bold text-xl">${price}</p>
    </div>
  );
}
