
import "./App.css";

function App() {
  //replaces a character of string at index i
  String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
      return this.valueOf();
    }
    var chars = this.split("");
    chars[index] = replacement;
    return chars.join("");
  };

  //function to encipher/decipher text according to algorithm
  function convert(text) {
    //iterate over the input
    for (let i = 0; i < text.length; i++) {
      let curr = text.charCodeAt(i);

      //maps ABCDEFGHIJKLMNOPQRSTUVWXYZ to ZYXWVUTSRQPONMLKJIHGFEDCBA respectively
      if (curr >= 65 && curr <= 90)
        text = text.replaceAt(i, String.fromCharCode(90 - curr + 65));
      //maps abcdefghijklmnopqrstuvwxyz to zyxwvutsrqponmlkjihgfedcba respectively
      else if (curr >= 97 && curr <= 122)
        text = text.replaceAt(i, String.fromCharCode(122 - curr + 97));
    }
    return text;
  }

  //triggers on clicking the encipher button
  function plainToCipher() {
    var plaintext = document.getElementById("plaintext");
    var ciphertext = document.getElementById("ciphertext");

    //encipher plaintext to ciphertext
    ciphertext.value = convert(plaintext.value);
  }

  //triggers on cicking the decipher button
  function cipherToPlain() {
    var ciphertext = document.getElementById("ciphertext");
    var plaintext = document.getElementById("plaintext");

    //decipher ciphertext to plaintext
    plaintext.value = convert(ciphertext.value);
  }

  return (
    <div className="App">
      <section id="box">
        <div className="section-content">
          <h1 className="section-header">
            <span className="content-header wow fadeIn ">
              Encipher/Decipher
            </span>
          </h1>
        </div>
        <div className="box-section">
          <div className="container">
            <form>
              <div className="col-md-6 form-line">
                <div className="form-group">
                  <label>plaintext</label>
                  <textarea
                    className="form-control"
                    id="plaintext"
                    spellcheck="false"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-default submit"
                    onClick={plainToCipher}
                  >
                    Encipher
                  </button>
                </div>
              </div>
            </form>
            <form>
              <div className="col-md-6">
                <div className="form-group">
                  <label>ciphertext</label>
                  <textarea
                    className="form-control"
                    id="ciphertext"
                    spellcheck="false"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-default submit"
                    onClick={cipherToPlain}
                  >
                    Decipher
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
