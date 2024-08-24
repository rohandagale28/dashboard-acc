import React from "react";
import { useSelector } from "react-redux";
import Widget from "./widget";
import AddWidget from "./addWidget";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        padding: "2rem",
        overflowX: "hidden",
        boxSizing: "border-box",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {categories.map((category) => (
        <div
          key={category.name}
          style={{ display: "flex", flexDirection: "column", justifyContent:"flex-start", justifyItems:"flex-start" }}
        >
          <h2>{category.name}</h2>
          <div style={{ display: "flex", gap: "10px" }}>
            {category.widgets.map((widget) => (
              <Widget
                key={widget.name}
                category={category.name}
                widget={widget}
              />
            ))}
          </div>
        </div>
      ))}
      <div>
        <AddWidget />
      </div>
    </div>
  );
};

export default Dashboard;
