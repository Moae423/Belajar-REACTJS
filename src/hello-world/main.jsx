import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./container.jsx";
import TodoList from "./TodoList.jsx";
import Table from "../table/Table.jsx";
import "./style.css";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../toolbar/toolbar.jsx";
import SearchForm from "../searchForm/searchForm.jsx";
import SayHello from "../searchForm/sayHelloForm.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <Table />
      <TodoList />
      <AlertButton text="click me" message={"ups, wkwk"} />
      <MyButton text="smash me" onSmash={() => alert("you smash me")} />

      <Toolbar
        onClick={(event) => {
          event.stopPropagation();
          alert("you click me");
        }}
      />
      <SearchForm />
      <br />
      <br />
      <SayHello />
    </Container>
  </StrictMode>
);
