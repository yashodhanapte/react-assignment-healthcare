const initialState = {
    docData: [
        {
            "Name": "Christy Schumm",
            "key": "zxc01",
            "Timezone": "(GMT-06:00) America/North_Dakota/New_Salem",
            "Day_of_Week": "Monday",
            "Available_at": "09:00",
            "Available_until": "17:30"
        },
        {
            "Name": "Christy Schumm",
            "key": "zxc02",
            "Timezone": "(GMT-06:00) America/North_Dakota/New_Salem",
            "Day_of_Week": "Tuesday",
            "Available_at": "08:00",
            "Available_until": "16:00"
        },
        {
            "Name": "Christy Schumm",
            "key": "zxc03",
            "Timezone": "(GMT-06:00) America/North_Dakota/New_Salem",
            "Day_of_Week": "Thursday",
            "Available_at": "09:00",
            "Available_until": "16:00"
        },
        {
            "Name": "Christy Schumm",
            "key": "zxc04",
            "Timezone": "(GMT-06:00) America/North_Dakota/New_Salem",
            "Day_of_Week": "Friday",
            "Available_at": "07:00",
            "Available_until": "14:00"
        },
        {
            "Name": "Natalia Stanton Jr.",
            "key": "zxc05",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Tuesday",
            "Available_at": "08:00",
            "Available_until": "10:00"
        },
        {
            "Name": "Natalia Stanton Jr.",
            "key": "zxc06",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Wednesday",
            "Available_at": "11:00",
            "Available_until": "18:00"
        },
        {
            "Name": "Natalia Stanton Jr.",
            "key": "zxc07",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Saturday",
            "Available_at": "09:00",
            "Available_until": "15:00"
        },
        {
            "Name": "Natalia Stanton Jr.",
            "key": "zxc08",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Sunday",
            "Available_at": "08:00",
            "Available_until": "15:00"
        },
        {
            "Name": "Nola Murazik V",
            "key": "zxc09",
            "Timezone": "(GMT-09:00) America/Yakutat",
            "Day_of_Week": "Monday",
            "Available_at": "08:00",
            "Available_until": "10:00"
        },
        {
            "Name": "Nola Murazik V",
            "key": "zxc10",
            "Timezone": "(GMT-09:00) America/Yakutat",
            "Day_of_Week": "Tuesday",
            "Available_at": "11:00",
            "Available_until": "13:00"
        },
        {
            "Name": "Nola Murazik V",
            "key": "zxc11",
            "Timezone": "(GMT-09:00) America/Yakutat",
            "Day_of_Week": "Wednesday",
            "Available_at": "08:00",
            "Available_until": "10:00"
        },
        {
            "Name": "Nola Murazik V",
            "key": "zxc12",
            "Timezone": "(GMT-09:00) America/Yakutat",
            "Day_of_Week": "Saturday",
            "Available_at": "08:00",
            "Available_until": "11:00"
        },
        {
            "Name": "Nola Murazik V",
            "key": "zxc13",
            "Timezone": "(GMT-09:00) America/Yakutat",
            "Day_of_Week": "Sunday",
            "Available_at": "07:00",
            "Available_until": "09:00"
        },
        {
            "Name": "Elyssa O'Kon",
            "key": "zxc14",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Monday",
            "Available_at": "09:00",
            "Available_until": "15:00"
        },
        {
            "Name": "Elyssa O'Kon",
            "key": "zxc15",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Tuesday",
            "Available_at": "06:00",
            "Available_until": "13:00"
        },
        {
            "Name": "Elyssa O'Kon",
            "key": "zxc16",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Wednesday",
            "Available_at": "06:00",
            "Available_until": "11:00"
        },
        {
            "Name": "Elyssa O'Kon",
            "key": "zxc17",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Friday",
            "Available_at": "08:00",
            "Available_until": "12:00"
        },
        {
            "Name": "Elyssa O'Kon",
            "key": "zxc18",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Saturday",
            "Available_at": "09:00",
            "Available_until": "16:00"
        },
        {
            "Name": "Elyssa O'Kon",
            "key": "zxc19",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Sunday",
            "Available_at": "08:00",
            "Available_until": "10:00"
        },
        {
            "Name": "Dr. Geovany Keebler",
            "key": "zxc20",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Thursday",
            "Available_at": "07:00",
            "Available_until": "14:00"
        },
        {
            "Name": "Dr. Geovany Keebler",
            "key": "zxc21",
            "Timezone": "(GMT-06:00) Central Time (US & Canada)",
            "Day_of_Week": "Thursday",
            "Available_at": "15:00",
            "Available_until": "17:00"
        }
    ]
}
const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                docData: action.payload
            }
        default:
            return state
    }
}

export default DataReducer