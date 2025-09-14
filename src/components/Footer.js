import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container mx-auto max-w-5xl px-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Meu Blog de Tech. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;