import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  const seoLocations = [
    'interior designers in hyderabad',
    'interior designers in kphb',
    'interior designers in kukatpally',
    'interior designers in gachibowli',
    'interior designers in hitech city',
    'interior designers in madhapur',
    'interior designers in kondapur',
    'interior designers in miyapur',
    'interior designers in tellapur',
    'interior designers in kompally'
  ];

  return (
    <footer className="bg-[#333333] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/Inspira Interiors Logo Design (3) .png"
              alt="Inspira Interiors Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-300">
              Creating stunning interior spaces that inspire and delight. Your dream space is our passion.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-gray-300 transition-colors duration-300 hover:text-[#FF6633]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 transition-colors duration-300 hover:text-[#FF6633]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-[#FF6633]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-300 hover:text-[#FF6633]">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FF6633]" />
                <a href="tel:9154658651" className="text-gray-300 transition-colors duration-300 hover:text-[#FF6633]">
                  +91 91546 58651
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF6633]" />
                <a href="mailto:contact@inspirainteriors.net" className="text-gray-300 transition-colors duration-300 hover:text-[#FF6633]">
                  contact@inspirainteriors.net
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-all duration-300 hover:bg-[#FF6633] hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-all duration-300 hover:bg-[#FF6633] hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 transition-all duration-300 hover:bg-[#FF6633] hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6">
          <div className="mb-4 text-center">
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              {seoLocations.map((location, index) => (
                <span key={index}>
                  {location}
                  {index < seoLocations.length - 1 && ' | '}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 space-y-1">
            <p>&copy; {new Date().getFullYear()} Inspira Interiors. All rights reserved.</p>
            <p>
              <sup>2</sup>For kitchen, wardrobes and storage | <sup>3</sup>In comparison with a branded player
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
