import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../Reducer/dashboard";

export default configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});
