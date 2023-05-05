import { ChangeEvent, Component } from 'react';

type User = { name: string };
type CustomEvent<T> = Event & {
  target: T;
  // probably you might want to add the currentTarget as well
  // currentTarget: T;
};

const doFilter = (query: string) => (user: User) => query === user.name;

export class HigherOrderFunction extends Component<{}, { query: string }> {
  constructor(props: any) {
    super(props);

    this.state = {
      query: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ query: event.target?.value });
  }

  render() {
    const users: User[] = [{ name: 'Robin' }, { name: 'Markus' }];
    return (
      <div>
        <input placeholder="Enter Robin" type="text" onChange={this.onChange} />
        <ul>
          {users.filter(doFilter(this.state.query)).map((myuser) => (
            <li>{myuser.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const increament = (state: any) => ({ counter: state.counter + 1 });
const decriment = (state: any) => ({ counter: state.counter - 1 });

export class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(increament);
  };

  onDecrement = () => {
    this.setState(decriment);
  };

  render() {
    return (
      <div>
        <h3>HigherOrderFunction</h3>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </div>
    );
  }
}
