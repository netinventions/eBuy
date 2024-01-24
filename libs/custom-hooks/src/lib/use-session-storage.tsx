import styles from './use-session-storage.module.css';

/* eslint-disable-next-line */
export interface UseSessionStorageProps {}

export function UseSessionStorage(props: UseSessionStorageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UseSessionStorage!</h1>
    </div>
  );
}

export default UseSessionStorage;
