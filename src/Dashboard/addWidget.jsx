import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../store/store";


const AddWidget = () => {
  const [category, setCategory] = useState("");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && widgetName) {
      dispatch(
        addWidget({ category, widget: { name: widgetName, text: widgetText } })
      );
      setWidgetName("");
      setWidgetText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Widget Name:
        <input
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
      </label>
      <label>
        Widget Text:
        <input
          type="text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
      </label>
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidget;
