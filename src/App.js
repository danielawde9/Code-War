import { codeWars1 } from "./CodeWars1";
import { CodeWars2 } from "./CodeWars2";

function App() {
  return (
    <>
      {/* <codeWars1 props="hello world" /> */}

      <CodeWars2 xs={[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]}/>
      <br></br>
      <CodeWars2 xs={[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]} />
      <br></br>
      <CodeWars2 xs={[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]} />
      <br></br>
      <CodeWars2 xs={[10]} />
      <br></br>
      <CodeWars2 xs={[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]} />
      <br></br>
      <CodeWars2 xs={[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]} />
    </>
  );
}

export default App;

