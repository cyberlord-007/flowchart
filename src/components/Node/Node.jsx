import React from 'react';
import { Handle, Position } from 'react-flow-renderer';
import { NodeTop, NodeWrap } from './Styles';

const Node = ({ data }) => {

    const {type} = data;


  return (
    <>
      <NodeWrap>
        <Handle type='source' position={Position.Right} id='1' />
        <NodeTop>{data.label}</NodeTop>
        {type !== 'beginsWith' && <Handle type='target' position={Position.Left} id='2' />}
      </NodeWrap>
    </>
  );
};

export default Node;
