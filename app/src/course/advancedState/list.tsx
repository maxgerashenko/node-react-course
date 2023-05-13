import { Story } from '../advancedState/data';
import './loading.scss';
// import styles from './list.module.scss';

export function Item({
  objectID,
  url,
  title,
  author,
  num_comments,
  points,
  onRemoveItem,
}: Story & { onRemoveItem: (item: Story) => void }) {
  return (
    <div className="listItem">
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
}
interface ListProps {
  list: Story[];
  onRemoveItem: (item: Story) => void;
}
export function List({ list, onRemoveItem }: ListProps): any {
  const itemList = list.map((item: Story) => (
    <Item key={item.objectID} {...item} onRemoveItem={onRemoveItem} />
  ));

  return (
    <div className="list-wrapper">
      <div className="list">{itemList}</div>
    </div>
  );
}
