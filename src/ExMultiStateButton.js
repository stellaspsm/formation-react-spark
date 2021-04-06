import { Component } from "react";

class ExMultiStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      //avec cette écriture, il faut le même nom de variable (index) pour celle de state et
      //celle crée
    const { index } = this.state;
    console.log('index : ' + index);
    this.setState({
        index: index < 2 ? index + 1 : 0,
    });
  }


  render() {
  const { values } = this.props;
    return (
      <button className="ExMultiStateButton" onClick={this.handleClick}>
        {/*
         * par défaut, afficher le premier élément de values
         * à chaque click du bouton, afficher la valeur suivante
         * s'il n'y a plus de valeur suivante, afficher la première
         * valeur du tableau values
         */}
         {values[this.state.index]}
      </button>
    );
  }
}

export default ExMultiStateButton;