
import { FaHeadphones, FaInstagram, FaMailBulk, FaMapPin, FaPhone, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0c1529] text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center">
              👻
            </span>
            <h2 className="text-2xl font-bold text-white">FALCON</h2>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Experience our new platform &amp; Enjoy exciting deals and offers on your day to day
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <FaMapPin size={16} className="mt-1 text-green-400" />
              <span>House #64, Road 13, ASA Center, Uttara, Dhaka-1402</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone size={16} className="text-green-400" />
              <span>01729-1497201</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMailBulk size={16} className="text-green-400" />
              <span>falcon@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-white mb-3">ABOUT</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-white mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Payments</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">My Orders</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        {/* Support + Apps */}
        <div>
          <h3 className="font-semibold text-white mb-3">Need Support?</h3>
          <div className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded-lg w-fit mb-5">
            <FaHeadphones size={18} className="text-green-400" />
            <span className="text-sm">10724-7814XX</span>
          </div>

          <h3 className="font-semibold text-white mb-3">DOWNLOAD APP</h3>
          <div className="flex flex-col gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-36"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-36"
            />
          </div>
        </div>
      </div>

      {/* Payments */}
      <div className="mt-10 text-center">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">PAYMENTS ACCEPTED</h4>
        <div className="flex justify-center gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
          <img src="https://seeklogo.com/images/B/bkash-logo-835789094D-seeklogo.com.png" alt="Bkash" className="h-6" />
          <img src="https://seeklogo.com/images/N/Nagad-logo-9D0B180E64-seeklogo.com.png" alt="Nagad" className="h-6" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        Falcon ©2025. Design by xyz
      </div>
    </footer>
  );
};

export default Footer;
