
// const parent = React.createElement("div", {id:"parent"}, React.createElement("div",{id:"child"},
//     [  React.createElement("h1",{},"This is a h1 heading of child div"),
//         React.createElement("p" , {} , "I am a sibling of h1")
//     ]),
//     React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{},"I am child of child2 div"),React.crateElement("h2",{},"I am sibling of h1 of child2 div")]
//     )
//   );
// const root = ReactDOM .createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement("div",{className:"parentDiv"},
    [
        React.createElement("h1",{id:"main-heading"},"Learn web development"),
        React.createElement("p",{className:"para"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellendus in voluptate maxime earum, ipsa sequi harum qui rerum vel."),
        React.createElement("p",{className:"para"},"Lorem ipsum dolor sit amet consectetur,",<a id = "anchor-link">the rest of MDN</a>," adipisicing elit. Natus, corrupti laudantium iure vero fugit excepturi repellendus similique neque dolor dolores dignissimos facere quisquam reprehenderit, fugiat quas voluptatum odio eum provident sunt optio earum quod? Eligendi, repellendus culpa ut pariatur atque est, velit iste inventore quo doloremque, in odit cumque rem."),
        React.createElement("p",{className:"para"},"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti laudantium iure vero fugit excepturi repellendus similique neque dolor dolores dignissimos facere quisquam reprehenderit, fugiat quas voluptatum odio eum provident sunt optio earum quod? Eligendi, repellendus culpa ut pariatur atque est, velit iste inventore quo doloremque, in odit cumque rem.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti laudantium iure vero fugit excepturi repellendus similique neque dolor dolores dignissimos facere quisquam reprehenderit, fugiat quas voluptatum odio eum provident sunt optio earum quod? Eligendi, repellendus culpa ut pariatur atque est, velit iste inventore quo doloremque, in odit cumque rem."),
    ]
);
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);