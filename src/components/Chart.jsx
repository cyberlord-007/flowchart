import React, { useMemo } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
} from 'react-flow-renderer';
import Node from './Node/Node';
import LargeNode from './Node/LargeNode';

const Chart = () => {
  const nodeTypes = useMemo(
    () => ({ specialNode: Node, largeNode: LargeNode }),
    []
  );
  const initialNodes = [
    {
      id: 'horizontal-1',
      type: 'specialNode',
      data: { label: 'Input', type: 'beginsWith' },
      position: { x: 0, y: 80 },
    },
    {
      id: 'horizontal-3',
      type: 'specialNode',
      data: { label: 'Node 3', type: 'middle' },
      position: { x: 250, y: 80 },
    },
    {
      id: 'horizontal-5',
      type: 'specialNode',
      data: { label: 'Node 5', type: 'middle' },
      position: { x: 500, y: 0 },
    },
    {
      id: 'horizontal-7',
      type: 'largeNode',
      data: { label: 'Node 7', type: 'endsWith' },
      position: { x: 750, y: -190 },
    },
    {
      id: 'horizontal-8',
      type: 'largeNode',
      data: { label: 'Node 8', type: 'endsWith' },
      position: { x: 750, y: 40 },
    },
    {
      id: 'horizontal-6',
      type: 'specialNode',
      data: { label: 'Node 6', type: 'middle' },
      position: { x: 500, y: 160 },
    },
  ];

  const initialEdges = [
    {
      id: 'horizontal-e1-2',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-2',
      animated: true,
    },
    {
      id: 'horizontal-e1-3',
      source: 'horizontal-1',
      type: 'smoothstep',
      target: 'horizontal-3',
      animated: true,
    },
    {
      id: 'horizontal-e1-4',
      source: 'horizontal-2',
      type: 'smoothstep',
      target: 'horizontal-4',
      label: 'edge label',
    },
    {
      id: 'horizontal-e3-5',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-5',
      animated: true,
    },
    {
      id: 'horizontal-e3-6',
      source: 'horizontal-3',
      type: 'smoothstep',
      target: 'horizontal-6',
      animated: true,
    },
    {
      id: 'horizontal-e5-7',
      source: 'horizontal-5',
      type: 'smoothstep',
      target: 'horizontal-7',
      animated: true,
    },
    {
      id: 'horizontal-e6-8',
      source: 'horizontal-5',
      type: 'smoothstep',
      target: 'horizontal-8',
      animated: true,
    },
  ];
  return (
    <>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        zoomOnScroll={false}
        nodeTypes={nodeTypes}
        attributionPosition='bottom-left'
        fitView
      ></ReactFlow>
    </>
  );
};

export default Chart;
