import Link from "next/link";
import Image from "next/image";

function Footer(){
    return (
     <>
    <footer className="bg-indigo-950 text-white py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section: Logo + About */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-400">SZSC</h2>
          {/* <p className="mt-2 text-gray-300">
            Elevate your skills with personalized coaching.
          </p> */}
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Column 1: Explore */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">What is FlexCoach?</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">How It Works</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Who Can Join?</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">One Platform, Any Device</a></li>
          </ul>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/ai_assistant" className="text-gray-300 hover:text-white">Ai Assistant</a></li>
            <li><a href="/online_form" className="text-gray-300 hover:text-white">Online From</a></li>
            <li><a href="/review" className="text-gray-300 hover:text-white">Review</a></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Social Link</h3>
          <ul className="space-y-2">
            <li><Link href="#"><Image src={"/picture/logo-facebook.png"} alt="facebook" width={20} height={20}/></Link></li>
            <li><Link href="#"><Image src={"/picture/logo-instagram.png"} alt="instagram" width={20} height={20}/></Link></li>
            <li><Link href="#"><Image src={"/picture/logo-twitter.png"} alt="twitter" width={20} height={20}/></Link></li>
            <li><Link href="#"><Image src={"/picture/logo-youtube.png"} alt="youtube" width={20} height={20}/></Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section: Language + Cookie Policy */}
      <div className="container mx-auto px-6 mt-8 border-t border-indigo-900 pt-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-300 hover:text-white">English</Link>
        </div>
        <p className="text-gray-400 text-sm text-center md:text-left">
          This website uses cookies and Google Analytics. By using this site, you agree to our privacy policy.
        </p>
      </div>
    </footer>
     </>
    );
  };
  
  export default Footer;
  