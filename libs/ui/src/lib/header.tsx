import styles from './header.module.css';
import { Menu, Container, Icon, Label } from 'semantic-ui-react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>
    </div>
  );
}

export default Header;
