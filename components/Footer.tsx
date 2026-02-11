
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">AutoBazar CZ</h3>
            <p className="text-sm leading-relaxed">
              {t.footer.about}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400">{t.nav.catalog}</Link></li>
              <li><Link to="/vin-check" className="hover:text-blue-400">{t.nav.vinCheck}</Link></li>
              <li><Link to="/insurance" className="hover:text-blue-400">{t.nav.insurance}</Link></li>
              <li><Link to="/customs-duty" className="hover:text-blue-400">{t.nav.customs}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.forSellers}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sell" className="hover:text-blue-400">{t.nav.sellCar}</Link></li>
              <li><Link to="/advertising" className="hover:text-blue-400">Реклама</Link></li>
              <li><Link to="/price-stats" className="hover:text-blue-400">{t.nav.stats}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contacts}</h4>
            <ul className="space-y-2 text-sm">
              <li>+420 777 000 111</li>
              <li>info@autobazar.cz</li>
              <li>Praha, Václavské náměstí 1</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AutoBazar CZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
