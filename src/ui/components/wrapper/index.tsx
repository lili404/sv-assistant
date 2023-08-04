import React from 'react';
import NavBar from '../navbar/index';
import style from './wrapper.module.scss'

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) =>
  <div className={style.wrapper}>
    <NavBar />
    <div className={style.container}>
      {children}
    </div>
  </div>

export default Wrapper;