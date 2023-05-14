import { Story } from './data';
import './loading.scss';
import styles from './list.module.scss';
import { memo } from 'react';
import { logComponent } from '../advancedState/advancdedSate';

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

interface ListProps {
  list: Story[];
  onRemoveItem: (item: Story) => void;
}
export const List = memo(
  function List({ list, onRemoveItem }: ListProps): any {
    const itemList = list.map((item: Story) => (
      <Item key={item.objectID} {...item} onRemoveItem={onRemoveItem} />
    ));

    return (
      logComponent('list') && (
        <div className={`listWrapper ${styles.listWrapper}`}>
          <div className="list">{itemList}</div>
        </div>
      )
    );
  },
  (pre, next) => pre.list === next.list
);
