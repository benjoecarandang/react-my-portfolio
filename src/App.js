import Container from "./UI/Container";
import "./App.css";
import Logo from "./images/mylogo.png";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <header className="bg-red">
        <nav>
          <Container>
            <div className="relative flex items-center justify-between h-24">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block h-16 w-auto invert"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>

      <section className="bg-red">
        <div>
          <Container>
            <div className="flex flex-col items-start justify-center h-80 pb-">
              <h1 className="text-7xl mb-4 text-white">Hi, I'm Benjoe —</h1>
              <p className="text-5xl font-light text-white">a Full Stack Web Developer</p>
            </div>
          </Container>
        </div>
      </section>

      <section>
        <div>
          <Container>
            <div className="flex flex-col items-start justify-center h-80 pb-">
              <h2 className="text-5xl mb-4">About Me</h2>
              <p className="text-lg text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-green">
        <Container>
          <div className="h-56">
            <h2 className="text-5xl text-white">My Portfolio</h2>
          </div>
        </Container>
      </section>

      <section className="-mt-60">
        <Container>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer class="bg-gray-100 text-center lg:text-left">
        <Container>
          <div class="text-gray-700 font-semibold text-lg p-4">
            © 2021 Copyright:
            <a class="text-gray-800" href="https://tailwind-elements.com/"> Benjoe Oates Carandang</a>
          </div>
        </Container>
      </footer>
    </Fragment>
  );
}

export default App;

// #F38181
// #FCE38A
// #EAFFD0
// #95E1D3