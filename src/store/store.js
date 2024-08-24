import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: data,
  reducers: {
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      const categoryObj = state.categories.find((cat) => cat.name === category);
      if (categoryObj) {
        categoryObj.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { category, widgetName } = action.payload;
      const categoryObj = state.categories.find((cat) => cat.name === category);
      if (categoryObj) {
        categoryObj.widgets = categoryObj.widgets.filter(
          (widget) => widget.name !== widgetName
        );
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer,
  },
});
