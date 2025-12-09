import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-green-900 text-white mt-10 py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Hayvonlar</h2>
          <p className="text-gray-300">
            Tabiatni sevamiz va hayvonlarni asraymiz.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Bo`limlar</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">Uy hayvonlari</a></li>
            <li><a href="#" className="hover:text-white">Yovvoyi hayvonlar</a></li>
            <li><a href="#" className="hover:text-white">Aloqa</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Biz ijtimoiy tarmoqlarda</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Telegram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;