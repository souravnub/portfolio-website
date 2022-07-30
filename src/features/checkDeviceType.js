import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    deviceType: null,
};

let checkDeviceTypeSlice = createSlice({
    name: "deviceType",
    initialState,
    reducers: {
        setDeviceType: (state, { payload }) => {
            state.deviceType = payload;
        },
    },
});

export default checkDeviceTypeSlice.reducer;
export const { setDeviceType } = checkDeviceTypeSlice.actions;
