import Developers from "./pages/developers/Developers";
import Lomay from "./pages/lomay/Lomay";
import Main from "./pages/main/Main";
import { DEVELOPERS_PAGE, LOMAY_PAGE, MAIN_PAGE } from "./utils/pathConsts";


// export const authRoutes = [
//     {
//         path: BASKET_ROUTE,
//         Element: <Basket/>
//     },

// ]

export const authRoutes = [
    {
        path: MAIN_PAGE,
        Element: <Main/>
    },
    {
        path: LOMAY_PAGE,
        Element: <Lomay/>
    },
    {
        path: DEVELOPERS_PAGE,
        Element: <Developers/>
    },

]
export const publicRoutes = [
    {
        path: MAIN_PAGE,
        Element: <Main/>
    },
    {
        path: LOMAY_PAGE,
        Element: <Lomay/>
    },
    {
        path: DEVELOPERS_PAGE,
        Element: <Developers/>
    },
]
export const adminRoutes = [
    {
        path: MAIN_PAGE,
        Element: <Main/>
    },
    {
        path: LOMAY_PAGE,
        Element: <Lomay/>
    },
    {
        path: DEVELOPERS_PAGE,
        Element: <Developers/>
    },
]

