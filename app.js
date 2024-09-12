//const parent=React.createElement("div",
  //  {id:"parent"},
    //React.createElement("div",{id:"child"},
      //  React.createElement("h1",{},"mai hoon sohail bhai")
    //)
//);
//console.log(parent);
  //  const root=ReactDOM.createRoot(document.getElementById("root"));
    //root.render(parent);
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
    React.createElement("h1",{},"assalamualikum"),
    React.createElement("h2",{},"assalamualikum"),
)]);
    console.log(parent);
    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
