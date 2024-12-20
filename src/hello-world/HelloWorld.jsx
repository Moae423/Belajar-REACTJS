export default function HelloWorld() {
  const props = {
    text: "ups, wkwk",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <DeskripsiHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "Hello World" }) {
  return (
    <p style={{ fontWeight: "bold", color: "brown" }}>{text.toUpperCase()}</p>
  );
}

function DeskripsiHelloWorld() {
  const syle = {
    backgroundColor: "red",
    color: "aqua",
  };
  const testing = "testing";
  return <p style={syle}>{testing.toUpperCase()}</p>;
}
