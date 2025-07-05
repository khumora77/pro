import { MapPin, Clock, Phone, Wifi, Car, CreditCard, Star, Users, Coffee } from 'lucide-react';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Downtown Brewhaus",
      address: "123 Coffee Street, Bean City, BC 12345",
      phone: "(555) 123-BREW",
      hours: {
        weekday: "6:00 AM - 8:00 PM",
        saturday: "7:00 AM - 9:00 PM",
        sunday: "7:00 AM - 7:00 PM"
      },
      features: ["Free WiFi", "Parking Available", "Drive-Through", "Card Payments"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 324,
      specialties: ["Signature Roasts", "Artisan Pastries", "Meeting Rooms"]
    },
    {
      id: 2,
      name: "University District",
      address: "456 Campus Avenue, Bean City, BC 12346",
      phone: "(555) 456-BREW",
      hours: {
        weekday: "5:30 AM - 10:00 PM",
        saturday: "6:00 AM - 10:00 PM",
        sunday: "6:00 AM - 9:00 PM"
      },
      features: ["Free WiFi", "Study Areas", "Late Hours", "Card Payments"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 256,
      specialties: ["Study-Friendly", "Group Tables", "Extended Hours"]
    },
    {
      id: 3,
      name: "Westside Mall",
      address: "789 Shopping Center Dr, Bean City, BC 12347",
      phone: "(555) 789-BREW",
      hours: {
        weekday: "8:00 AM - 8:00 PM",
        saturday: "8:00 AM - 9:00 PM",
        sunday: "9:00 AM - 7:00 PM"
      },
      features: ["Free WiFi", "Mall Parking", "Food Court", "Card Payments"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 189,
      specialties: ["Quick Service", "Grab & Go", "Family Friendly"]
    },
    {
      id: 4,
      name: "Airport Terminal",
      address: "Bean City International Airport, Terminal A",
      phone: "(555) AIR-BREW",
      hours: {
        weekday: "5:00 AM - 11:00 PM",
        saturday: "5:00 AM - 11:00 PM",
        sunday: "5:00 AM - 11:00 PM"
      },
      features: ["Free WiFi", "Quick Service", "Travel Sizes", "Card Payments"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      reviews: 412,
      specialties: ["Express Service", "Travel Mugs", "Pre-Flight Coffee"]
    },
    {
      id: 5,
      name: "Riverside Park",
      address: "321 Park Avenue, Bean City, BC 12348",
      phone: "(555) 321-BREW",
      hours: {
        weekday: "6:00 AM - 7:00 PM",
        saturday: "7:00 AM - 8:00 PM",
        sunday: "7:00 AM - 6:00 PM"
      },
      features: ["Free WiFi", "Outdoor Seating", "Pet Friendly", "Card Payments"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 298,
      specialties: ["Outdoor Seating", "Dog Treats", "Park Views"]
    },
    {
      id: 6,
      name: "Business District",
      address: "654 Corporate Blvd, Bean City, BC 12349",
      phone: "(555) 654-BREW",
      hours: {
        weekday: "6:00 AM - 6:00 PM",
        saturday: "8:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      features: ["Free WiFi", "Meeting Rooms", "Catering", "Card Payments"],
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 167,
      specialties: ["Business Meetings", "Catering Services", "Corporate Events"]
    }
  ];

  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case "Free WiFi":
        return <Wifi className="h-4 w-4" />;
      case "Parking Available":
      case "Mall Parking":
        return <Car className="h-4 w-4" />;
      case "Card Payments":
        return <CreditCard className="h-4 w-4" />;
      default:
        return <MapPin className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-[#1d4e1a] text-cream-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-cream-200">
            Find your nearest Brewhaus and experience exceptional coffee
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${location.image})` }}
                >
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-gold-500 fill-current" />
                    <span className="text-sm font-medium text-coffee-900">
                      {location.rating}
                    </span>
                    <span className="text-xs text-coffee-600">
                      ({location.reviews})
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-coffee-900 mb-3">
                    {location.name}
                  </h3>

                  {/* Address */}
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                    <p className="text-coffee-600">{location.address}</p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <p className="text-coffee-600">{location.phone}</p>
                  </div>

                  {/* Hours */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="h-5 w-5 text-gold-500 flex-shrink-0" />
                      <span className="font-semibold text-coffee-900">
                        Hours:
                      </span>
                    </div>
                    <div className="ml-8 space-y-1 text-coffee-600">
                      <div className="flex justify-between">
                        <span>Mon - Fri:</span>
                        <span>{location.hours.weekday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>{location.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>{location.hours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-coffee-900 mb-2 flex items-center">
                      <Coffee className="h-4 w-4 mr-2 text-gold-500" />
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-gold-100 text-gold-800 px-2 py-1 rounded text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-coffee-900 mb-2">
                      Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-coffee-600"
                        >
                          {getFeatureIcon(feature)}
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-[#1d4e1a] text-cream-50 py-3 rounded-lg hover:bg-coffee-800 transition-colors font-medium">
                      Get Directions
                    </button>
                    <button className="flex-1 border-2 border-[#1d4e1a] text-coffee-900 py-3 rounded-lg hover:bg-[#1d4e1a] hover:text-cream-50 transition-colors font-medium">
                      Call Store
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-900 mb-4">
              Why Our Locations Stand Out
            </h2>
            <p className="text-xl text-coffee-600">
              Each location is designed with you in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Community Focused",
                description:
                  "Each location reflects the unique character of its neighborhood",
              },
              {
                icon: Wifi,
                title: "Work-Friendly",
                description:
                  "Free high-speed WiFi and comfortable seating for remote work",
              },
              {
                icon: Coffee,
                title: "Consistent Quality",
                description:
                  "Same exceptional coffee and service at every location",
              },
              {
                icon: Clock,
                title: "Convenient Hours",
                description:
                  "Extended hours to fit your schedule, including early mornings",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-cream-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <feature.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
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

      {/* Coming Soon */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-coffee-800 mb-8">
            We're expanding! New locations opening in 2024
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Eastside Commons",
                date: "Spring 2024",
                features: ["Drive-Through", "Outdoor Seating", "Event Space"],
              },
              {
                name: "Northgate Shopping",
                date: "Summer 2024",
                features: ["Family Area", "Kids Menu", "Play Zone"],
              },
              {
                name: "Southpark District",
                date: "Fall 2024",
                features: ["Roastery Tours", "Coffee Classes", "Tasting Room"],
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-gold-600 font-medium mb-3">
                  Opening {location.date}
                </p>
                <div className="space-y-1">
                  {location.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-coffee-600"
                    >
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;