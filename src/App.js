import "./App.css";
import img_declarative  from "./images/img_declarative.png";
import img_component from "./images/img_components.png";
import img_jsx from "./images/img_jsx.png";
import img_single_way from "./images/img_single_way.png";


function App() {
  return (
    <div className="App">
      <main>
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
              <img src={img_declarative} alt="" />
              <figcaption>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-2">
            <figure>
              <img src={img_component} alt="" />
              <figcaption>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-3">
            <figure>
              <img src={img_single_way} alt="" />
              <figcaption>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's.</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-4">
            <figure>
              <img src={img_jsx} alt="" />
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
