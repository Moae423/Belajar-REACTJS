import Row from "./row.jsx";

export default function Table() {
  return (
    <table border="1">
      <tr>
        <Row id="1" text="satu" />
        <Row id="2" text="dua" />
        <Row id="3" text="tiga" />
        <Row id="4" text="empat" />
      </tr>
    </table>
  );
}
