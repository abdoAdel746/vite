import { Props } from "./components/props/Props";

function App() {
  const products = [
    {
      id: 1,
      img_src: "../public/w.png",
      name: "man hoodie",
      describtion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumearum commodi`,
      size: "s",
      price: "500",
      type: "white",
    },
    {
      id: 2,
      img_src: "../public/d.png",
      name: "man jaecket",
      describtion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumearum commodi`,
      size: "m",
      price: "200",
      type: "black",
    },
    {
      id: 3,
      img_src: "../public/w.png",
      name: "white hoodie",
      describtion: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eumearum commodi`,
      size: "l",
      price: "100",
      type: "white",
    },
  ];

  return (
    <>
      {console.log(products)}
      <Props products={products} />

      {/* <Button_cart /> */}
    </>
  );
}

export default App;
