class App extends React.Component {
  render() {
    return (
      <div>
       <Friend
        name="Miguel"
        hobbies={['Basketball', 'Thinking', 'Coding', 'Reading']}
       />
        <Friend
          name="Frida"
          hobbies={['Drawing', 'Painting']}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))