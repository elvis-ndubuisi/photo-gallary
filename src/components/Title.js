import logo from "./logo.svg";

export const Title = () => {
  return (
    <div className="title">
      <div>
        <img src={logo} alt="logo" />
        <h1>photogallary</h1>
      </div>

      <h2>uploaded photos</h2>
      <p>some text goes here.</p>
    </div>
  );
};
