import Lomay from "./pages/lomay/Lomay";
import { MAIN_PAGE } from "./utils/pathConsts";


// export const authRoutes = [
//     {
//         path: BASKET_ROUTE,
//         Element: <Basket/>
//     },

// ]

export const authRoutes = [
    {
        path: MAIN_PAGE,
        Element: <Lomay/>
    },

]
export const publicRoutes = [
    {
        path: MAIN_PAGE,
        Element: <Lomay/>
    },



]
export const adminRoutes = [
    {
        path: MAIN_PAGE,
        Element: <Lomay/>
    },
]

