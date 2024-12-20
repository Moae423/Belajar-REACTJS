export default function sayhelloForm() {
  function handleClick(e) {
    e.preventDefault();
    const nama = document.getElementById("say_hello").value;
    document.getElementById(
      "hello_text"
    ).innerHTML = `${nama}, U GODDAMN RIGHT`;
  }
  return (
    <>
      <form>
        <input type="text" name="nama" id="say_hello" />
        <button onClick={handleClick} type="submit">
          Simpan
        </button>
      </form>
      <h1 id="hello_text">Say My Name</h1>
    </>
  );
}
