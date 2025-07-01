"use client";
import React, { useState } from 'react';
import { Star, X } from 'lucide-react';

const mealPlans = [
  {
    name: 'Diet Plan',
    price: 30000,
    description: 'Perfect for those looking to manage their weight with balanced, low-calorie meals.',
    details: 'This plan focuses on portion control and nutrient-dense ingredients to help you achieve your dietary goals without sacrificing flavor. Includes a variety of lean proteins, fresh vegetables, and whole grains.',
    image: 'https://placehold.co/600x400/a7f3d0/1f2937?text=Diet+Plan'
  },
  {
    name: 'Protein Plan',
    price: 40000,
    description: 'Ideal for fitness enthusiasts aiming to build muscle and improve recovery.',
    details: 'Packed with high-quality protein sources like chicken breast, salmon, and tofu, this plan supports muscle synthesis and repair. Each meal is complemented with complex carbohydrates and essential fats for sustained energy.',
    image: 'https://placehold.co/600x400/fde68a/1f2937?text=Protein+Plan'
  },
  {
    name: 'Royal Plan',
    price: 60000,
    description: 'A premium selection of gourmet healthy meals for the ultimate dining experience.',
    details: 'Indulge in our finest creations, featuring premium ingredients like wagyu beef, scallops, and organic produce. This plan offers a luxurious and healthy way to dine, with meticulously crafted recipes by our top chefs.',
    image: 'https://placehold.co/600x400/d8b4fe/1f2937?text=Royal+Plan'
  }
];

const initialTestimonials = [
  { name: 'Aisha', rating: 5, review: 'The Royal Plan is absolutely divine! So convenient and delicious. It makes eating healthy feel like a treat.' },
  { name: 'Budi', rating: 5, review: 'As someone who hits the gym regularly, the Protein Plan has been a game-changer for my fitness goals. Highly recommended!' },
  { name: 'Citra', rating: 4, review: 'I love the variety in the Diet Plan. The meals are tasty and I\'ve seen great results. The delivery is always on time.' }
];

type HeaderProps = {
  activePage: string;
  setActivePage: (page: string) => void;
};

