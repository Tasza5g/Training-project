import React, { Component } from 'react';

class EdytujKontakt extends Component{

    state = {
        id : this.props.match.params.id,
        dane : JSON.parse(localStorage.getItem("KT")),
        redirect : false
    }

    edytujKontakt = () => {
        this.state.dane[this.state.id].imie = document.querySelector("#imie").value;
        this.state.dane[this.state.id].nazwisko = document.querySelector("#nazwisko").value;
        this.state.dane[this.state.id].telefon = document.querySelector("#telefon").value;
        this.state.dane[this.state.id].email = document.querySelector("#email").value;

        localStorage.setItem("KT", JSON.stringify(this.state.dane));

       this.setState({redirect : true});

    }

    anuluj = () => {
        this.setState({redirect : true});

        
    }

  render(){

    if(this.state.redirect === true){
        window.location.href = "/";
    }

    return(
        <div>
        <p>
            Imię:<br/>
            <input type="text" name="imie" id="imie" defaultValue={this.state.dane[this.state.id].imie} />
        </p>
        <p>
            Nazwisko:<br/>
            <input type="text" name="nazwisko" id="nazwisko" defaultValue={this.state.dane[this.state.id].nazwisko} />
        </p>
        <p>
            Telefon:<br/>
            <input type="text" name="telefon" id="telefon" defaultValue={this.state.dane[this.state.id].telefon} />
        </p>
        <p>
            Email:<br/>
            <input type="text" name="email" id="email" defaultValue={this.state.dane[this.state.id].email} />
        </p>
        <p>
           <button onClick={this.edytujKontakt}>Zapisz dane</button>
           <button onClick={this.anuluj}>Anuluj</button>
        </p>

      </div>
    )

  }

}

export default EdytujKontakt;