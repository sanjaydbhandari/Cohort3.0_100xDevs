// explaining children in react -> use to reuse
// children is a special prop that allows you to pass components or elements as data to another component.

export default function CardComponent({ children }) {
  return (
    <div
      className="section"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        border: "1px solid #000",
        alignItems: "center",
      }}
    >
      <div className="card">
        <div className="card2">{children}</div>
      </div>
    </div>
  );
}