const Header = ({ activePage, setActivePage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ['Home', 'Menu / Meal Plans', 'Subscription', 'Contact Us'];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-emerald-600">SEA Catering</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setActivePage(link)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activePage === link
                      ? 'bg-emerald-600 text-white'
                      : 'text-gray-700 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActivePage(link);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activePage === link
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 hover:bg-emerald-500 hover:text-white'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const HomePage = () => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="bg-emerald-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-emerald-800">SEA Catering</h2>
        <p className="mt-4 text-xl text-gray-600 font-light">&quot;Healthy Meals, Anytime, Anywhere&quot;</p>
        <p className="mt-6 max-w-2xl mx-auto text-gray-700">
          Welcome to SEA Catering! We provide delicious, customizable, and healthy meal plans delivered straight to your doorstep, anywhere in Indonesia. Our mission is to make healthy eating convenient and accessible for everyone.
        </p>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-emerald-700">Meal Customization</h4>
            <p className="mt-2 text-gray-600">Tailor your meals to fit your dietary needs and preferences. Vegan, gluten-free, or high-protein - we&apos;ve got you covered.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-emerald-700">Nationwide Delivery</h4>
            <p className="mt-2 text-gray-600">We deliver to all major cities across Indonesia, ensuring you get fresh meals no matter where you are.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-emerald-700">Detailed Nutrition Info</h4>
            <p className="mt-2 text-gray-600">Every meal comes with a complete breakdown of its nutritional content, helping you stay on track with your health goals.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

type MealPlansPageProps = {
  setSelectedPlan: (plan: typeof mealPlans[0] | null) => void;
};

const MealPlansPage = ({ setSelectedPlan }: MealPlansPageProps) => (
  <div className="container min-h-screen mx-auto px-4 py-16 animate-fade-in">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Our Meal Plans</h2>
    <p className="text-center text-gray-600 mb-12">Explore our curated plans designed for your lifestyle.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {mealPlans.map((plan) => (
        <div key={plan.name} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <img className="w-full h-48 object-cover" src={plan.image} alt={plan.name} />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-emerald-700">{plan.name}</h3>
            <p className="mt-2 text-gray-600 flex-grow">{plan.description}</p>
            <p className="mt-4 text-3xl font-black text-gray-800">
              Rp{plan.price.toLocaleString('id-ID')}
              <span className="text-base font-normal text-gray-500"> / meal</span>
            </p>
            <button
              onClick={() => setSelectedPlan(plan)}
              className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
            >
              See More Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SubscriptionPage = () => (
    <div className="container min-h-screen mx-auto px-4 py-16 animate-fade-in">
        <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Subscription</h2>
            <p className="text-lg text-gray-600">This page is under construction. Come back soon to subscribe to our meal plans!</p>
        </div>
    </div>
);


const ContactUsPage = () => (
  <div className="container min-h-screen mx-auto px-4 py-16 animate-fade-in">
    <div className="bg-white p-10 rounded-xl shadow-lg max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-lg text-gray-600 mb-8">We&apos;d love to hear from you! Reach out with any questions.</p>
      <div className="text-left inline-block">
          <p className="text-xl text-gray-700 mb-2"><span className="font-semibold">Manager:</span> Brian</p>
          <p className="text-xl text-gray-700"><span className="font-semibold">Phone Number:</span> 08123456789</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [newTestimonial, setNewTestimonial] = useState({ name: '', review: '', rating: 5 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleRatingChange = (rating: number) => {
    setNewTestimonial({ ...newTestimonial, rating });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.review) {
      setTestimonials([newTestimonial, ...testimonials]);
      setNewTestimonial({ name: '', review: '', rating: 5 });
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <section className="bg-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h3>
        
        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg relative">
            <div className="text-center text-gray-600 italic text-lg mb-4 h-24 overflow-y-auto">
                &quot;{testimonials[currentIndex].review}&quot;
            </div>
            <div className="text-center">
                <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-6 h-6 ${i < testimonials[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                    ))}
                </div>
                <p className="font-bold text-emerald-700 text-xl">{testimonials[currentIndex].name}</p>
            </div>
            <button onClick={prevTestimonial} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors -ml-6">
                &lt;
            </button>
            <button onClick={nextTestimonial} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors -mr-6">
                &gt;
            </button>
        </div>

        {/* Testimonial Form */}
        <div className="max-w-3xl mx-auto mt-16">
            <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">Share Your Experience</h4>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-4">
                <input
                    type="text"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    required
                />
                <textarea
                    name="review"
                    value={newTestimonial.review}
                    onChange={handleInputChange}
                    placeholder="Your Review"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    required
                ></textarea>
                <div className="flex items-center justify-between">
                    <span className="text-gray-700">Your Rating:</span>
                    <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <button type="button" key={i} onClick={() => handleRatingChange(i + 1)}>
                                <Star className={`w-8 h-8 cursor-pointer ${i < newTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                            </button>
                        ))}
                    </div>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300">
                    Submit Testimonial
                </button>
            </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} SEA Catering. All Rights Reserved.</p>
            <p className="text-sm text-gray-400 mt-2">Brilliance Through Adaption</p>
        </div>
    </footer>
);

type ModalProps = {
  plan: typeof mealPlans[0] | null;
  onClose: () => void;
};

const Modal = ({ plan, onClose }: ModalProps) => {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in-fast">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full relative transform transition-all duration-300 scale-95 hover:scale-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
          <X size={28} />
        </button>
        <img className="w-full h-64 object-cover rounded-t-xl" src={plan.image} alt={plan.name} />
        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-emerald-700">{plan.name}</h2>
          <p className="mt-4 text-4xl font-bold text-gray-800">
            Rp{plan.price.toLocaleString('id-ID')}
            <span className="text-lg font-normal text-gray-500"> / meal</span>
          </p>
          <p className="mt-6 text-gray-700 text-lg">{plan.details}</p>
          <button
            onClick={onClose}
            className="mt-8 w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [selectedPlan, setSelectedPlan] = useState<typeof mealPlans[0] | null>(null);

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <>
            <HomePage />
            <TestimonialsSection />
        </>;
      case 'Menu / Meal Plans':
        return <MealPlansPage setSelectedPlan={setSelectedPlan} />;
      case 'Subscription':
        return <SubscriptionPage />;
      case 'Contact Us':
        return <ContactUsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <Modal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
    </div>
  );
}
