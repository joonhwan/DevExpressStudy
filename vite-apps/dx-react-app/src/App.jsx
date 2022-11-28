import { useEffect, useState } from "react";
import { DataGrid } from "devextreme-react/data-grid";

async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  return users;
}

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let ignore = false;

    async function startFetch() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_page=0&_limit=50"
      );
      const data = await response.json();
      if (!ignore) {
        setTodos(data);
        ignore = true;
      }
      console.log("data = ", data);
    }
    startFetch();
    return () => {
      ignore = true;
      console.log("called exit effect");
    };
  }, []);
  return (
    <div className="dx-viewport demo">
      <h2>DX DataGrid Demo</h2>
      <p>Grid의 높이가 넘쳐 흐를때는 min-height를 0px 로 줘 보자.</p>
      <DataGrid
        className="demo-grid"
        dataSource={todos}
        keyExpr="id"
        paging={{ enabled: false }}
        // height={"1px"}
      ></DataGrid>
      {/* <div className="demo-grid box-orange big-font">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quasi
          obcaecati, distinctio quia a magnam incidunt nobis laboriosam aliquid!
          Commodi repellendus ipsum est totam sunt accusamus provident. Id, hic
          voluptates.
        </p>
      </div> */}
      <footer>
        <h2>Copyright 2022 by James</h2>
      </footer>
    </div>
  );
}

export default App;
