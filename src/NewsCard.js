import React from 'react';

const NewsCard = ({ imageUrl, title }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-4">
      <img src={imageUrl} alt="Secondary news image" className="rounded-lg" />
      <h3 className="font-bold mt-2">{title}</h3>
    </div>
  );
}

export default NewsCard;
