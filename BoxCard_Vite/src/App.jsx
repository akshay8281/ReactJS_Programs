import "./App.css";
import Cards from "./Components/Cards";

const cardData = [
  {
    image:
      "https://i.pinimg.com/736x/ed/42/b8/ed42b8571dbe0a70cfd2326eb9676541.jpg",
    username: "Pitroda8281",
    fullName: "Javal Pitroda",
  },
  {
    username: "Akshay8281",
    fullName: "Akshay Pitroda",
    btnVisit: "Profile View",
  },
];

function App() {
  return (
    <>
      {/* <h1 className="text-2xl font-bold text-center my-6">Hello World</h1> */}
      <div className="flex flex-wrap gap-4 justify-center">
        {cardData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </>
  );
}

export default App;
