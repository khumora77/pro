import React from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  Award,
  Users,
  Leaf,
  ArrowRight,
  Star,
  Clock,
  Heart,
  Shield,
} from "lucide-react";
import Hero from "../components/hero/HeroSection";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-coffee-900 to-coffee-800">
          <div className="absolute inset-0 bg-black/30"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')",
            }}
          ></div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Crafted with
              <span className="text-gold-400 block">Passion</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream-100 max-w-2xl mx-auto">
              Experience the perfect blend of exceptional coffee, warm
              atmosphere, and community connection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="bg-gold-500 hover:bg-gold-600 text-coffee-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Coffee className="h-5 w-5" />
                <span>Explore Menu</span>
              </Link>
              <Link
                to="/locations"
                className="border-2 border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-coffee-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Find Location</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coffee-900 mb-4">
                Why Choose Brewhaus?
              </h2>
              <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
                We're more than just a coffee shop - we're your daily dose of
                excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Premium Quality",
                  description: "Sourced from the finest coffee farms worldwide",
                },
                {
                  icon: Users,
                  title: "Community Focus",
                  description: "Building connections one cup at a time",
                },
                {
                  icon: Leaf,
                  title: "Sustainable",
                  description:
                    "Ethically sourced and environmentally conscious",
                },
                {
                  icon: Coffee,
                  title: "Expert Roasting",
                  description: "Roasted fresh daily in our local roastery",
                },
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <feature.icon className="h-12 w-12 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-coffee-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coffee-900 mb-4">
                Featured Favorites
              </h2>
              <p className="text-xl text-coffee-600">
                Discover our most popular coffee selections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Signature Dark Roast",
                  description:
                    "Rich, bold flavor with notes of chocolate and caramel",
                  price: "$3.50",
                  rating: 4.9,
                  image:
                    "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800",
                  badge: "Best Seller",
                },
                {
                  name: "Vanilla Latte",
                  description:
                    "Smooth espresso with steamed milk and vanilla syrup",
                  price: "$4.25",
                  rating: 4.8,
                  image:
                    "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800",
                  badge: "Popular",
                },
                {
                  name: "Caramel Macchiato",
                  description:
                    "Espresso with vanilla syrup, steamed milk, and caramel drizzle",
                  price: "$4.50",
                  rating: 4.7,
                  image:
                    "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800",
                  badge: "New",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative">
                    <div
                      className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${product.image})` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-coffee-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-gold-500 fill-current" />
                      <span className="text-sm font-medium text-coffee-900">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-coffee-600 mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-gold-600">
                        {product.price}
                      </span>
                      <button className="bg-[#1d4e1a] text-cream-50 px-4 py-2 rounded-lg opacity-95 transition-colors">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coffee-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-coffee-600">
                Everything you need for the perfect coffee experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Coffee,
                  title: "Coffee Catering",
                  description:
                    "Professional coffee service for your events and meetings",
                  features: [
                    "Mobile coffee bar",
                    "Professional baristas",
                    "Custom menu options",
                  ],
                },
                {
                  icon: Clock,
                  title: "Express Service",
                  description: "Quick service for busy professionals on the go",
                  features: [
                    "Mobile ordering",
                    "Curbside pickup",
                    "Express lane",
                  ],
                },
                {
                  icon: Heart,
                  title: "Coffee Subscriptions",
                  description: "Fresh coffee delivered to your door monthly",
                  features: [
                    "Freshly roasted beans",
                    "Flexible delivery",
                    "Exclusive blends",
                  ],
                },
                {
                  icon: Shield,
                  title: "Quality Guarantee",
                  description: "100% satisfaction guaranteed on every cup",
                  features: [
                    "Fresh guarantee",
                    "Quality control",
                    "Customer support",
                  ],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <service.icon className="h-12 w-12 text-gold-500 mb-4" />
                  <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-coffee-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-coffee-500"
                      >
                        <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-coffee-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-coffee-600">
                Real reviews from real coffee lovers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Regular Customer",
                  review:
                    "The best coffee in the city! The atmosphere is perfect for working, and the staff always remembers my order.",
                  rating: 5,
                  image:
                    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                },
                {
                  name: "Mike Chen",
                  role: "Coffee Enthusiast",
                  review:
                    "Brewhaus has ruined all other coffee shops for me. Their single-origin beans are exceptional!",
                  rating: 5,
                  image:
                    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Local Business Owner",
                  review:
                    "Their catering service made our company event a huge success. Professional and delicious!",
                  rating: 5,
                  image:
                    "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-cream-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-gold-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-coffee-600 mb-6 italic">
                    "{review.review}"
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-12 h-12 bg-cover bg-center rounded-full mr-4"
                      style={{ backgroundImage: `url(${review.image})` }}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-coffee-900">
                        {review.name}
                      </h4>
                      <p className="text-coffee-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Cards */}
        <section className="py-20 bg-[#1d4e1a] text-cream-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
              <p className="text-xl text-cream-200">
                Numbers that tell our story
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "50,000+", label: "Happy Customers", icon: Users },
                { number: "1M+", label: "Cups Served", icon: Coffee },
                { number: "12", label: "Coffee Origins", icon: Leaf },
                { number: "5", label: "Locations", icon: Award },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-[#1d4e2a] rounded-xl p-6 opacity-95  transition-colors"
                >
                  <stat.icon className="h-12 w-12 text-gold-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gold-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cream-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gold-500 to-gold-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-coffee-900 mb-4">
              Ready for Your Perfect Cup?
            </h2>
            <p className="text-xl mb-8 text-coffee-800">
              Visit us today and discover why Brewhaus is the city's favorite
              coffee destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/locations"
                className="bg-[#1d4e1a]  text-cream-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Find Your Location
              </Link>
              <Link
                to="/menu"
                className="border-2 border-coffee-900 text-coffee-900  px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Hero />
    </>
  );
};

export default Home;
