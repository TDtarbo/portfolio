import  { useState } from 'react';
import styles from '../styles/modules/Header.module.css';
import logo from '../assets/logo-small.svg';
import Navigation from "./Navigation";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const {mouseEnter, mouseLeave, mouseClick} = props

  const headerTitle = '< DevThilina />';

  const handleToggle = () => {
    mouseClick()
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles["overlay-open"] : ''}`}>
        <Navigation mouseClick={handleToggle} mouseLeave={mouseLeave}/>
      </div>
      <header className={`${styles['header-wrapper']} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles['header-container']} ${isOpen ? styles.open : ''}`}>
          <div className={styles['logo-container']}>
            <img className={`${styles.logo} ${isOpen ? styles["logo-open"] : ''}`} src={logo} />
            <span className={`${styles['header-title']} ${isOpen ? styles["header-title-open"] : ''}` } data-text={headerTitle}>
              {headerTitle}
            </span>
          </div>
          <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={handleToggle} className={`${styles['hamburger-toggle']} ${isOpen ? styles["hamburger-toggle-open"] : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
