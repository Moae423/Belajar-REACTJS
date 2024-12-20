export default function searchForm() {
  return (
    <form>
      <input type="text" name="search" id="search" />
      <button
        onClick={(event) => {
          event.preventDefault();
          alert("this is prevent default function");
        }}
      >
        Search
      </button>
    </form>
  );
}
