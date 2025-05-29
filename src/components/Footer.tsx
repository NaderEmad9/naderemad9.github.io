import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center" dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'plaintext' }}>
          <p>&copy; {currentYear} Nader Emad Mohamed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
