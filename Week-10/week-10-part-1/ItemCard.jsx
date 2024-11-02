import { useState } from "react";

export default function ItemCard() {
  const [items, setItems] = useState([
    {
      id: 1,
      isVeg: true,
      name: "Veg Sandwich",
      price: 299,
      description: "Veg Sandwich",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/kg41taveqaaj53lxjydx",
    },
  ]);

  function addItem() {
    const added = setItems([
      ...items,
      {
        id: 1,
        isVeg: true,
        name: "Handi Paneer",
        price: 299,
        description: "Handi Paneer",
        imageUrl:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/wfeam0y9bzqmonvn4ihr",
      },
    ]);
  }

  return (
    <div
      className="card-section"
      style={{
        backgroundColor: "#f3f3f3",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <button onClick={addItem}>Add Item</button>

      <div
        className="itemComponent"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        {items.map((item) => (
          <ItemContainer
            key={item.id}
            isVeg={item.isVeg}
            name={item.name}
            desp={item.description}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

function ItemContainer({ isVeg, name, price, desp, imageUrl }) {
  return (
    <div
      className="item-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 5,
        width: "90vw",
        backgroundColor: "#fff",
        padding: ".6rem .6rem",
        border: "1px solid #000",
      }}
    >
      <div className="item-content">
        <img
          src={
            isVeg
              ? "data:image/png;base64,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"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAiuPfQLzJkURLlJ0wWnZsPRxNw9H-2UKfg&s"
          }
          className="item-type"
          style={{ width: "1rem" }}
        ></img>
        <h2
          className="item-name"
          style={{
            fontSize: "1.2rem",
            fontWeight: "700",
            letterSpacing: "-0.3px",
          }}
        >
          {name}
        </h2>
        <p
          className="item-price"
          style={{ fontWeight: "700", fontSize: "1rem", marginTop: ".4rem" }}
        >
          Rs. {price}
        </p>
        <p
          className="item-description"
          style={{
            fontSize: "1rem",
            lineHeight: "1.5rem",
            marginTop: ".6rem",
            letterSpacing: "-0.3px",
            fontWeight: "500",
            color: "#404042",
          }}
        >
          {desp}
        </p>
      </div>
      <div
        className="item-image"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={imageUrl}
          alt="Veg Sandwich"
          loading="lazy"
          style={{ width: "6rem", height: "6rem", borderRadius: 5 }}
        />
      </div>
    </div>
  );
}
