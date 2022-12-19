import Stream from "./components/Stream";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Developers from "./pages/developers/Developers";
import Lomay from "./pages/lomay/Lomay";
import Main from "./pages/main/Main";
import FavVideo from "./pages/video/FavVideo";
import Video from "./pages/video/Video";
import Watched from "./pages/video/Watched";
import { ADMIN_PAGE, DEVELOPERS_PAGE, FAV_VIDEO_PAGE, LOGiN_PAGE, LOMAY_PAGE, MAIN_PAGE, REGISTRATION_PAGE, VIDEO_PAGE, VIDEO_STREAM_PAGE, WATCHED_PAGE } from "./utils/pathConsts";


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
    {
        path: WATCHED_PAGE,
        Element: <Watched/>
    },
    {
        path: FAV_VIDEO_PAGE,
        Element: <FavVideo/>
    },
    {
        path: `${VIDEO_STREAM_PAGE}/:id`,
        Element: <Stream/>
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
        path: WATCHED_PAGE,
        Element: <Watched/>
    },
    {
        path: FAV_VIDEO_PAGE,
        Element: <FavVideo/>
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
    {
        path: `${VIDEO_STREAM_PAGE}/:id`,
        Element: <Stream/>
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
        path: FAV_VIDEO_PAGE,
        Element: <FavVideo/>
    },
    {
        path: VIDEO_PAGE,
        Element: <Video/>
    },
    {
        path: WATCHED_PAGE,
        Element: <Watched/>
    },
    {
        path: ADMIN_PAGE,
        Element: <Admin/>
    },
    {
        path: `${VIDEO_STREAM_PAGE}/:id`,
        Element: <Stream/>
    },
]

