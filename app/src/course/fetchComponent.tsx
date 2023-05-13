import { Component } from 'react';
// Import axios from 'axios';

export default class FetchComponent extends Component<
  object,
  { title: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Hello!',
    };
  }

  componentDidMount() {
    const url = `${process?.env?.REACT_APP_API_ENDPOINT || 'bad endpoint'}${
      process?.env?.REACT_APP_DEFAULT_QUERY || 'default request'
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data: any) => this.setState({ title: data.hits[0].title }));

    /*
     * Axios
     *   .get('https://api.mydomain.com')
     *   .then((data) => this.setState({ data }));
     */
  }

  render() {
    return (
      <div>
        <h3> Fetch </h3>

        <p>{this.state.title}</p>
      </div>
    );
  }
}
