import photo from "../images/photo.png";
import Card from "../components/Card";
function Home() {
  return (
    <div className="m-0">
      <div>
        <img
          src={photo}
          className="w-50 p-5 pb-0 photo d-none d-lg-block"
          alt="Graduation Picture"
        />
        <div className="text p-5 pb-0 mb-0">
          <h1 className="switzer display-3 mt-5">
            Hello, World!
            <span className="blink">_</span>
          </h1>
          <h1 className="display-1 folly" style={{ fontWeight: "bold" }}>
            I'M NICOLE
          </h1>
          <p className="lead">
            Recent <strong className="folly">Computer Science graduate</strong>{" "}
            from the University of Exeter, passionate about building{" "}
            <strong className="folly">robust and scalable</strong> software
            solutions.
          </p>
          <p className="">
            I thrive on turning{" "}
            <strong className="folly">ideas into reality</strong> and believe
            that software has the power to{" "}
            <strong className="folly">transform lives. </strong>
            <span style={{ fontWeight: "bold" }}>
              LET'S BUILD SOMETHING TOGETHER!
            </span>
          </p>
          {/* <Card /> */}
          <a href="projects" className="button-custom btn btn-lg my-5">
            Check out my projects!
          </a>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}

export default Home;
