import { Coffee, Users, Heart, Award, Target, Globe, Recycle, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-[#1d4e1a] text-cream-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Brewhaus</h1>
          <p className="text-xl text-cream-200">
            More than just coffee - we're a community of coffee lovers
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold [#1d4e1a] mb-6">Our Story</h2>
              <p className="text-lg text-[#1d4e1a] mb-6">
                Founded in 2015 by coffee enthusiasts Maria and James Rodriguez,
                Brewhaus began as a small neighborhood coffee shop with a simple
                mission: to serve exceptional coffee while building genuine
                connections with our community.
              </p>
              <p className="text-lg text-coffee-600 mb-6">
                What started as a dream to create the perfect cup of coffee has
                grown into multiple locations across the city, each maintaining
                our commitment to quality, sustainability, and community.
              </p>
              <p className="text-lg text-coffee-600">
                Today, we're proud to source our beans directly from small
                farms, roast them fresh daily, and serve them with the same
                passion that started it all.
              </p>
            </div>
            <div className="relative">
              <div
                className="h-96 bg-cover bg-center rounded-xl shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=800')",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-coffee-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Coffee,
                title: "Quality First",
                description:
                  "We never compromise on the quality of our beans, roasting, or brewing techniques.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "We believe in building lasting relationships with our customers and neighborhood.",
              },
              {
                icon: Heart,
                title: "Sustainability",
                description:
                  "We're committed to ethical sourcing and environmental responsibility.",
              },
              {
                icon: Award,
                title: "Excellence",
                description:
                  "We strive for perfection in every cup and every interaction.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-cream-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <value.icon className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-coffee-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-coffee-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-gold-500 mr-4" />
                <h3 className="text-3xl font-bold text-coffee-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-coffee-600 mb-4">
                To create exceptional coffee experiences that bring people
                together, support sustainable farming practices, and contribute
                positively to our communities.
              </p>
              <ul className="space-y-2 text-coffee-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Serve the highest quality coffee
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Foster community connections
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Support sustainable practices
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-12 w-12 text-gold-500 mr-4" />
                <h3 className="text-3xl font-bold text-coffee-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-coffee-600 mb-4">
                To be the leading coffee company that sets the standard for
                quality, sustainability, and community engagement while
                expanding our positive impact globally.
              </p>
              <ul className="space-y-2 text-coffee-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Expand to 50 locations by 2030
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Achieve carbon neutrality
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Support 1000+ coffee farmers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-900 mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="text-xl text-coffee-600">
              Making a positive impact on the planet and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Recycle,
                title: "Environmental Impact",
                description:
                  "We're committed to reducing our carbon footprint through renewable energy, waste reduction, and sustainable packaging.",
                initiatives: [
                  "100% renewable energy",
                  "Compostable cups",
                  "Zero waste goal by 2025",
                ],
              },
              {
                icon: Heart,
                title: "Fair Trade Practices",
                description:
                  "We work directly with coffee farmers to ensure fair wages and sustainable farming practices.",
                initiatives: [
                  "Direct trade partnerships",
                  "Fair wage guarantee",
                  "Farmer education programs",
                ],
              },
              {
                icon: Shield,
                title: "Community Support",
                description:
                  "We invest in the communities where our coffee is grown and where our customers live.",
                initiatives: [
                  "Local charity partnerships",
                  "Community events",
                  "Educational workshops",
                ],
              },
            ].map((commitment, index) => (
              <div
                key={index}
                className="bg-cream-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <commitment.icon className="h-12 w-12 text-gold-500 mb-4" />
                <h3 className="text-xl font-semibold text-coffee-900 mb-3">
                  {commitment.title}
                </h3>
                <p className="text-coffee-600 mb-4">{commitment.description}</p>
                <ul className="space-y-2">
                  {commitment.initiatives.map((initiative, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-coffee-500"
                    >
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                      {initiative}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-coffee-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-coffee-600">
              The passionate people behind your perfect cup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rodriguez",
                role: "Co-Founder & Head Roaster",
                image:
                  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
                description:
                  "Maria's passion for coffee started during her travels through South America. She brings 15 years of roasting expertise to every batch.",
                expertise: ["Coffee Roasting", "Quality Control", "Sourcing"],
              },
              {
                name: "James Rodriguez",
                role: "Co-Founder & Operations Manager",
                image:
                  "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
                description:
                  "James ensures that every Brewhaus location maintains our high standards while fostering a welcoming community atmosphere.",
                expertise: [
                  "Operations",
                  "Community Building",
                  "Business Strategy",
                ],
              },
              {
                name: "Sofia Chen",
                role: "Head Barista & Training Manager",
                image:
                  "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
                description:
                  "Sofia is our coffee education expert, training our team and hosting workshops for coffee enthusiasts.",
                expertise: [
                  "Barista Training",
                  "Coffee Education",
                  "Customer Experience",
                ],
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-coffee-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-coffee-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-cream-50 text-coffee-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1d4e1a] text-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Happy Customers", icon: Users },
              { number: "12", label: "Coffee Origins", icon: Globe },
              { number: "5", label: "Locations", icon: Coffee },
              { number: "9", label: "Years of Excellence", icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-coffee-800 rounded-xl p-6 hover:bg-coffee-700 transition-colors"
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
    </div>
  );
};

export default About;