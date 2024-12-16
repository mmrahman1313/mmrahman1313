import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 1, title: "Elephant", category: "UI/UX", image: "https://i.ibb.co.com/23yYWR9/Elephant.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 9, title: "Project I", category: "UI/UX", image: "https://i.ibb.co.com/fQDx2py/West-Mining.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 333, title: 'Wizardd IT', category: "Digital Content", video: 'https://res.cloudinary.com/dkxmy7tds/video/upload/v1734340577/Wizardd_it_video_rs7qja.mp4' },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 332, title: 'West Mining Intro', category: "Digital Content", video: 'https://res.cloudinary.com/dkxmy7tds/video/upload/v1734340742/West_Mining_Intro_xuhrtf.mp4' },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 451, title: "Visual Design Project 1", category: "Visual Design", image: "https://i.ibb.co.com/1ryNP79/1.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 452, title: "Visual Design Project 2", category: "Visual Design", image: "https://i.ibb.co.com/SKGkQw3/2.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4511, title: "Visual Design Project 11", category: "Visual Design", image: "https://i.ibb.co.com/L0bPVT5/11.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4512, title: "Visual Design Project 12", category: "Visual Design", image: "https://i.ibb.co.com/mDNhjYF/12.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 3, title: "Project C", category: "UI/UX", image: "https://i.ibb.co.com/WGg216j/Jewellery.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4, title: "Project D", category: "UI/UX", image: "https://i.ibb.co.com/PztztDB/MIndfit.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 453, title: "Visual Design Project 3", category: "Visual Design", image: "https://i.ibb.co.com/jhZdkL9/3.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 454, title: "Visual Design Project 4", category: "Visual Design", image: "https://i.ibb.co.com/2gQ9LpM/4.jpg" },
 
  // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 457, title: "Visual Design Project 7", category: "Visual Design", image: "https://i.ibb.co.com/FJ9GbDy/7.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 458, title: "Visual Design Project 8", category: "Visual Design", image: "https://i.ibb.co.com/XJ4RJPW/8.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 459, title: "Visual Design Project 9", category: "Visual Design", image: "https://i.ibb.co.com/g310L3B/9.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 5, title: "Project E", category: "UI/UX", image: "https://i.ibb.co.com/wp2s0Jx/Poricoy.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 6, title: "Project F", category: "UI/UX", image: "https://i.ibb.co.com/m4BW3q7/SINSO.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 7, title: "Project G", category: "UI/UX", image: "https://i.ibb.co.com/6rjdjhk/Teddy-Bear-INU.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 8, title: "Project H", category: "UI/UX", image: "https://i.ibb.co.com/hMX8bcy/UIUX-Design.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 2, title: "Project B", category: "UI/UX", image: "https://i.ibb.co.com/yfQ4S2y/IZI-Coin.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4510, title: "Visual Design Project 10", category: "Visual Design", image: "https://i.ibb.co.com/HK8D28L/10.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4513, title: "Visual Design Project 13", category: "Visual Design", image: "https://i.ibb.co.com/tXnPLJV/13.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4514, title: "Visual Design Project 14", category: "Visual Design", image: "https://i.ibb.co.com/7b9yqT0/14.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4515, title: "Visual Design Project 15", category: "Visual Design", image: "https://i.ibb.co.com/2d8DWDF/15.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4516, title: "Visual Design Project 16", category: "Visual Design", image: "https://i.ibb.co.com/vPYVHkr/16.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4517, title: "Visual Design Project 17", category: "Visual Design", image: "https://i.ibb.co.com/HTjTX0R/17.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4518, title: "Visual Design Project 18", category: "Visual Design", image: "https://i.ibb.co.com/Dw9JHZ4/18.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4519, title: "Visual Design Project 19", category: "Visual Design", image: "https://i.ibb.co.com/DrH6Xdn/19.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4520, title: "Visual Design Project 20", category: "Visual Design", image: "https://i.ibb.co.com/42h2NY2/20.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4521, title: "Visual Design Project 21", category: "Visual Design", image: "https://i.ibb.co.com/CVRLBLJ/21.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4522, title: "Visual Design Project 22", category: "Visual Design", image: "https://i.ibb.co.com/JphKJkz/22.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4523, title: "Visual Design Project 23", category: "Visual Design", image: "https://i.ibb.co.com/JrwgHRF/23.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4524, title: "Visual Design Project 24", category: "Visual Design", image: "https://i.ibb.co.com/5LxFC2q/24.png" },
  // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4525, title: "Visual Design Project 25", category: "Visual Design", image: "https://i.ibb.co.com/z2TwB1j/25.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4526, title: "Visual Design Project 26", category: "Visual Design", image: "https://i.ibb.co.com/M8FGFrQ/26.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4527, title: "Visual Design Project 27", category: "Visual Design", image: "https://i.ibb.co.com/cNKpyKJ/27.png" },
  // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4528, title: "Visual Design Project 28", category: "Visual Design", image: "https://i.ibb.co.com/pfd5qpV/28.png" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4530, title: "Visual Design Project 30", category: "Visual Design", image: "https://i.ibb.co.com/YdNxDDG/30.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4531, title: "Visual Design Project 31", category: "Visual Design", image: "https://i.ibb.co.com/nCX6yPT/31.jpg" },
  
  //... more projects...
  
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 334, title: 'West_MIning', category: "Digital Content", video: 'https://res.cloudinary.com/dkxmy7tds/video/upload/v1734340508/West_MIning_smnyrx.mp4' },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 335, title: 'Wesimining', category: "Digital Content", video: 'https://res.cloudinary.com/dkxmy7tds/video/upload/v1734340523/Wesimining_bgnvhw.mp4' },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4532, title: "Visual Design Project 32", category: "Visual Design", image: "https://i.ibb.co.com/d2cw100/32.jpg" },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 331, title: 'Podcast', category: "Digital Content", video: 'https://res.cloudinary.com/dkxmy7tds/video/upload/v1734340763/Podcast_e2cfqv.mp4' },
  { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4529, title: "Visual Design Project 29", category: "Visual Design", image: "https://i.ibb.co.com/wQXqBBD/29.jpg" },
];

