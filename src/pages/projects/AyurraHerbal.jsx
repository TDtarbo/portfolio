import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Transition from "../../components/utils/Transitions";
import { MenuBtnContext } from "../../contexts/MenuBtnContext";
import HeroImage from "../../assets/projects/ayuura/ah001.png";
import ProductImage from "../../assets/projects/ayuura/ah002.png";
import ScreenImage003 from "../../assets/projects/ayuura/ah003.png";
import ScreenImage004 from "../../assets/projects/ayuura/ah004.png";
import ScreenImage005 from "../../assets/projects/ayuura/ah005.png";
import ScreenImage006 from "../../assets/projects/ayuura/ah006.png";
import styles from "./ayurraHerbal.module.css";

const gallerySlots = [
  [ScreenImage003, "Product catalogue", "Browsing products and categories"],
  [ScreenImage004, "Product detail", "Product information and reviews"],
  [ScreenImage005, "Cart and checkout", "The order and checkout flow"],
  [ScreenImage006, "Mobile storefront", "Responsive shopping experience"],
];

const AyurraHerbal = () => {
  const { isOpen } = useContext(MenuBtnContext);
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeScreenData = gallerySlots[activeScreen];
  const otherScreens = gallerySlots
    .map((screen, index) => ({ screen, index }))
    .filter(({ index }) => index !== activeScreen);

  return (
    <main className={`${isOpen ? styles.shrink : ""} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Web project</p>
          <h1>
            Ayurra <em>Herbal</em>
          </h1>
          <p className={styles.lead}>
            A responsive online store for a herbal-products brand. Customers can
            browse products, add them to a cart, and place cash-on-delivery
            orders.
          </p>
          <div className={styles.heroDetails}>
            <span>Next.js · TypeScript · Tailwind</span>
            <span>Web development · UX</span>
          </div>
          <a
            className={styles.demoLink}
            href="https://ayurraherbal.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit live demo <b>↗</b>
          </a>
        </div>
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={HeroImage} alt="Ayurra Herbal storefront homepage" />
        </motion.div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introLabel}>
          <span>01</span>
          <p>About the project</p>
        </div>
        <div className={styles.introContent}>
          <h2>
            Making herbal products easier to <em>find and buy.</em>
          </h2>
          <p>
            I built Ayurra Herbal as a complete online storefront. The goal was
            to help customers understand the products and place an order without
            needing to create an account.
          </p>
          <p>
            The website includes product categories, product detail pages,
            reviews, a cart that stays after refresh, and a checkout form for
            cash-on-delivery orders.
          </p>
        </div>
      </section>

      <div className={styles.sectionBridge} aria-hidden="true">
        <img src={ProductImage} alt="" />
      </div>

      <section className={styles.principlesSection}>
        <div className={styles.principleHeading}>
          <p className={styles.eyebrow}>Main goals</p>
          <h2>
            Easy for customers.
            <br />
            <span>Easy for the business.</span>
          </h2>
        </div>
        <div className={styles.principles}>
          <article>
            <b>01</b>
            <h3>Find products quickly</h3>
            <p>
              Customers can use categories, featured products, ratings, reviews,
              and product pages to learn more before buying.
            </p>
          </article>
          <article>
            <b>02</b>
            <h3>Order without an account</h3>
            <p>
              Customers do not need to sign up. Their cart stays after a
              refresh, and checkout only asks for delivery details.
            </p>
          </article>
          <article>
            <b>03</b>
            <h3>Manage orders easily</h3>
            <p>
              Orders, contact messages, and newsletter emails are saved in
              separate Google Sheets tabs for the business to review.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.flowSection}>
        <div className={styles.flowTitle}>
          <p className={styles.eyebrow}>How it works</p>
          <h2>
            From opening the site
            <br />
            to getting an <em>order number.</em>
          </h2>
        </div>
        <div className={styles.flow}>
          <span>
            01 <strong>Browse products</strong>
          </span>
          <i>→</i>
          <span>
            02 <strong>View details</strong>
          </span>
          <i>→</i>
          <span>
            03 <strong>Add to cart</strong>
          </span>
          <i>→</i>
          <span>
            04 <strong>Fill checkout</strong>
          </span>
          <i>→</i>
          <span>
            05 <strong>Get invoice</strong>
          </span>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHeading}>
          <p className={styles.eyebrow}>Project screens</p>
          <p>Some of the main screens from the Ayurra Herbal storefront.</p>
        </div>
        <div className={styles.gallery}>
          <figure
            key={activeScreenData[1]}
            className={`${styles.gallerySlot} ${styles.gallerySlotActive}`}
          >
            <img src={activeScreenData[0]} alt={activeScreenData[1]} />
            <span>0{activeScreen + 1}</span>
            <figcaption>
              <strong>{activeScreenData[1]}</strong>
              <small>{activeScreenData[2]}</small>
            </figcaption>
          </figure>
          <div className={styles.galleryThumbs}>
            {otherScreens.map(({ screen, index }) => {
              const [image, title, hint] = screen;
              return (
                <figure
                  key={title}
                  className={styles.gallerySlot}
                  onClick={() => setActiveScreen(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ")
                      setActiveScreen(index);
                  }}
                  tabIndex="0"
                  role="button"
                  aria-label={`Expand ${title}`}
                >
                  <img src={image} alt={title} />
                  <span>0{index + 1}</span>
                  <figcaption>
                    <strong>{title}</strong>
                    <small>{hint}</small>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.architectureSection}>
        <div>
          <p className={styles.eyebrow}>How I built it</p>
          <h2>The tools and systems behind the storefront.</h2>
        </div>
        <div className={styles.architectureList}>
          <p>
            <b>Next.js and TypeScript</b>
            <span>
              I used Next.js for the pages, layouts, product routes, and server
              API routes. TypeScript helped keep the product and order data
              organised.
            </span>
          </p>
          <p>
            <b>Cart and localStorage</b>
            <span>
              The cart is saved in the browser, so it stays available when the
              customer refreshes the page.
            </span>
          </p>
          <p>
            <b>Google Sheets</b>
            <span>
              Orders, contact messages, and newsletter subscriptions are added
              to separate spreadsheet tabs.
            </span>
          </p>
          <p>
            <b>PDF invoice</b>
            <span>
              After an order is placed, the customer gets an order reference and
              can download an invoice in the browser.
            </span>
          </p>
        </div>
      </section>

      <section className={styles.reflectionSection}>
        <p className={styles.eyebrow}>What I learned</p>
        <h2>
          Building a real store from <em>front to back.</em>
        </h2>
        <p>
          This project helped me understand how an online store works as a
          complete system. I worked on the interface, product data, cart,
          checkout form, order handling, and invoice generation.
        </p>
        <p>
          I also learned that Google Sheets is useful for a small project, but
          it is not a replacement for a proper database. Payments, stock
          management, authentication, and stronger validation would be the next
          improvements.
        </p>
      </section>

      <footer className={styles.footer}>
        <span>End of case study</span>
        <Link to="/mywork">Back to all work ↗</Link>
      </footer>
    </main>
  );
};

export default Transition(AyurraHerbal);
