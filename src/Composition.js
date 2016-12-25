import React from 'react';

function SplitPane(props) {
  return (
    <div className='split-pane'>
      <div className='left'>
        {props.left}
      </div>
      <div className='right'>
        {props.right}
      </div>
    </div>
  );
}


function Composition(props) {
  const left = <h2>Left pane</h2>;
  const right = <h2>Right pane</h2>;
  return <SplitPane left={left} right={right} />;
}

export default Composition;
