/*const container = React.createElement("h1",
{id:"container",xyz:"abc"},"Hello world from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container)*/

console.clear();
console.log("a");
setTimeout(function(){
console.log("b");
},1000);
setTimeout(function(){
console.log("c");
},0);
console.log("d");