export default function Toolbar({ onClick }) {
  return (
    <div onClick={onClick}>
      <button onClick={onClick}>first</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
}
