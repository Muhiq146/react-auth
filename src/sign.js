import React from "react";
import { withRouter } from "react-router-dom";

class Sign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
      name: true,
      signInEmail: "",
      signInPass: "",
      signUpName: "",
      signUpEmail: "",
      signUpPass: "",
      signUpText: "",
      signUpOption: "",
      signUpGender: "",
      signUpHobbies: [],
      signInEmailMsg: false,
      signInPassMsg: false,
      signUpNameMsg: false,
      signUpEmailMsg: false,
      signUpPassMsg: false,
      signUpTextMsg: false,
      signUpOptionMsg: false,
      signUpGenderMsg: false,
      data: [],
    };
  }

  changeName = () => {
    if (this.state.name === true) {
      this.setState({ name: false });
    } else {
      this.setState({ name: true });
    }
  };

  signIn = () => {
    if (this.signInVal()) {
      var h = JSON.parse(localStorage.getItem("Key"));
      // console.log(h);
      for (var i = 0; i < h.length; i++) {
        if (
          this.state.signInEmail === h[i].email &&
          this.state.signInPass === h[i].pass
        ) {
          this.props.history.push("/dashboard", {
            name: h[i].name,
            desc: h[i].description,
          });
          this.setState({ setstate: true });
          localStorage.setItem("login", true);
          this.setState({ signInEmail: "" });
          this.setState({ signInPass: "" });
        } else {
          alert("Please enter valid details!");
        }
      }
      // console.log(h);
      // console.log(this.state.signInEmail);
      // console.log(this.state.signInPass);
    }
  };

  signUp = () => {
    if (this.signUpVal()) {
      const a = {
        name: this.state.signUpName,
        email: this.state.signUpEmail,
        pass: this.state.signUpPass,
        description: this.state.signUpText,
        level: this.state.signUpOption,
        gender: this.state.signUpGender,
        hobbies: this.state.signUpHobbies,
      };
      this.state.data.push(a);
      localStorage.setItem("Key", JSON.stringify(this.state.data));
      // console.log(this.state.data);
      this.setState({ signUpName: "" });
      this.setState({ signUpEmail: "" });
      this.setState({ signUpPass: "" });
      this.setState({ signUpText: "" });
      this.setState({ signUpGender: "" });
      this.setState({ signUpOption: "" });
      // console.log(this.state.signUpName);
      // console.log(this.state.signUpEmail);
      // console.log(this.state.signUpPass);
      this.setState({ name: true });
    }
    // console.log(this.state.signUpHobbies);
  };

  signInVal = () => {
    if (this.state.signInEmail === "" || this.state.signInPass === "") {
      if (this.state.signInEmail === "") {
        this.setState({ signInEmailMsg: true });
      }
      if (this.state.signInPass === "") {
        this.setState({ signInPassMsg: true });
      }
      // alert("fired");
      return false;
    } else {
      return true;
    }
  };

  signUpVal = () => {
    if (
      this.state.signUpName === "" ||
      this.state.signUpEmail === "" ||
      this.state.signUpPass === "" ||
      this.state.signUpText === "" ||
      this.state.signUpOption === "" ||
      this.state.signUpGender === ""
    ) {
      if (this.state.signUpName === "") {
        this.setState({ signUpNameMsg: true });
      }
      if (this.state.signUpPass === "") {
        this.setState({ signUpPassMsg: true });
      }
      if (this.state.signUpEmail === "") {
        this.setState({ signUpEmailMsg: true });
      }
      if (this.state.signUpText === "") {
        this.setState({ signUpTextMsg: true });
      }
      if (this.state.signUpGender === "") {
        this.setState({ signUpGenderMsg: true });
      }
      if (this.state.signUpOption === "") {
        this.setState({ signUpOptionMsg: true });
      }
      // alert("please fill all the feilds.");
      return false;
    } else {
      return true;
    }
  };

  onNameValue = (e) => {
    this.setState({ signUpName: e.target.value });
    this.setState({ signUpNameMsg: false });
  };

  onEmailValue = (e) => {
    this.setState({ signUpEmail: e.target.value });
    this.setState({ signUpEmailMsg: false });
  };
  onEmailsValue = (e) => {
    this.setState({ signInEmail: e.target.value });
    this.setState({ signInEmailMsg: false });
  };

  onPassValue = (e) => {
    this.setState({ signUpPass: e.target.value });
    this.setState({ signUpPassMsg: false });
  };
  onPasssValue = (e) => {
    this.setState({ signInPass: e.target.value });
    this.setState({ signInPassMsg: false });
  };

  onTextValue = (e) => {
    this.setState({ signUpText: e.target.value });
    this.setState({ signUpTextMsg: false });
  };

  onGenderValue = (e) => {
    this.setState({ signUpGender: e.target.value });
    this.setState({ signUpGenderMsg: false });
    // console.log(this.state.signUpGender);
  };

  onOptionValue = (e) => {
    this.setState({ signUpOption: e.target.value });
    this.setState({ signUpOptionMsg: false });
    // console.log(this.state.signUpOption);
  };

  onHobbiesValue = (e) => {
    const target = e.target;
    // console.log(e.target.checked);
    var value = target.value;
    if (target.checked) {
      this.state.signUpHobbies.push(value);
    } else {
      let g = this.state.signUpHobbies;
      g.pop(`${value}`);
      // console.log(g);
    }
    // console.log(this.state.signUpHobbies);
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {this.state.name === true ? (
          // This code is for signIn
          <div
            className="card p-4"
            style={{
              marginTop: "10%",
              backgroundColor: "skyblue",
              width: "350px",
            }}
          >
            <h3
              className="mt-4"
              style={{
                textAlign: "center",
                fontWeight: "300",
                lineHeight: "1.2",
              }}
            >
              Sign in
            </h3>
            <input
              id="emaVal"
              onChange={this.onEmailsValue}
              className="mt-2 mx-auto form-control"
              type="email"
              value={this.state.signInEmail}
              placeholder="Email"
            />
            {this.state.signInEmailMsg === true ? (
              <div className="text-danger">Please fill this feild.</div>
            ) : (
              <div></div>
            )}
            <input
              id="passVal"
              onChange={this.onPasssValue}
              className="mt-2 mx-auto form-control"
              type="password"
              value={this.state.signInPass}
              placeholder="Password"
            />
            {this.state.signInPassMsg === true ? (
              <div className="text-danger">Please fill this feild.</div>
            ) : (
              <div></div>
            )}
            <button
              className="mt-3 mx-auto btn btn-sm btn-outline-primary"
              onClick={() => this.signIn()}
            >
              Sign In
            </button>
            <p className="mt-4" style={{ textAlign: "center" }}>
              Don't have an account?
            </p>
            <button
              className="mx-auto btn btn-sm btn-outline-primary"
              onClick={() => this.changeName()}
            >
              Sign Up
            </button>
          </div>
        ) : (
          // This code is for signUp
          <div
            className="card p-4"
            style={{
              marginTop: "2%",
              backgroundColor: "skyblue",
              width: "350px",
            }}
          >
            <h3
              className="mt-4"
              style={{
                textAlign: "center",
                fontWeight: "300",
                lineHeight: "1.2",
              }}
            >
              Sign Up
            </h3>
            <input
              onChange={this.onNameValue}
              className="mt-2 mx-auto form-control"
              type="text"
              value={this.state.signUpName}
              placeholder="Name"
            />
            {this.state.signUpNameMsg === true ? (
              <div className="text-danger">Please enter your name.</div>
            ) : (
              <div></div>
            )}
            <input
              onChange={this.onEmailValue}
              className="mt-2 mx-auto form-control"
              type="email"
              value={this.state.signUpEmail}
              placeholder="Email"
            />
            {this.state.signUpEmailMsg === true ? (
              <div className="text-danger">Please enter your email.</div>
            ) : (
              <div></div>
            )}
            <input
              onChange={this.onPassValue}
              className="mt-2 mx-auto form-control"
              type="Password"
              value={this.state.signUpPass}
              placeholder="Password"
            />
            {this.state.signUpPassMsg === true ? (
              <div className="text-danger">Please enter password.</div>
            ) : (
              <div></div>
            )}
            <div className="input-group mt-2 mx-auto">
              <textarea
                className="form-control"
                onChange={this.onTextValue}
                placeholder="Description"
                value={this.state.signUpText}
                aria-label="With textarea"
              ></textarea>
            </div>
            {this.state.signUpTextMsg === true ? (
              <div className="text-danger">Please enter your description.</div>
            ) : (
              <div></div>
            )}
            {/* Dropdown */}
            <div className="input-group mb-3 mt-2">
              <label className="input-group-text">Options</label>
              <select
                className="form-select"
                value={this.state.signUpOption}
                onChange={this.onOptionValue}
              >
                <option>Choose your level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            {this.state.signUpOptionMsg === true ? (
              <div className="text-danger">Please choose any option.</div>
            ) : (
              <div></div>
            )}
            {/* Radio Button Section */}
            <div className="mt-3" onChange={this.onGenderValue}>
              <p>Gender</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                />
                Male
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="female"
                />
                Female
              </div>
            </div>
            {this.state.signUpGenderMsg === true ? (
              <div className="text-danger">Please select your gender</div>
            ) : (
              <div></div>
            )}
            {/* CheckBox Section */}
            <div className="mt-3">
              <p>Hobbies</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Music"
                  name="Hobbies"
                  onChange={this.onHobbiesValue}
                />
                Music
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Cricket"
                  name="Hobbies"
                  onChange={this.onHobbiesValue}
                />
                Cricket
              </div>
            </div>
            <button
              className="mt-3 mx-auto btn btn-sm btn-outline-primary"
              onClick={() => this.signUp()}
            >
              Sign Up
            </button>
            <p className="mt-4" style={{ textAlign: "center" }}>
              Already have an account?
            </p>
            <button
              className="mx-auto btn btn-sm btn-outline-primary"
              onClick={() => this.changeName()}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Sign);
