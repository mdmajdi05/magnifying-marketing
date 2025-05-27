import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#', hasDropdown: false },
    { 
      name: 'Services', 
      href: '#services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Design', href: '#' },
        { name: 'Web Development', href: '#' },
        { name: 'Digital Marketing', href: '#' },
        { name: 'SEO', href: '#' },
        { name: 'Mobile App Development', href: '#' }
      ]
    },
    { name: 'Portfolio', href: '#portfolio', hasDropdown: false },
    { name: 'About', href: '#about', hasDropdown: false },
    { name: 'Blog', href: '#blog', hasDropdown: false },
    { name: 'Contact', href: '#contact', hasDropdown: false },
  ];

  return (
    <header id="navbar" className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-500">
              {/* <span className="text-[#00B6FF]">Web</span>
              <span className="text-black">nox</span> */}
              <img 
                src="https://magnifyingmarketing.com/wp-content/uploads/2025/03/cropped-A1-300x95.png" 
                alt="Magnifying Marketing"
                className="h-12"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a 
                  href={link.href}
                  className="text-gray-800 hover:text-[#00B6FF] transition-colors duration-300 font-medium flex items-center"
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      toggleDropdown(link.name);
                    }
                  }}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </a>
                
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left z-50">
                    {link.dropdownItems?.map((item) => (
                      <a 
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#00B6FF] hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <a 
              href="#contact"
              className="px-6 py-2 bg-[#00B6FF] text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Get a Quote
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#00B6FF] focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.hasDropdown ? '#' : link.href}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-[#00B6FF] hover:bg-gray-50 rounded-md flex justify-between items-center"
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault();
                    toggleDropdown(link.name);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
                )}
              </a>
              
              {link.hasDropdown && activeDropdown === link.name && (
                <div className="pl-4 space-y-1 mt-1">
                  {link.dropdownItems?.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#00B6FF] hover:bg-gray-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <a
            href="#contact"
            className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-[#00B6FF] hover:bg-blue-600 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;