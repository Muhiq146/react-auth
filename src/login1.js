import React,{useState} from 'react'

export default function login1() {
  const data = [];
  const [name, setName] = useState(true);
  const changeName = () => {
    if (name === true) {
      setName(false);
    } else {
      setName(true);
    }
  };
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPass, setSignInPass] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPass, setSignUpPass] = useState("");

  const signIn = () => {
    signInVal();
  };

  const signUp = () => {
    if (signUpVal()) {
      const a = {
        name: signUpName,
        email: signUpEmail,
        pass: signUpPass,
      };
      data.push(a);
      // First get all the details from LocalStorage...
      let allUserData = localStorage.getItem('key');
      console.log(`allUserData ::: `, allUserData);
      console.log(`New user data ::: `, data);
      
      let updatedData = JSON.parse(allUserData);
      updatedData.push(...data);
      console.log(`updatedData data ::: `, updatedData);
      localStorage.setItem("key", JSON.stringify(updatedData));
      // setSignUpName("");
      // setSignUpEmail("");
      // setSignUpPass("");
      setName(true);
      console.log(data);
    }
  };

  const signInVal = () => {
    if (signInEmail === "" || signInPass === "") {
      alert("fired");
      return false;
    }
  };

  const signUpVal = () => {
    if (signUpName === "" || signUpEmail === "" || signUpPass === "") {
      alert("Please fill all the feilds.");
      return false;
    }else{
      return true;
    }
  };
  return (
    <div>
      {name === true ? (
        // This code is for signIn
        <div
          className="card p-4"
          style={{
            marginTop: "60%",
            backgroundColor: "skyblue",
            width: "350px",
            height: "400px",
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
            onChange={(e) => setSignInEmail(e.target.value)}
            className="mt-2 mx-auto form-control"
            type="email"
            value={signInEmail}
            placeholder="Email"
          />
          <input
            id="passVal"
            onChange={(e) => setSignInPass(e.target.value)}
            className="mt-2 mx-auto form-control"
            type="password"
            value={signInPass}
            placeholder="Password"
          />
          <button
            className="mt-3 mx-auto btn btn-sm btn-outline-primary"
            onClick={signIn}
          >
            Sign In
          </button>
          <p className="mt-4" style={{ textAlign: "center" }}>
            Don't have an account?
          </p>
          <button
            className="mx-auto btn btn-sm btn-outline-primary"
            onClick={changeName}
          >
            Sign Up
          </button>
        </div>
      ) : (
        // This code is for signUp
        <div
          className="card p-4"
          style={{
            marginTop: "60%",
            backgroundColor: "skyblue",
            width: "350px",
            height: "400px",
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
            onChange={(e) => setSignUpName(e.target.value)}
            className="mt-2 mx-auto form-control"
            type="text"
            value={signUpName}
            placeholder="Name"
          />
          <input
            onChange={(e) => setSignUpEmail(e.target.value)}
            className="mt-2 mx-auto form-control"
            type="email"
            value={signUpEmail}
            placeholder="Email"
          />
          <input
            onChange={(e) => setSignUpPass(e.target.value)}
            className="mt-2 mx-auto form-control"
            type="Password"
            value={signUpPass}
            placeholder="Password"
          />
          <button
            className="mt-3 mx-auto btn btn-sm btn-outline-primary"
            onClick={signUp}
          >
            Sign Up
          </button>
          <p className="mt-4" style={{ textAlign: "center" }}>
            Already have an account?
          </p>
          <button
            className="mx-auto btn btn-sm btn-outline-primary"
            onClick={changeName}
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  )
}