const Portfolio = ({ classicHeader, darkTheme }) => {
  const [activeTab, setActiveTab] = useState('All'); // Tracks active category tab
  const [showAll, setShowAll] = useState(false); // For "Load More" functionality

  const handleTabChange = (category) => {
    setActiveTab(category);
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  // Filter projects based on activeTab
  const filteredProjects = projects.filter(
    (project) => activeTab === 'All' || project.category === activeTab
  );

  return (
    <section id="portfolio" className={`section ${darkTheme ? "bg-dark-2" : "bg-light"}`}>
      <div className={`container ${classicHeader ? "" : "px-lg-5"}`}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2 className={`text-24 text-uppercase fw-600 w-100 mb-0 ${darkTheme ? "text-light opacity-1" : "text-muted opacity-4"}`}>
            Portfolio
          </h2>
          <p className={`text-9 fw-600 position-absolute w-100 align-self-center lh-base mb-0 ${darkTheme ? "text-white" : "text-dark"}`}>
            My Work
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="portfolio-tabs text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {['All', 'UI/UX', 'Visual Design', 'Digital Content'].map((category) => (
            <motion.button
              key={category}
              onClick={() => handleTabChange(category)}
              style={{
                backgroundColor: activeTab === category ? '#21C190' : 'transparent',
                color: activeTab === category ? '#fff' : '#fff',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                borderRadius: '5px',
                fontWeight: 'bold',
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Portfolio Items */}
      <div className="row position-relative" style={{ paddingLeft: 0, paddingRight: 0 }}>
        {filteredProjects.slice(0, showAll ? filteredProjects.length : 6).map((project) => (
          <motion.div
            key={project.id}
            className="col-lg-6 col-md-6 col-sm-12 mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ padding: '0 15px' }}
          >
            <motion.div
              className="card position-relative"
              style={{
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {project.image && (
                <motion.img
                  src={project.image}
                  className="card-img-top"
                  alt="card image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              )}

              {project.video && (
                <motion.video
                  src={project.video}
                  controls
                  style={{
                    width: '100%',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Category text */}
              <p
                className="position-absolute top-0 end-0 m-3"
                style={{
                  padding: '10px',
                  background: 'rgba(122, 107, 107, 0.38)',
                  color: 'white',
                  borderRadius: '5px',
                  fontWeight: 'bold',
                }}
              >
                {project.category}
              </p>

              {/* Text Content */}
              {project.image && (
                <motion.div
                  className="card-body position-absolute bottom-0 start-0 end-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{
                    opacity: { duration: 0.4 },
                    y: { duration: 0.6, ease: "easeInOut" },
                  }}
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">
                    {
                      project.details.length > 100
                       ? project.details.slice(0, 100) + '...'
                        : project.details
                    }
                  </p>
                  <motion.a
                    href="https://www.behance.net/MMRahman1313"
                    className="p-3 btn btn-primary "
                    whileHover={{ scale: 1.1, backgroundColor: '#21C190' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Details
                  </motion.a>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-5">
          <motion.button
            className="btn btn-primary"
            onClick={handleLoadMore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
