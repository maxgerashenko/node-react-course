import { Component } from 'react';
// import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class FetchComponent extends Component<{}, { title: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: 'Hello!',
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then((response) => response.json())
      .then((data: any) => this.setState({ title: data.hits[0].title }));
    // axios
    //   .get('https://api.mydomain.com')
    //   .then((data) => this.setState({ data }));
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
