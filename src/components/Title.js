import logo from "./logo.svg";

export const Title = () => {
  return (
    <div className="title">
      <div>
        <img src={logo} alt="logo" />
        <h1>showView gallery</h1>
      </div>

      <h2>uploaded photos</h2>
      <p>photoGallary built with ReactJs and firebasev9</p>
    </div>
  );
};
