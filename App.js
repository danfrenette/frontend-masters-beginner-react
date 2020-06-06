const Pet = props => {
  const { animal, breed, name } = props;
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, [
      React.createElement("h1", {}, name),
      React.createElement("h2", {}, animal),
      React.createElement("h2", {}, breed)
    ])
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me You Fuck!"),
    React.createElement(Pet, {
      name: "suh dude",
      animal: "Dog",
      breed: "unicorn"
    }),
    React.createElement(Pet, {
      name: "bruhh",
      animal: "explosion",
      breed: "fiery"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "cat",
      breed: "unicorn"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
