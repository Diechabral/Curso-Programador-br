const root = document.querySelector("#root");

const t1 = React.createElement("h1", { id: "Main tittle" }, "Hello world");
const t2 = React.createElement("h4", { id: "Second tittle" }, "Second tittle")

const headline = React.createElement("div", null, t1, t2);

ReactDOM.render(headline, root);