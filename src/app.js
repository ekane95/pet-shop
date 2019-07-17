const Pet = ({ name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ]);
};

// Your code is going to go here
const App = () => {
    return React.createElement(
    "div", // what kind of tag
    {id: "something"}, // attr you want to give ex: id:"smth", id will be passed into div
    [
        React.createElement("h1", {}, "Adopt Me!"), //children
        React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
        React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockateil"}),
        React.createElement(Pet, { name: "Rosa", animal: "Cat", breed: "Persian"})
    ]);
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);