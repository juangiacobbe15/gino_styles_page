import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, NotFoundPage } from "../pages";
import { Footer, Navbar } from "../components";

export const AppRouter = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <Footer />
        </>
    );
}
