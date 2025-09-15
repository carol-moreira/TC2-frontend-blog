import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto max-w-5xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors">
              Tech Insights
            </Link>
          </div>
          <nav className="space-x-6 text-slate-600 dark:text-slate-300 font-medium">
            <Link to="/" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Home</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;