import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <img src="./logo.svg" className="AppIcon icon1" alt="react-logo" />
        <img src="./logo.svg" className="AppIcon icon2" alt="react-logo" />
        <img src="./logo.svg" className="AppIcon icon3" alt="react-logo" />

        <img src="./logo.svg" className="AppIcon icon4" alt="react-logo" />
        <img src="./logo.svg" className="AppIcon icon5" alt="react-logo" />
        <img src="./logo.svg" className="AppIcon icon6" alt="react-logo" />
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch, to become a Ninja
          Developer.
        </p>

        <div className="btn-awesome">
          <p>Awesome!</p>
        </div>
      </main>
      <footer>
        <div className="row">
          <div className="col-1">
            <figure>
              <img src="./images/img_declarative.png" alt="" />
              <figcaption>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-2">
            <figure>
              <img src="./images/img_components.png" alt="" />
              <figcaption>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure>
              <img src="./images/img_single_way.png" alt="" />
              <figcaption>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-4">
            <figure>
              <img src="./images/img_jsx.png" alt="" />
              <figcaption>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
