import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Developers from "./pages/developers/Developers";
import Lomay from "./pages/lomay/Lomay";
import Main from "./pages/main/Main";
import Video from "./pages/video/Video";
import { ADMIN_PAGE, DEVELOPERS_PAGE, LOGiN_PAGE, LOMAY_PAGE, MAIN_PAGE, REGISTRATION_PAGE, VIDEO_PAGE } from "./utils/pathConsts";


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
    {
        path: VIDEO_PAGE,
        Element: <Video/>
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
    {
        path: VIDEO_PAGE,
        Element: <Video/>
    },
    {
        path: REGISTRATION_PAGE,
        Element: <Auth/>
    },
    {
        path: LOGiN_PAGE,
        Element: <Auth/>
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
    {
        path: VIDEO_PAGE,
        Element: <Video/>
    },
    {
        path: ADMIN_PAGE,
        Element: <Admin/>
    },
]

