import React from "react";

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <br/>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <h1>Welcome to HACK!</h1>
            <h2 >Explore , Experience, Enhance ...</h2>
            <p style={{fontSize: 25 }}>Copyright-free images at your fingertips!</p>
            <a href="#about" class="btn btn-primary">
              Get Started
            </a>
          </div>
          <div class="col-md-6">
            <img
              src="https://picsum.photos/id/1005/400/400"
              alt="RandomImage"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
      <section id="about" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>About HACK</h2>
              <p style={{fontSize: 20 }}>
                HACK is a website dedicated to providing high-quality,
                copyright-free images. Our goal is to make it easy for anyone to
                find and use beautiful photos without worrying about legal
                issues.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="https://picsum.photos/id/1003/400/400"
                alt="RandomImage"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col text-center">
              <p class="lead">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-c-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                </svg>{" "}
                copyrights@HACK
              </p>
              <p class="lead">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <a href="tel:3698857333">3698857333</a>
              </p>
              <p class="lead">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-at"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                </svg>
                <a href="mailto:HACK@gmail.com">HACK@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
