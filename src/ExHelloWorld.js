import { Component } from "react";

class ExHelloWorld extends Component {
  constructor() {
    super();
    this.state = {
        prenom: '',
    };
    this.input = this.input.bind(this);
  }

  input(event) {
    console.log('input value : ' + event.target.value);
    const prenom = event.target.value;
    this.setState({
        prenom: prenom,
    });
  }

  render() {
    const {prenom} = this.state;
    return (
      <div className="ExHelloWorld">
        <div>
          {/* on peut mettre onChange, React agrège les évènements équivalent selon le composant
          * onClick, oninput, onchange... */}
          Prénom : <input type="text" onInput={this.input}/>
          {/*
           * écouter l'événement input et mettre à jour le state avec
           * le contenu de la balise input (propriété value d'un HTMLInputElement)
           */}
        </div>
        <p>Bonjour {prenom/* afficher en temps réel le prénom saisi */}</p>
      </div>
    );
  }
}

export default ExHelloWorld;