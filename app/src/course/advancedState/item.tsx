import { logComponent } from '../advancedState/advancdedSate';
import { Story } from '../advancedState/data';
import styles from './list.module.scss';

export const Item = ({
  objectID,
  url,
  title,
  author,
  num_comments,
  points,
  onRemoveItem,
}: Story & { onRemoveItem: (item: Story) => void }) =>
  logComponent('list-item') && (
    <div className={`listItem ${styles.listItem}`}>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>{' '}
      <span>
        {' '}
        <button
          onClick={() =>
            onRemoveItem({
              url,
              title,
              author,
              num_comments,
              points,
              objectID,
            })
          }
          type="button"
        >
          Dismiss{' '}
        </button>{' '}
      </span>
    </div>
  );
