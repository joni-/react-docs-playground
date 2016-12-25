import React from 'react';


function Menu(props) {
  const links = props.components.map(
    (component) => <a onClick={() => {props.onChange(component)}} key={component} href="#">{component}</a>
  );
  return (
    <div>
      {links}
    </div>
  );
}

export default Menu;
