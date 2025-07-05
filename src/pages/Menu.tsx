import React, { useState } from 'react';
import { Coffee, Milk, Sandwich, Cookie, Star, Clock, Flame, Leaf } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: Coffee },
    { id: 'beverages', name: 'Beverages', icon: Milk },
    { id: 'food', name: 'Food', icon: Sandwich },
    { id: 'pastries', name: 'Pastries', icon: Cookie },
  ];

  const menuItems = {
    coffee: [
      { 
        name: 'Signature Dark Roast', 
        description: 'Rich, bold flavor with notes of chocolate and caramel', 
        price: '$3.50',
        rating: 4.9,
        popular: true,
        intensity: 'Strong',
        origin: 'Colombia'
      },
      { 
        name: 'Morning Glory Medium', 
        description: 'Smooth medium roast with bright acidity', 
        price: '$3.25',
        rating: 4.7,
        popular: false,
        intensity: 'Medium',
        origin: 'Guatemala'
      },
      { 
        name: 'Smooth Operator Light', 
        description: 'Light roast with floral and citrus notes', 
        price: '$3.00',
        rating: 4.6,
        popular: false,
        intensity: 'Light',
        origin: 'Ethiopia'
      },
      { 
        name: 'Decaf Dreamer', 
        description: 'Full-bodied decaf with rich flavor', 
        price: '$3.25',
        rating: 4.5,
        popular: false,
        intensity: 'Medium',
        origin: 'Brazil'
      },
      { 
        name: 'Espresso', 
        description: 'Classic Italian espresso shot', 
        price: '$2.50',
        rating: 4.8,
        popular: true,
        intensity: 'Strong',
        origin: 'Italy Blend'
      },
      { 
        name: 'Americano', 
        description: 'Espresso with hot water', 
        price: '$3.00',
        rating: 4.6,
        popular: false,
        intensity: 'Medium',
        origin: 'House Blend'
      },
      { 
        name: 'Cold Brew', 
        description: 'Smooth cold-brewed coffee', 
        price: '$3.75',
        rating: 4.8,
        popular: true,
        intensity: 'Medium',
        origin: 'Nicaragua'
      },
      { 
        name: 'Nitro Cold Brew', 
        description: 'Cold brew infused with nitrogen', 
        price: '$4.25',
        rating: 4.9,
        popular: true,
        intensity: 'Strong',
        origin: 'Costa Rica'
      },
    ],
    beverages: [
      { 
        name: 'Caramel Macchiato', 
        description: 'Espresso with vanilla syrup, steamed milk, and caramel drizzle', 
        price: '$4.50',
        rating: 4.8,
        popular: true,
        calories: 250,
        caffeine: 'High'
      },
      { 
        name: 'Vanilla Latte', 
        description: 'Smooth espresso with steamed milk and vanilla syrup', 
        price: '$4.25',
        rating: 4.7,
        popular: true,
        calories: 190,
        caffeine: 'Medium'
      },
      { 
        name: 'Mocha Supreme', 
        description: 'Espresso with chocolate syrup and steamed milk', 
        price: '$4.75',
        rating: 4.6,
        popular: false,
        calories: 300,
        caffeine: 'High'
      },
      { 
        name: 'Cappuccino', 
        description: 'Espresso with steamed milk and foam', 
        price: '$4.00',
        rating: 4.8,
        popular: false,
        calories: 120,
        caffeine: 'Medium'
      },
      { 
        name: 'Flat White', 
        description: 'Double shot espresso with microfoam milk', 
        price: '$4.50',
        rating: 4.7,
        popular: false,
        calories: 170,
        caffeine: 'High'
      },
      { 
        name: 'Chai Tea Latte', 
        description: 'Spiced chai with steamed milk', 
        price: '$4.25',
        rating: 4.5,
        popular: false,
        calories: 200,
        caffeine: 'Low'
      },
      { 
        name: 'Matcha Latte', 
        description: 'Premium matcha with steamed milk', 
        price: '$4.75',
        rating: 4.6,
        popular: false,
        calories: 180,
        caffeine: 'Medium'
      },
      { 
        name: 'Hot Chocolate', 
        description: 'Rich chocolate with steamed milk and whipped cream', 
        price: '$3.75',
        rating: 4.4,
        popular: false,
        calories: 320,
        caffeine: 'None'
      },
    ],
    food: [
      { 
        name: 'Avocado Toast', 
        description: 'Multigrain bread with smashed avocado, cherry tomatoes, and feta', 
        price: '$8.50',
        rating: 4.7,
        popular: true,
        calories: 350,
        dietary: 'Vegetarian'
      },
      { 
        name: 'Breakfast Burrito', 
        description: 'Scrambled eggs, cheese, bacon, and salsa in a flour tortilla', 
        price: '$7.95',
        rating: 4.6,
        popular: false,
        calories: 520,
        dietary: 'Protein Rich'
      },
      { 
        name: 'Grilled Panini', 
        description: 'Turkey, swiss cheese, and pesto on ciabatta bread', 
        price: '$9.25',
        rating: 4.5,
        popular: false,
        calories: 480,
        dietary: 'High Protein'
      },
      { 
        name: 'Quinoa Bowl', 
        description: 'Quinoa with roasted vegetables, chickpeas, and tahini dressing', 
        price: '$10.50',
        rating: 4.8,
        popular: true,
        calories: 420,
        dietary: 'Vegan'
      },
      { 
        name: 'Bagel & Cream Cheese', 
        description: 'Fresh bagel with cream cheese and your choice of toppings', 
        price: '$5.25',
        rating: 4.3,
        popular: false,
        calories: 280,
        dietary: 'Vegetarian'
      },
      { 
        name: 'Acai Bowl', 
        description: 'Acai smoothie topped with granola, berries, and coconut', 
        price: '$9.75',
        rating: 4.7,
        popular: true,
        calories: 380,
        dietary: 'Superfood'
      },
    ],
    pastries: [
      { 
        name: 'Croissant', 
        description: 'Buttery, flaky French pastry', 
        price: '$3.25',
        rating: 4.6,
        popular: false,
        calories: 230,
        freshness: 'Baked Daily'
      },
      { 
        name: 'Chocolate Muffin', 
        description: 'Rich chocolate muffin with chocolate chips', 
        price: '$3.75',
        rating: 4.5,
        popular: true,
        calories: 320,
        freshness: 'Baked Daily'
      },
      { 
        name: 'Blueberry Scone', 
        description: 'Fresh blueberry scone with lemon glaze', 
        price: '$4.00',
        rating: 4.7,
        popular: false,
        calories: 280,
        freshness: 'Baked Daily'
      },
      { 
        name: 'Cinnamon Roll', 
        description: 'Warm cinnamon roll with cream cheese frosting', 
        price: '$4.50',
        rating: 4.8,
        popular: true,
        calories: 420,
        freshness: 'Baked Fresh'
      },
      { 
        name: 'Danish Pastry', 
        description: 'Flaky pastry with fruit filling', 
        price: '$3.95',
        rating: 4.4,
        popular: false,
        calories: 290,
        freshness: 'Baked Daily'
      },
      { 
        name: 'Cheesecake Slice', 
        description: 'Creamy New York style cheesecake', 
        price: '$5.50',
        rating: 4.9,
        popular: true,
        calories: 380,
        freshness: 'Made Fresh'
      },
    ],
  };

  const getIntensityIcon = (intensity: string) => {
    switch (intensity) {
      case 'Light': return <div className="flex"><Flame className="h-3 w-3 text-gold-500" /></div>;
      case 'Medium': return <div className="flex"><Flame className="h-3 w-3 text-gold-500" /><Flame className="h-3 w-3 text-gold-500" /></div>;
      case 'Strong': return <div className="flex"><Flame className="h-3 w-3 text-gold-500" /><Flame className="h-3 w-3 text-gold-500" /><Flame className="h-3 w-3 text-gold-500" /></div>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-coffee-900 text-cream-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-cream-200">
            Discover our carefully crafted selection of coffee, beverages, and fresh food
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-coffee-900 text-cream-50 shadow-lg'
                    : 'bg-white text-coffee-900 hover:bg-coffee-100'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-xl font-semibold text-coffee-900">{item.name}</h3>
                      {item.popular && (
                        <span className="bg-gold-500 text-coffee-900 px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(item.rating) ? 'text-gold-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-coffee-600 ml-1">({item.rating})</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gold-600">{item.price}</span>
                </div>
                
                <p className="text-coffee-600 mb-4">{item.description}</p>
                
                {/* Additional Info */}
                <div className="space-y-2 mb-4">
                  {activeCategory === 'coffee' && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-coffee-500">Intensity:</span>
                        {getIntensityIcon((item as any).intensity)}
                      </div>
                      <div className="flex items-center space-x-1">
                        <Leaf className="h-3 w-3 text-green-500" />
                        <span className="text-coffee-500">{(item as any).origin}</span>
                      </div>
                    </div>
                  )}
                  
                  {(activeCategory === 'beverages' || activeCategory === 'food' || activeCategory === 'pastries') && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3 text-coffee-500" />
                        <span className="text-coffee-500">{(item as any).calories || (item as any).freshness} cal</span>
                      </div>
                      {(item as any).dietary && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {(item as any).dietary}
                        </span>
                      )}
                      {(item as any).caffeine && (
                        <span className="text-coffee-500 text-xs">
                          Caffeine: {(item as any).caffeine}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <button className="w-full bg-coffee-900 text-cream-50 py-2 rounded-lg hover:bg-coffee-800 transition-colors font-medium">
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">Special Offers</h2>
          <p className="text-xl text-coffee-800 mb-8">
            Don't miss out on our limited-time deals and seasonal specials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-coffee-900 text-cream-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-2">Happy Hour</h3>
              <p className="text-coffee-600 mb-4">50% off all specialty beverages 3-5 PM daily</p>
              <span className="text-gold-600 font-bold">Valid until 5 PM</span>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-coffee-900 text-cream-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-2">Loyalty Program</h3>
              <p className="text-coffee-600 mb-4">Buy 9 coffees, get the 10th free</p>
              <span className="text-gold-600 font-bold">Join today!</span>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-coffee-900 text-cream-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-900 mb-2">Weekend Special</h3>
              <p className="text-coffee-600 mb-4">Free pastry with any large coffee on weekends</p>
              <span className="text-gold-600 font-bold">Sat & Sun only</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;