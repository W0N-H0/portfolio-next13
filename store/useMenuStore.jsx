import menuReducer from "@/redux/useMenuSlice";
import { configureStore } from "@reduxjs/toolkit"; // slice 합쳐주는 기능
const store = configureStore({
  reducer: {
    menuStore: menuReducer,
  },
});
export { store };
