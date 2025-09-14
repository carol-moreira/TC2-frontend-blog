import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
      <div className="p-6 flex-grow">
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{post.title}</h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{post.excerpt}</p>
      </div>
      <div className="p-6 pt-0">
        <Link to={`/post/${post.id}`} className="font-semibold text-sky-500 dark:text-sky-400 hover:underline">
          Leia mais &rarr;
        </Link>
      </div>
    </div>
  );
};

export default PostCard;