import { Story } from '../advancedState/data';

interface ItemProps {
  item: Story;
  onRemoveItem: (item: Story) => void;
}
export function Item({ item, onRemoveItem }: ItemProps) {
  return (
    <div>
      {' '}
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>{' '}
      <span>
        {' '}
        <button type="button" onClick={() => onRemoveItem(item)}>
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
  return list.map((item: Story) => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ));
}
