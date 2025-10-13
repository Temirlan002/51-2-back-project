import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { MainPage } from "../pages/MainPage";
import SignIn from "../features/auth/sign-in/ui/SignIn";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            { index: true, element: <MainPage /> },
            { path: 'profile', element: <></>}
        ]
    },
    { path: 'signin', element: <SignIn />}
])