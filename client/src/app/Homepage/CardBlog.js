import React from "react";

const CardBlog = ({ className, hasContent, mediaClassName, rectangleClassName }) => {
  return (
    <div className={className}>
      {hasContent && (
        // Render your blog content here
        <div>
          {/* Blog Content */}
        </div>
      )}
      <div className={mediaClassName}>
        {/* Blog Media */}
      </div>
      <div className={rectangleClassName}>
        {/* Rectangle */}
      </div>
    </div>
  );
};

export default CardBlog;
