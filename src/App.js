import "./App.css";
import Menu from "./components/Menu";
// import Header from "./components/Header";
import Loader from "./components/Loader";
import ImageContainer from "./components/ImageContainer";

import { useState, useEffect } from "react";

function App() {
  // Needed Items
  const _client_id = "?client_id=riH_BTDLpi44kDDydPbIX0ra8Gt5jIoA25l8gBJtOZw";
  const _base_url = "https://api.unsplash.com/";

  // Global State
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [active, setActive] = useState({ active: true });
  const [inView, setInView] = useState(0);

  // Fetch Calls for various information
  const fetchTopics = async () => {
    const res = await fetch(`${_base_url}topics${_client_id}`);
    const topics = await res.json();
    setCategories(topics);
  };

  const fetchImages = async () => {
    const res = await fetch(`${_base_url}photos${_client_id}&per_page=40`);
    const images = await res.json();
    setImages(images);
  };

  const fetchTopicImages = async (slug) => {
    setInView(0);
    const res = await fetch(
      `${_base_url}topics/${slug}/photos${_client_id}&per_page=40`
    );
    const topicImages = await res.json();
    setImages(topicImages);
    setActive({ active: false });
  };

  // function to update active state on menu
  const isActive = async (active) => {
    setActive({ active: !active });
  };

  // function to move cards into view
  const moveView = (val) => {
    const limit = (images.length / 2) * 320 - (window.innerWidth - 100); // Total width of cards - screen with and padding
    if (inView + val > 0) {
      return setInView(0);
    }
    if (inView + val < -limit) {
      return setInView(-limit);
    }
    setInView(inView + val);
  };

  // Fetch Topics/Images using useEffect Hook and Async Await
  useEffect(() => {
    // Call to fetch
    fetchImages();
    fetchTopics();
  }, []);

  return (
    <div className="app-container">
      <Loader></Loader>
      {/* <Header></Header> */}
      <div className="main">
        <Menu
          categories={categories}
          fetchTopicImages={fetchTopicImages}
          active={active}
          isActive={isActive}
        ></Menu>
        <ImageContainer
          images={images}
          moveView={moveView}
          inView={inView}
          active={active}
        ></ImageContainer>
      </div>
    </div>
  );
}

export default App;
