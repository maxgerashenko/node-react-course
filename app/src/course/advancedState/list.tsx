import { Story } from './data';
import './loading.scss';
import styles from './list.module.scss';
import { memo } from 'react';
import { logComponent } from '../advancedState/advancdedSate';
import { Item } from '../advancedState/item';

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
