import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="bg-[#1d4e1a] text-cream-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-cream-200">
            We'd love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-coffee-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">
                      Our Headquarters
                    </h3>
                    <p className="text-coffee-600">
                      123 Coffee Street
                      <br />
                      Bean City, BC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">
                      Phone
                    </h3>
                    <p className="text-coffee-600">
                      General: (555) 123-BREW
                      <br />
                      Catering: (555) 456-BREW
                      <br />
                      Corporate: (555) 789-BREW
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">
                      Email
                    </h3>
                    <p className="text-coffee-600">
                      General: hello@brewhaus.com
                      <br />
                      Support: support@brewhaus.com
                      <br />
                      Press: press@brewhaus.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-coffee-900 mb-1">
                      Customer Service Hours
                    </h3>
                    <p className="text-coffee-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-coffee-900 mb-6">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-coffee-900 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-coffee-900 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-coffee-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-coffee-900 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering Services</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="press">Press Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-coffee-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1d4e3a] text-cream-50 py-3 rounded-lg hover:bg-[#1d4e1a] transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-coffee-600">
              Quick answers to common questions about Brewhaus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are your operating hours?",
                answer:
                  "Hours vary by location. Most locations are open 6 AM - 8 PM on weekdays, with extended hours on weekends. Check our Locations page for specific hours.",
              },
              {
                question: "Do you offer catering services?",
                answer:
                  "Yes! We provide catering for corporate events, meetings, and special occasions. Contact us at (555) 456-BREW for more information.",
              },
              {
                question: "Are your coffee beans organic?",
                answer:
                  "We offer a selection of organic and fair-trade certified beans. Our staff can help you choose the perfect organic option for your taste preferences.",
              },
              {
                question: "Do you have a loyalty program?",
                answer:
                  "Yes! Our Brewhaus Rewards program offers points for every purchase, free drinks, and exclusive member benefits. Sign up at any location or through our mobile app.",
              },
              {
                question: "Can I buy your coffee beans to take home?",
                answer:
                  "Absolutely! We sell freshly roasted beans by the pound at all locations. We also offer online ordering with shipping available.",
              },
              {
                question: "Do you accommodate dietary restrictions?",
                answer:
                  "Yes, we offer dairy-free milk alternatives (oat, almond, soy), gluten-free pastries, and sugar-free syrups. Ask our baristas about options for your dietary needs.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-cream-50 rounded-lg p-6">
                <h3 className="font-semibold text-coffee-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-coffee-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;