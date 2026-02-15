
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-slate-900 dark:bg-slate-900 text-slate-300 dark:text-slate-400 py-20 transition-colors duration-300 border-t border-slate-800 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-black tracking-tighter text-white">
                AutoBazar<span className="text-blue-500">CZ</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed font-medium opacity-70">
              {t.footer.about}
            </p>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">{t.footer.services}</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">{t.nav.catalog}</Link></li>
              <li><Link to="/vin-check" className="hover:text-blue-500 transition-colors">{t.nav.vinCheck}</Link></li>
              <li><Link to="/insurance" className="hover:text-blue-500 transition-colors">{t.nav.insurance}</Link></li>
              <li><Link to="/customs-duty" className="hover:text-blue-500 transition-colors">{t.nav.customs}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">{t.footer.forSellers}</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
              <li><Link to="/sell" className="hover:text-blue-500 transition-colors">{t.nav.sellCar}</Link></li>
              <li><Link to="/advertising" className="hover:text-blue-500 transition-colors">Реклама</Link></li>
              <li><Link to="/price-stats" className="hover:text-blue-500 transition-colors">{t.nav.stats}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8">{t.footer.contacts}</h4>
            <ul className="space-y-4 text-sm font-bold opacity-80">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                +420 777 000 111
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                info@autobazar.cz
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Praha, Václavské náměstí 1
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-20 pt-8 text-center text-xs font-bold uppercase tracking-widest opacity-40">
          <p>&copy; {new Date().getFullYear()} AutoBazar CZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
