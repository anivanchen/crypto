import { Fragment, useState } from 'react';
import './app.css';

function App() {

  const container = {
    width: "40%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    overflowWrap: "break-word",
  }
  const input = {
    width: "100%",
    margin: "10px 0 10px",
    outline: "none",
    padding: "5px",
    border: "none",
    borderBottom: "1px solid black",
    textAlign: "center",
  }
  const button = {
    color: "white",
    border: "none",
    backgroundColor: "#008CBA",
    padding: "5px 10px",
    margin: "10px 0 0",
  }

  const [message, setMessage] = useState("");
  const [pass, setPass] = useState("");
  const [dmessage, setMessage2] = useState("");
  const [dpass, setPass2] = useState("");

  const encrypt = e => {
    e.preventDefault();
    const Crypto = require('crypto');
    let key = Crypto.createCipher('aes-256-cbc', pass);
    let str = key.update(message, 'utf8', 'hex');
    str += key.final('hex');

    document.getElementById("encryptedOutput").innerHTML = str;
    document.getElementById("encryptedOutput").style.color = "red";
  }
  const decrypt = e => {
    e.preventDefault();
    const Crypto = require('crypto');
    let key = Crypto.createDecipher('aes-256-cbc', dpass);
    let str = key.update(dmessage, 'hex', 'utf8');
    str += key.final('utf8');

    document.getElementById("decryptedOutput").innerHTML = str;
    document.getElementById("decryptedOutput").style.color = "red";
  }

  return (
    <Fragment>
      <div style={container}>

        <h2>Encrypt</h2>
        <form>
          <input type="text" style={input} placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required></input>
          <input type="password" style={input} placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required></input>
          <button style={button} onClick={encrypt}>Encrypt</button>
          <p id="encryptedOutput">Output</p>
        </form>

        <h2>Decrypt</h2>
        <form>
          <input type="text" style={input} placeholder="Message" value={dmessage} onChange={e => setMessage2(e.target.value)} required></input>
          <input type="password" style={input} placeholder="Password" value={dpass} onChange={e => setPass2(e.target.value)} required></input>
          <button style={button} onClick={decrypt}>Decrypt</button>
          <p id="decryptedOutput">Output</p>
        </form>

      </div>
    </Fragment>
  );
}

export default App;
