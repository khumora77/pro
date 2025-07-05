import React from "react";
import { Calendar, User, ArrowRight } from "lucide-react";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "New Seasonal Blend: Autumn Harvest",
      excerpt:
        "Experience the warm, comforting flavors of our new seasonal blend, featuring notes of cinnamon, nutmeg, and caramel.",
      date: "November 15, 2024",
      author: "Maria Rodriguez",
      category: "Product News",
      image:
        "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
    },
    {
      id: 2,
      title: "Brewhaus Wins 'Best Coffee Shop' Award",
      excerpt:
        "We're thrilled to announce that Brewhaus has been named 'Best Coffee Shop' by Bean City Magazine for the third consecutive year.",
      date: "November 10, 2024",
      author: "James Rodriguez",
      category: "Awards",
      image:
        "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Coffee: Our Journey to Carbon Neutral",
      excerpt:
        "Learn about our commitment to sustainability and the steps we're taking to become carbon neutral by 2025.",
      date: "November 5, 2024",
      author: "Sofia Chen",
      category: "Sustainability",
      image:
        "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
    },
    {
      id: 4,
      title: "Coffee Education Workshop Series",
      excerpt:
        "Join us for our monthly coffee education workshops where you'll learn about brewing techniques, bean origins, and tasting notes.",
      date: "October 28, 2024",
      author: "Sofia Chen",
      category: "Events",
      image:
        "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
    },
    {
      id: 5,
      title: "Partnership with Local Farmers",
      excerpt:
        "We're excited to announce our new partnership with local coffee farmers, ensuring fresher beans and supporting our community.",
      date: "October 20, 2024",
      author: "Maria Rodriguez",
      category: "Community",
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
    },
    {
      id: 6,
      title: "New Mobile App Launch",
      excerpt:
        "Order ahead, earn rewards, and never wait in line again with our new mobile app, now available for iOS and Android.",
      date: "October 15, 2024",
      author: "James Rodriguez",
      category: "Technology",
      image:
        "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
    },
  ];

  const featuredArticle = articles.find((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-coffee-900 text-cream-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Latest News</h1>
          <p className="text-xl text-cream-200">
            Stay up to date with the latest from Brewhaus
          </p>
        </div>
      </section>

      {featuredArticle && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div
                  className="h-64 lg:h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredArticle.image})` }}
                ></div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gold-500 text-coffee-900 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-coffee-600 text-sm">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-coffee-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-coffee-600 mb-6 text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-coffee-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{featuredArticle.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span className="text-sm">
                          {featuredArticle.author}
                        </span>
                      </div>
                    </div>
                    <button className="bg-coffee-900 text-cream-50 px-6 py-2 rounded-lg hover:bg-coffee-800 transition-colors flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${article.image})` }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-coffee-900 text-cream-50 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-coffee-900 mb-3 group-hover:text-coffee-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-coffee-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-coffee-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span className="text-xs">{article.author}</span>
                      </div>
                    </div>
                    <button className="text-coffee-900 hover:text-coffee-700 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-coffee-900 text-cream-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-cream-200 mb-8">
            Subscribe to our newsletter for the latest news, special offers, and
            coffee tips
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-coffee-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button className="bg-gold-500 hover:bg-gold-600 text-coffee-900 px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
