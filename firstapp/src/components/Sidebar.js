import React from "react";

function Sidebar(props) {

    // CSS if want to put in .js file
    const asideStyle = {
        background: "azure",
        width: "calc(30% - 10px)",
        marginLeft: "10px",
    }

    return (
        <aside
            style = {asideStyle}
            className = "sidebar-component">
            <h1>{props.greet} from Sidebar</h1>
        </aside>
    )
}

export default Sidebar;