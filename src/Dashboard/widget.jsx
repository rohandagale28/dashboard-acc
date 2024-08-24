import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../store/store";

const Widget = ({ category, widget }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ category, widgetName: widget.name }));
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        position: "relative",
        height: "8rem",
        width: "18rem",
      }}
    >
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
      <button
        onClick={handleRemove}
        style={{ position: "absolute", top: "5px", right: "5px" }}
      >
        X
      </button>
    </div>
  );
};

export default Widget;
