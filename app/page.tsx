import Image from "next/image";
import Link from "next/link";
import GigCard from "@/components/gigcard";

// async function GigsPage() {
//   try {
//     const response = await fetch('https://api.vercel.app/gigs', {
//       cache: 'no-store',
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch gigs');
//     }
//     const gigs = await response.json();
//     return gigs;
//   }
// }
// async function fetchUserData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/user`, {
//     cache: 'no-store', 
//   });

//   if (!res.ok) {
//     throw new Error('Failed to fetch user data');
//   }

//   const data = await res.json();
//   return data;
// }




export default async function Home() {
    
   // const {image,orders} = await fetchUserData();
   // const gigs = await GigsPage();

  return (
    
           <>
              


  
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto cursor-pointer" />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right Side - Orders and Profile */}
      <div className="flex items-center space-x-4">
        {/* Orders Button */}
        <Link href="/orders">
          <div className="flex items-center relative cursor-pointer">
            
            <span className="material-icons">orderes</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5">
              5{/* Example Order Count */}
            </span>
           
          </div>
        </Link>
        <Link href="/become-seller">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Become a Seller
          </button>
        </Link>

        {/* Profile Button */}
        <Link href="/profile">
          <button className="flex items-center px-3 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300">
            
            <img src="profile.png" alt="profile"/>
          </button>
        </Link>
      </div>
    </header>

    {/* Main Content */}
     <div>
     
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {gigs.map((gig) => (
          <GigCard
            key={gig.id}
            title={gig.title}
            image={gig.image}
            price={gig.price}
            description={gig.description}
          />
        ))}
      </div> */}

     </div>
    
           </>
  );
}
