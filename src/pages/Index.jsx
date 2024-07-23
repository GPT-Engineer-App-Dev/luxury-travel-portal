import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Anchor, Mountain, PalmTree } from 'lucide-react';

const LuxuryTravelLanding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="py-8 px-4 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 text-center">Exquisite Escapes</h1>
        <p className="text-xl md:text-2xl text-blue-700 text-center mt-4">Curated Luxury Travel Experiences for the Discerning Explorer</p>
      </header>

      <main className="px-4 md:px-12 lg:px-24 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Signature Journeys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Private Jet Expeditions", icon: <Plane className="h-12 w-12 text-blue-500" />, description: "Circumnavigate the globe in ultimate comfort" },
              { title: "Superyacht Sojourns", icon: <Anchor className="h-12 w-12 text-blue-500" />, description: "Explore secluded coves and exclusive ports" },
              { title: "Alpine Adventures", icon: <Mountain className="h-12 w-12 text-blue-500" />, description: "Conquer peaks with world-class mountaineers" },
              { title: "Island Retreats", icon: <PalmTree className="h-12 w-12 text-blue-500" />, description: "Unwind on your own private paradise" },
            ].map((journey, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center">{journey.icon}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-center mb-2">{journey.title}</h3>
                  <CardDescription className="text-center">{journey.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-blue-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">Experience Unparalleled Luxury</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center mb-6">
                From personalized itineraries to exclusive access, we cater to your every desire.
                Our team of expert concierges ensures that every moment of your journey is nothing short of extraordinary.
              </p>
              <div className="flex justify-center">
                <Button className="bg-white text-blue-800 hover:bg-blue-100">Request a Bespoke Itinerary</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Elizabeth R.", quote: "An unforgettable journey that exceeded all expectations. True luxury in every detail." },
              { name: "Jonathan T.", quote: "The private jet experience was simply magnificent. I've never felt so pampered while exploring the world." },
              { name: "Sophia L.", quote: "From the Maldives to the Swiss Alps, every destination was a dream come true. Impeccable service throughout." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-right">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8 px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2023 Exquisite Escapes. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="link" className="text-white hover:text-blue-200">About Us</Button>
            <Button variant="link" className="text-white hover:text-blue-200">Contact</Button>
            <Button variant="link" className="text-white hover:text-blue-200">Privacy Policy</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuryTravelLanding;