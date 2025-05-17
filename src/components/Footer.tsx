
import { Mail, Smartphone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-talent-gray py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Logo and description */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">
                Talent<span className="text-talent-orange">Sleuth</span>
                <span className="text-talent-orange">AI</span>
              </span>
            </div>
            <p className="mb-6">
              The Autonomous Candidate Intelligence Engine that revolutionizes how companies find and evaluate talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-talent-gray hover:text-talent-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="text-talent-gray hover:text-talent-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="text-talent-gray hover:text-talent-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="hover:text-talent-orange transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-talent-orange transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="hover:text-talent-orange transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="hover:text-talent-orange transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-talent-orange transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-talent-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-talent-orange transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-talent-orange transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-talent-orange transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-talent-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-talent-orange" />
                <a href="mailto:info@talentsleuth.ai" className="hover:text-talent-orange transition-colors">
                  info@talentsleuth.ai
                </a>
              </li>
              <li className="flex items-center">
                <Smartphone className="h-5 w-5 mr-3 text-talent-orange" />
                <a href="tel:+1-800-TALENT" className="hover:text-talent-orange transition-colors">
                  +1-800-TALENT
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-white">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-[#242938] text-white border border-[#3A3E4D] rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-talent-orange"
                />
                <button className="bg-talent-orange hover:bg-opacity-90 text-white px-4 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3A3E4D] mt-12 pt-8 text-center">
          <p>&copy; {currentYear} TalentSleuth AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
