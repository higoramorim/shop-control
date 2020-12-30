import React from "react";
import RenderRows from "./RenderRows";

const RenderTable = (props) => {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <RenderRows list={props.list} load={props.load} remove={props.remove} />
      </tbody>
    </table>
  );
};

export default RenderTable;