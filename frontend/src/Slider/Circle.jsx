export function Circle({ isActive, onClick }) {
  return (
    <div
      className={`circle ${isActive ? "black" : "white"}`}
      onClick={onClick}
    ></div>
  );
}
