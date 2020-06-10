import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      const {
        name,
        type,
        description,
        photos,
        breeds,
        contact: { address }
      } = animal;

      this.setState({
        name: name,
        animal: type,
        location: `${address.city}, ${address.city}`,
        description: description,
        media: photos,
        breed: breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading the floof</h1>;
    }
    const { animal, breed, location, description, name } = this.state

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

export default Details;
