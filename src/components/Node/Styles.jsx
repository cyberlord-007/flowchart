import styled from 'styled-components';

export const NodeWrap = styled.div`
  width: 170px;
  height: 55px;
  border: 1px solid #5c6bc0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const NodeTop = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c6bc0;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const NodeBottom = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4b636e;
`;

export const LargeNodeWrap = styled.div`
  width: 220px;
  height: 220px;
  border: 1px solid #5c6bc0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const LargeNodeTop = styled.div`
  padding: 5px 10px;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #5c6bc0;
  color: #fff;
`;
export const LargeNodeBottom = styled.div`
  width: 100%;
  height: 90%;
  color: #4b636e;
  overflow-y: scroll;
`;
