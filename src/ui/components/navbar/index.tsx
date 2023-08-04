import React, { useRef } from 'react';
import styles from './navbar.module.scss';

import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


import { Link } from 'react-router-dom';

interface SidebarLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

const links: SidebarLink[] = [
  {
    label: 'Analyzer',
    url: 'analyzer',
    icon: <TimelineOutlinedIcon style={{ fontSize: '30px', fill: '#AE90EE' }} />
  },
  {
    label: 'Wiki',
    url: 'wiki',
    icon: <ClassOutlinedIcon style={{ fontSize: '30px', fill: '#AE90EE' }} />
  },
  {
    label: 'Settings',
    url: 'settings',
    icon: <SettingsOutlinedIcon style={{ fontSize: '30px', fill: '#AE90EE' }} />
  }
];

const NavBar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (navbarRef.current) {
      navbarRef.current.style.width = `${navbarRef.current?.scrollWidth}px`;
    }
  };

  const handleMouseLeave = () => {
    if (navbarRef.current) {
      navbarRef.current.style.width = `110px`;
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.overlay}></div>
      <div className={styles.placeholder}></div>
      <div
        ref={navbarRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.navbarBody}>
        <div className={styles.categoryLogo}>
          <div className={styles.logoContainer}>
            <div className={styles.logoIcon}></div>
          </div>
          <div className={styles.labelContainer}>
            <div className={styles.gameTitle}>Stardew Valley</div>
            <div className={styles.appTitle}>Assistant</div>
          </div>
        </div>
        <ul className={styles.links}>
          {links.map((link) => <li className={styles.category}>
            <Link to={link.url}>
              <div className={styles.categorySection}>
                <div className={styles.icon}>{link.icon}</div>
                <div className={styles.label}>{link.label}</div>
              </div>
            </Link>
          </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;