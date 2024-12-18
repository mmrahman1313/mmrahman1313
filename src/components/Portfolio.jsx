import React, { useState } from "react";
import { motion } from "framer-motion";

const Portfolio = ({ classicHeader, darkTheme }) => {
  const [activeTab, setActiveTab] = useState("All"); // Tracks active category tab
  const [showAll, setShowAll] = useState(false); // For "Load More" functionality

  const projects = [
    {
      details:
        "Web-3 Elephant Coin UI/UX Design delivers a seamless, user-friendly interface for a blockchain-based platform.",
      id: 1,
      title: "Elephant Coin",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506548/Elephant_iizywx.png",
    },
    {
      details:
        "West Mining UI/UX Design focuses on creating a seamless, user-friendly UI tailored for efficient and engaging mining operations management.",
      id: 9,
      title: "West Mining",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506548/WestMining_zdhe7w.png",
    },
    {
      details: "Wizarddit ",
      id: 333,
      title: "Wizardd IT",
      category: "Digital Content",
      video:
        "https://res.cloudinary.com/dms2ouft5/video/upload/v1734511329/Wizardd_it_video_redonw.mp4",
    },
    {
      details: "West Mining Intro ",
      id: 332,
      title: "West Mining Intro",
      category: "Digital Content",
      video:
        "https://res.cloudinary.com/dms2ouft5/video/upload/v1734511353/West_Mining_Intro_alf7xv.mp4",
    },
    {
      details:
        "Stationery for a Cleaning Company reflects professionalism, cleanliness, and trust through sleek, minimalist designs.",
      id: 4513,
      title: "Stationary for Cleaning Company",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510263/13_cw8gcx.png",
    },
    {
      details:
        "MONSTACKDEV logo represents innovation and expertise, crafted to reflect the modern, tech-driven focus of the developer company.",
      id: 4515,
      title: "MONSTACKDEV Logo",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510265/15_kfzure.png",
    },
    {
      details:
        "Eletricare poster design highlights professionalism and reliability, showcasing electronic services with a sleek, modern aesthetic.",
      id: 4511,
      title: "Eletricare Poster",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510261/11_otpqh5.png",
    },
    {
      details:
        "World Jewellery UI/UX design offers an elegant, user-friendly experience for browsing and purchasing fine jewelry online.",
      id: 3,
      title: "World Jewellery",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506547/Jewellery_agcdws.png",
    },
    {
      details:
        "16th December social media post design commemorates Bangladeshs Victory Day, reflecting pride, freedom, and patriotism",
      id: 451,
      title: "Victory Day of Bangladesh",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510260/9_wdpisu.jpg",
    },
    {
      details:
        "Tree Care poster design showcases services focused on tree health, maintenance, and preservation.",
      id: 4512,
      title: "Tree Care",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510262/12_rayfh2.png",
    },
    {
      details:
        "Mind Fit mobile UI/UX design offers a clean, intuitive interface for a seamless mental wellness experience.",
      id: 4,
      title: "Mind Fit",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506547/MIndfit_rz1crp.png",
    },
    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 453, title: "Visual Design Project 3", category: "Visual Design", image: "https://i.ibb.co.com/jhZdkL9/3.jpg" },
    {
      details:
        "Crypto Pay letter logo by CP design represents a modern, sleek identity for a secure cryptocurrency payment platform.",
      id: 4516,
      title: "Crypto Pay",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510266/16_fjtdz0.png",
    },
    {
      details:
        "Mining equipment post design highlights durability and performance, showcasing essential tools for efficient mining operations.",
      id: 452,
      title: "Mining Equipment ",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510258/2_hlv8zk.jpg",
    },
    {
      details:
        "ADONAI CREATIONS logo design reflects creativity and elegance, representing a brand focused on innovative and high-quality creations.",
      id: 4517,
      title: "ADONAI CREATIONS",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510267/17_jhk7us.png",
    },
    {
      details:
        "Victory Day discount social media post design highlights special offers, celebrating freedom with unbeatable deals.",
      id: 459,
      title: "Victory Day",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510258/1_zzboku.jpg",
    },
    {
      details:
        "PORICOY app UI/UX design offers a seamless, user-friendly experience for secure and efficient identification management.",
      id: 5,
      title: "PORICOY",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506548/Poricoy_ntnhir.png",
    },
    {
      details:
        "SINSO Technology UI/UX design reflects the company focus on innovative Web-3 solutions, ensuring a seamless and intuitive UX.",
      id: 6,
      title: "SINSO Technology",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506547/SINSO_gwxe6p.png",
    },
    {
      details:
        "SOLUTION logo design embodies the slogan Service is Our Main Goal, reflecting a commitment to customer satisfaction and reliable solutions. ",
      id: 4524,
      title: "SOLUTION",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510273/24_otyztl.png",
    },
    {
      details:
        "Metro rail YouTube thumbnail design highlighting sleek trains and efficient city transport. ",
      id: 4529,
      title: "Metro Rail YouTube Thumbnail",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510276/29_eucrhz.jpg",
    },

    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 457, title: "Visual Design Project 7", category: "Visual Design", image: "image" },
    {
      details:
        "Thumbnail design for a YouTube channel showcasing Dubai tours, capturing vibrant landmarks and luxury experiences.",
      id: 4526,
      title: "Youtube Thumbnail",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510277/26_hyr5ke.png",
    },
    {
      details:
        "Thumbnail design for a YouTube channel showcasing Kashmir tours and scenic landscapes",
      id: 4527,
      title: "Youtube Thumbnail",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510278/27_is4umy.png",
    },
    {
      details:
        "Clouds Shop logo design represents a sleek, modern brand offering headphones and electronics, combining style and technology. ",
      id: 4518,
      title: "Clouds",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510268/18_wgsafn.png",
    },
    {
      details:
        "PeerNFT website UI design features a modern, intuitive interface for seamless browsing, buying, and selling of NFTs. ",
      id: 8,
      title: "PeerNFT",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506547/UIUX-Design_zy1dh8.png",
    },
    {
      details:
        "IZI Coin UI design offers a clean, user-friendly interface for easy navigation and management of cryptocurrency transactions. ",
      id: 2,
      title: "IZI Coin",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506548/IZI_Coin_ih5sg9.png",
    },
    // {
    //   details:
    //     "Kindergarten poster design highlights playful, educational services focused on nurturing young minds.",
    //   id: 4510,
    //   title: "Kindergarten Post",
    //   category: "Visual Design",
    //   image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510260/10_q4ary0.png",
    // },
    {
      details: "West_Mining ",
      id: 334,
      title: "West_MIning",
      category: "Digital Content",
      video:
        "https://res.cloudinary.com/dms2ouft5/video/upload/v1734511301/West_MIning_mzvqwt.mp4",
    },
    {
      details:
        "Social media post for a coffee restaurant showcasing cozy ambiance, rich flavors, and quality brews ",
      id: 4531,
      title: "Coffee",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510282/32_n7qu5i.jpg",
    },
    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 458, title: "Visual Design Project 8", category: "Visual Design", image: "https://i.ibb.co.com/XJ4RJPW/8.jpg" },
    {
      details:
        "The Music Royalty Co. logo design embodies elegance, professionalism, and music rights management. ",
      id: 4519,
      title: "The Music Royalty Co.",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510269/19_nlbtaa.png",
    },
    {
      details:
        "Teddy Bear INU cryptocurrency website UI design combines playful branding with a sleek, user-friendly UI for easy navigation and trading.",
      id: 7,
      title: "Teddy Bear INU",
      category: "UI/UX",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734506547/Teddy_Bear_INU_f0fibz.png",
    },
    {
      details:
        "Russos State Sales LLC logo design reflects professionalism and trust, representing the companys expertise in sales and services.",
      id: 4520,
      title: "Russo's State Sales LLC",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510270/20_sj9kej.png",
    },
    // { details: 'Poricoy logo design symbolizes identity, security, and simplicity, reflecting the app focus on personal identification management.' , id: 4521, title: "Poricoy ", category: "Visual Design", image: "https://i.ibb.co.com/CVRLBLJ/21.png" },
    {
      details:
        "Blue Cloud Travels logo design represents adventure and reliability, reflecting the company commitment to seamless travel experiences. ",
      id: 4522,
      title: "Blue Cloud Travels",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510271/22_wbwbam.png",
    },
    {
      details:
        "Aruvika Semiconductor Pvt Ltd logo design represents innovation and precision in semiconductor technology. ",
      id: 4523,
      title: "Aruvika Semiconductor Pvt Ltd",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510273/23_hdnr5n.png",
    },
    {
      details:
        "AZ Coffee Letter Logo blends sleek typography with coffee vibes, embodying warmth, quality, and modern style for a welcoming coffee restaurant. ",
      id: 4514,
      title: "AZ letter Coffee",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510278/31_usvtkc.jpg",
    },
    {
      details:
        "I designed a visually engaging poster for a coffee restaurant, blending warm tones, inviting graphics, and compelling text to attract coffee lovers ",
      id: 4514,
      title: "Coffee Restaurant Post",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510277/30_p0ybrc.jpg",
    },

    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4525, title: "Visual Design Project 25", category: "Visual Design", image: "https://i.ibb.co.com/z2TwB1j/25.png" },
    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4528, title: "Visual Design Project 28", category: "Visual Design", image: "https://i.ibb.co.com/pfd5qpV/28.png" },
    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4530, title: "Visual Design Project 30", category: "Visual Design", image: "https://i.ibb.co.com/YdNxDDG/30.jpg" },

    //... more projects...

    {
      details:
        "Gadget Dock poster design showcases expert repair services for laptops, mobiles, and devices, offering quick and reliable solutions. ",
      id: 4514,
      title: "Gadget Dock",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510264/14_ygbpnx.png",
    },
    {
      details: "WestMining ",
      id: 335,
      title: "Wesimining",
      category: "Digital Content",
      video:
        "https://res.cloudinary.com/dms2ouft5/video/upload/v1734511299/Wesimining_zcdkwe.mp4",
    },
    // { details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed ' , id: 4532, title: "Visual Design Project 32", category: "Visual Design", image: "https://i.ibb.co.com/d2cw100/32.jpg" },
    {
      details:
        "AntiMiner S19 social media posts showcase powerful mining capabilities, efficiency, and high performance. ",
      id: 454,
      title: "AntiMiner s19 Various",
      category: "Visual Design",
      image: "https://res.cloudinary.com/dms2ouft5/image/upload/v1734510259/4_qbtxxx.jpg",
    },
    {
      details: "Podcast",
      id: 331,
      title: "Podcast",
      category: "Digital Content",
      video:
        "https://res.cloudinary.com/dms2ouft5/video/upload/v1734511364/Podcast_iitzrr.mp4",
    },
  ];

  // Filter projects based on activeTab
  const filteredProjects = projects.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  const handleTabChange = (category) => {
    setActiveTab(category);
  };

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <section
      id="portfolio"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className="container">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Portfolio
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
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
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          {["All", "UI/UX", "Visual Design", "Digital Content"].map(
            (category) => (
              <motion.button
                key={category}
                onClick={() => handleTabChange(category)}
                style={{
                  backgroundColor:
                    activeTab === category ? "#21C190" : "transparent",
                  color: activeTab === category ? "#fff" : "#fff",
                  border: "none",
                  padding: "10px 20px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </motion.button>
            )
          )}
        </motion.div>
      </div>

      {/* Portfolio Items */}
      <div
        className="row position-relative p-4"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {filteredProjects
          .slice(0, showAll ? filteredProjects.length : 6)
          .map((project) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6 col-sm-12 mt-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ padding: "0 15px" }}
            >
              <motion.div
                className="card position-relative"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
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
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                )}

                {project.video && (
                  <motion.video
                    src={project.video}
                    controls
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  />
                )}

                <p
                  className="position-absolute top-0 end-0 m-3"
                  style={{
                    padding: "10px",
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  {project.category}
                </p>

                {project.image && (
                  <motion.div
                    className="card-body position-absolute top-0 start-0 end-0"
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: "rgba(0, 0, 0, 0.5)",
                      textAlign: "center",
                      color: "white",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      "@media (max-width: 768px)": {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{
                        "@media (max-width: 768px)": {},
                      }}
                    >
                      {project.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{
                        "@media (max-width: 768px)": {},
                      }}
                    >
                      {project.details.slice(0, 150)}...
                    </p>
                    <motion.a
                      href="https://www.behance.net/MMRahman1313"
                      target="_blank"
                      className="btn btn-outline-primary rounded-pill mt-2"
                      style={{
                        "@media (max-width: 768px)": {
                          fontSize: "0.8rem",
                          padding: "5px 10px",
                        },
                      }}
                    >
                      View Details
                    </motion.a>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
      </div>

      {/* Load More Button */}
      {!showAll && (
        <div className="text-center mt-4">
          <motion.button
            onClick={handleLoadMore}
            className="btn btn-outline-primary rounded-pill mt-2"
          >
            View More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
