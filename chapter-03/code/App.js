import React from "react";
import reactDom from "react-dom/client";
import image from "./image.png";

const heading = React.createElement("h1", {}, "this is a test");
const root = reactDom.createRoot(document.getElementById("root"));
root.render(heading);

// create Nested header Elemet using the React.createElement
const h1 = React.createElement("h1", { class: "title" }, "This is a H1");
const h2 = React.createElement("h2", { lass: "title" }, "This is a H2");
const h3 = React.createElement("h3", { lass: "title" }, "This is a H3");

const div = React.createElement("div", { class: "heading " }, [h1], [h2], [h3]);

// create the same element using JSX
const head = (
  <div>
    <h1>This is H1</h1>
    <h2>This is H2</h2>
    <h3>This is h3</h3>
  </div>
);

const hello = <marquee>hello</marquee>;
// create the same elemet using functional component

const Head_fun = () => {
  return (
    <div>
      {hello}
      <h1>Heading H1</h1>
      <h2>Heading H2</h2>
      <h3>Heading h3</h3>
    </div>
  );
};

// creating small header component
const Header = () => (
  <div className="header">
    <div className="header__left">
      <img src={image} />
    </div>
    <div className="header__right">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);
root.render(<Header />);
