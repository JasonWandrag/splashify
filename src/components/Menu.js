import PropTypes from "prop-types";

import MenuItem from "./MenuItem";

const Menu = ({ categories, fetchTopicImages, active, isActive }) => {
  console.log(categories);
  console.log("HERE IS THE ACTIVE STATE", active.active);
  return (
    <nav className={active.active ? "category-menu active" : "category-menu"}>
      {categories.length
        ? categories.map((category) => {
            return (
              <MenuItem
                key={category.id}
                title={category.title}
                slug={category.slug}
                fetchTopicImages={fetchTopicImages}
              ></MenuItem>
            );
          })
        : "Loading Categories"}
      <button
        className="category-menu-toggle active"
        onClick={() => isActive(active.active)}
      >
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

Menu.defaultProps = {
  categories: [],
};

Menu.propTypes = {
  categories: PropTypes.array,
};

export default Menu;
