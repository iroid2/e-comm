import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Facebook, Instagram, Twitter, PhoneIcon as WhatsApp, MapPin, Phone, Mail, Leaf } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="bg-green-900 p-7 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-400" />
              <h2 className="text-white text-2xl font-bold">FreshVeggies</h2>
            </div>
            <p className="text-sm leading-relaxed text-green-200">
              We're your local source for fresh, organic vegetables in Kireka, Uganda. 
              Our mission is to bring the best produce from local farms directly to your table, 
              promoting healthy living and supporting our community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Shop', 'About Us', 'Delivery Info', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-green-200 hover:text-green-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-green-200">
                <MapPin className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                Kireka, Uganda
              </li>
              <li className="flex items-center text-sm text-green-200">
                <Phone className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                +256 757 916 783
              </li>
              <li className="flex items-center text-sm text-green-200">
                <Mail className="w-5 h-5 mr-3 text-green-400 flex-shrink-0" />
                iradtu2@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">Fresh Deals Newsletter</h3>
            <p className="text-sm text-green-200">Get the latest on our seasonal offers and new arrivals!</p>
            <form className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-green-800 border-green-700 text-white placeholder-green-400 focus:ring-green-500 focus:border-green-500"
              />
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white transition-colors">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-green-800" />

        {/* Social Media and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            {[Facebook, Instagram, Twitter, WhatsApp].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-green-400 hover:text-white transition-colors"
                aria-label={`Follow us on ${Icon.name}`}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-green-300">
            © {new Date().getFullYear()} FreshVeggies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

