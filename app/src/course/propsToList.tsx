import { useState } from 'react';

interface Article {
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
  objectID: number;
}

function List(props: { list: Article[] }) {
  return (
    <div>
      {props.list.map((item: Article) => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>

          <span>{item.author}</span>

          <span>{item.num_comments}</span>

          <span>{item.points}</span>
        </div>
      ))}
    </div>
  );
}

export function PropsToList() {
  const [stories, setStories] = useState([
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ] as Article[]);
  return (
    <div>
      <h3>PropsToList</h3>

      <List list={stories} />
    </div>
  );
}
