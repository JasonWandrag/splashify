import React from "react";

const MenuItem = ({ title, slug, fetchTopicImages }) => {
  return (
    <button
      className="category-menu-btn"
      onClick={() => fetchTopicImages(slug)}
    >
      {title}
    </button>
  );
};

MenuItem.defaultProps = {
  title: "Category",
  slug: "category",
};

export default MenuItem;
