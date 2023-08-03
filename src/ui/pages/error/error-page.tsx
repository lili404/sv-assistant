import { useRouteError } from 'react-router-dom';
import styles from './error.module.scss';

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  const typedError = error as any;

  return (
    <div className={styles['error-page']}>
      <h1>Something went wrong!</h1>
      <p>Go fix your shit.</p>
      <p>
        <i>{typedError.statusText || typedError.message}</i>
      </p>
    </div>
  );
}