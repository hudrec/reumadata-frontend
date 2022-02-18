import React, {Component} from 'react';
//import "../styles.scss";
import api from "../../../services/api"
import {style} from "typestyle";

const className = style({
  opacity: 100,
  position: "fixed",
  zIndex: 10,
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  backgroundImage: "url(./images/back_login.jpg)",
})

const doctors= require("../../../assets/img/doctors.jpg")
const login= require("../../../assets/img/back_login.jpg")

class Login extends Component {
  constructor(props) {
    super(props);
    this._login = this._login.bind(this);
  }
  _login(event){
    event.preventDefault();
    let self = this;
    api.loginAPI(this.state.email, this.state.password)
      .then((response) => {
        if (response.error) {
          self.form.showError(self.passw, login());
        }
        else {
          self.props.history.push('/')
        }
      })
      .catch((response) => {
        if (!response.is_active){
          alert('User not Authorized');
          return false
        }
        if (!response.is_confirmed){
          this.setState({isConfirm: false})
          return false
        }
        self.form.showError(self.passw, login())
      });
  }
  render(){
    return (
      <div className={"w-full bg-cover bg-center "+className} >
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50"
        >
          <div className="w-full max-w-lg">
            <div className="leading-loose">
              <form
                className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
              >
                <img src={doctors.default} />
                <p className="text-white font-medium text-center text-lg font-bold">
                  BIENVENIDO
                </p>
                <div className="">
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="email"
                    id="email"
                    placeholder="Usuario"
                    aria-label="email"
                    required
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                    type="password"
                    id="password"
                    placeholder="Contraseña"
                    arial-label="password"
                    required
                  />
                </div>

                <div className="mt-4 w-full items-center flex justify-between">
                  <button
                    onClick={this._login}
                    className="text-white font-bold w-full px-4 py-1 text-white font-light tracking-wider  hover:bg-gray-800 rounded"
                  >
                    ENTRAR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;