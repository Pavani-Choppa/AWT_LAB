let heading=React.createElement(
    'h1',{
        id:'bg-blue'
    },
    "this is react"
)
let para=React.createElement(
    'p',{
        
    },
    "this is paragraph"
)
let wrapper=React.createElement(
    'div',{

    },
    [heading,para]

)
let ele=document.getElementById("root");
let root=ReactDOM.createRoot(ele);
root.render(wrapper)
