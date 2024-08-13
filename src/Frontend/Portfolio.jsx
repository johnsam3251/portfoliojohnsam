import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import { LuSearchCode } from "react-icons/lu";
import { SiBackendless } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import "../Style/mainStyle.css";
import CV from "../assets/image/CV.pdf";
import logo from "../assets/image/logo.png";
import pro1 from "../assets/image/pro1.png";
import pro2 from "../assets/image/pro2.png";
import pro3 from "../assets/image/pro3.png";
import pro4 from "../assets/image/pro4.png";
import fastrack1 from "../assets/image/fastrack1.png";
import oic1 from "../assets/image/oic1.png";
import profile from "../assets/image/profile.png";
import { useState } from "react";
import ScrollReveal from "scrollreveal";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  ///////////Animation Start////////////////
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal({ reset: true }).reveal(".profile_img", {
    distance: "30px",
    origin: "bottom",
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".project__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".experience__list li", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".footer__container h2", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".footer__container p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".footer__container .mail__to", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".footer__socials", {
    ...scrollRevealOption,
    delay: 1500,
  });

  return (
    <div>
      {/* Nav Section **********************/}
      <nav>
        <div className="nav__bar">
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#">
                <img src={logo} alt="logo" id="logo" />
              </a>
            </div>
            <div
              className="nav__menu__btn"
              id="menu-btn"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoMdClose /> : <IoMenu />}
            </div>
          </div>
          <ul className={`nav__links ${open ? " open" : ""}`} id="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#experience">Experiences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Header Section *********************/}
      <header className="section__container header__container" id="home">
        <div className="profile-pic">
          <img src={profile} alt="header" className="profile_img" />
        </div>

        <h1>
          I'm a Fullstack <span>Developer</span>
        </h1>
        <p>
          I’m a passionate Full Stack Developer with a strong foundation in both
          front-end and back-end technologies. With 3 years of experience in the
          web applications development field, I thrive on creating efficient,
          user-friendly applications that not only meet the needs of clients but
          also provide seamless experiences for end-users.
        </p>
        <div className="header__btns">
          <button className="btn" href="#contact">
            Get in Touch
          </button>
          <a href={CV} download>
            Download CV
          </a>
        </div>
      </header>
      {/* Experience With Section ******************/}
      <section className="section__container skill__container">
        <h2>EXPERIENCE WITH</h2>
        <ul className="skill__flex">
          <li>
            <span>
              <RiJavascriptFill />
            </span>
          </li>
          <li>
            <span>
              <GrReactjs />
            </span>
          </li>
          <li>
            <span>
              <FaHtml5 />
            </span>
          </li>
          <li>
            <span>
              <RiNodejsFill />
            </span>
          </li>
          <li>
            <span>
              <SiExpress />
            </span>
          </li>
          <li>
            <span>
              <RiTailwindCssLine />
            </span>
          </li>
          <li>
            <span>
              <IoLogoCss3 />
            </span>
          </li>
          <li>
            <span>
              <FaGithub />
            </span>
          </li>
        </ul>
      </section>
      {/* Services Section *****************/}
      <section className="section__container project__container" id="service">
        <h2>SERVICES</h2>
        <div className="project__grid">
          <div className="project__card">
            <div className="project__card__details">
              <div>
                <p>
                  <FaCode className="icon" /> Web Design
                </p>
                <h4>
                  We create websites from A to Z. We make sure that they are
                  responsive and fresh with remarkably clean design. We strive
                  to create highly-secure, stable and impressively fast ones.
                  Design and development of responsive websites that adapt to
                  different devices and screen sizes. Create visually appealing
                  and user-friendly interfaces for web applications. Writing
                  clean, efficient, and well-organized JavaScript code for
                  client-side scripting. Development of complex web applications
                  using popular JavaScript frameworks like React.
                </h4>
              </div>
              <a href="#">
                <FaArrowUp />
              </a>
            </div>
          </div>
          <div className="project__card">
            <div className="project__card__details">
              <div>
                <p>
                  <SiBackendless className="icon" /> Backend
                </p>
                <h4>
                  Providing the necessary framework to support a seamless and
                  efficient interaction between the client-side interface and
                  the data storage and processing layers. Design and implement
                  RESTful APIs or GraphQL endpoints that allow frontend
                  applications to communicate with the server efficiently.
                  Ensure that APIs are well-documented, versioned, and adhere to
                  best practices for usability and security (e.g.,
                  authentication, authorization).
                </h4>
              </div>
              <a href="#">
                <FaArrowUp />
              </a>
            </div>
          </div>
          <div className="project__card">
            <div className="project__card__details">
              <div>
                <p>
                  <LuSearchCode className="icon" /> Data Management
                </p>
                <h4>
                  Proficient in designing normalized database schemas using
                  experience with NoSQL databases like MongoDB focusing on
                  document storage, key-value pairs, and graph databases for
                  unstructured data handling. Understanding of relationships,
                  indexing, and query optimization. Implementation of
                  authentication and authorization mechanisms to protect
                  sensitive data (OAuth, JWT, etc.).
                </h4>
              </div>
              <a href="#">
                <FaArrowUp />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section */}
      <section className="section__container project__container" id="project">
        <h2>PROJECTS</h2>
        <div className="project__grid">
          <div className="project__card">
            <img src={pro4} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Seamless User Experience</p>
                <h4>Stunning Landing Page</h4>
              </div>
              <a href="#">
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
          <div className="project__card">
            <img src={pro3} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Best User Experience</p>
                <h4>E-commerce Website</h4>
              </div>
              <a href="#">
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
          <div className="project__card">
            <img src={pro2} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Discover New Destinations</p>
                <h4>Explore the World</h4>
              </div>
              <a href="#">
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
          <div className="project__card">
            <img src={pro1} alt="project" />
            <div className="project__card__details">
              <div>
                <p>Fast & Compartible With All Device</p>
                <h4>Login Page</h4>
              </div>
              <a href="#">
                <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section ******************/}
      <section
        className="section__container experience__container"
        id="experience"
      >
        <h2>EXPERIENCE</h2>
        <ul className="experience__list">
          <li>
            <div className="experience__header">
              <div>
                <img src={fastrack1} alt="fastrack" />
                <h4>Product Manager</h4>
              </div>
              <p>Jan 2021 - Apr 2022</p>
            </div>
            <p>
              As a Product Manager at FASTRACK, I spearheaded innovative
              projects, mentored a team of talented engineers, and played a
              crucial role in developing scalable solutions. My work involved
              leveraging cutting-edge technologies to enhance user experience
              and drive company growth.
            </p>
          </li>
          <li>
            <div className="experience__header">
              <div>
                <img src={fastrack1} alt="fastrack" />
                <h4>Junior Software Engineer</h4>
              </div>
              <p>Apr 2022 - Jan 2024</p>
            </div>
            <p>
              At FASTRACK, I contributed to the development of high-performance
              applications, collaborating with cross-functional teams to deliver
              seamless and user-friendly products. My role focused on optimizing
              web performance and implementing robust features that meet the
              high standards of FASTRACK ecosystem.
            </p>
          </li>
          <li>
            <div className="experience__header">
              <div>
                <img src={oic1} alt="oic" />
                <h4>Web Developer and Tutor</h4>
              </div>
              <p>Jan 2024 - Present</p>
            </div>
            <p>
              During my tenure at OIC, I honed my skills in front-end and
              back-end development, working on diverse projects that improved
              platform functionality. My responsibilities included coding,
              testing, and deploying web applications, as well as supporting
              senior engineers in creating innovative social media solutions.
            </p>
          </li>
        </ul>
      </section>
      {/* Footer Section ********************/}
      <footer>
        <div className="section__container footer__container" id="contact">
          <h2>Contact</h2>
          <p>
            I would love to hear from you! Whether you have a project in mind, a
            question about my work, or just want to connect, feel free to reach
            out. You can contact me via email or through my social media
            channels. I am always excited to collaborate with like-minded
            individuals and explore new opportunities.
          </p>
          <div className="mail__to">
            <a href="#">
              <span>
                <i className="ri-mail-line"></i>
              </span>
              <BiLogoGmail /> samuelolayinka2760@gmail.com
            </a>
          </div>
          <ul className="footer__socials">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100013664239245&mibextid=ZbWKwL">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EngrOlayinkaSam?t=BexamHv_YDe6cZ-IdDwdhA&s=09">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/olayinka-samuel-tobi-a7765110b">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/bezaleel_fret?igshid=ZDdkNTZiNTM=">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
