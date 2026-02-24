const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind CSS
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Made with ❤️ by Intended For Good Digital Services
        </p>
      </div>
    </footer>
  );
};

export default Footer;
