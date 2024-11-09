
import GigCard from "@/components/gigcard";

async function GigsPage() {
  try {
    const response = await fetch('https://api.vercel.app/gigs', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch gigs');
    }

    const gigs = await response.json();

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {gigs.map((gig) => (
          <GigCard
            key={gig.id}
            title={gig.title}
            image={gig.image}
            price={gig.price}
            description={gig.description}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching gigs:', error);
    return <p>Failed to load gigs. Please try again later.</p>;
  }
}
