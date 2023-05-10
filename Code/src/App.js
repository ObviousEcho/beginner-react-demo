import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const inventory = [
    {
      department: "Electronics",
      imagePath: "/electronics.jpg",
      imageAlt: "Headphones hanging from microphone",
      discount: "30%",
      id: 1,
    },
    {
      department: "Sporting Goods",
      imagePath: "/ball.jpg",
      imageAlt: "Basketball on grass",
      discount: "20%",
      id: 2,
    },
    {
      department: "Apparel",
      imagePath: "/jeans.jpg",
      imageAlt: "Jeans hanging from rack",
      discount: "40%",
      id: 3,
    },
    {
      department: "Jewelry",
      imagePath: "/jewelry.jpg",
      imageAlt: "Necklace displayed on table",
      discount: "50%",
      id: 4,
    },
  ];

  return (
    <div>
      <Header />
      <Card inventory={inventory} />
    </div>
  );
}

export default App;
