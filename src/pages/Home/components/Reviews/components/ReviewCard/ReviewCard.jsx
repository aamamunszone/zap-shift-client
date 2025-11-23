import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { userName, review: comment, user_photoURL } = review;

  return (
    <div className="bg-base-100 rounded-xl shadow-sm p-8 border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-secondary/40 mb-4" />

      {/* Review Text */}
      <p className="text-[#505050] leading-relaxed mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        libero suscipit tempora deleniti consequuntur facilis voluptate quidem,
        beatae, aliquam eum non officiis, similique maiores nihil reprehenderit
        illo sapiente ducimus minima.
      </p>

      {/* Line */}
      <div className="border-t border-dashed border-secondary/40 mb-6"></div>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={user_photoURL} alt={userName} />
        </div>

        {/* Name & Role */}
        <div>
          <h4 className="font-semibold text-lg text-secondary">{userName}</h4>
          <p className="text-sm text-[#707070]">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
