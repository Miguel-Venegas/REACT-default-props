class Friend extends React.Component {
  render() {
    const {name, hobbies} = this.props;
    const hobby = hobbies.map(h => <li>{h}</li>);
    console.log(this.props);
    return (
      <div>
        <p>My friend's name is {name}. His hobbies are the following:</p>
        <ul>
          {hobby}
        </ul>
      </div>
    )
  }
}