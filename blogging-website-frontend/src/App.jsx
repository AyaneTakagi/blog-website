import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="/signup" element={<hi>Sign up page</hi>} />
                <Route path="/signin" element={<hi>Sign in page</hi>} />
            </Route>
        </Routes>
    )

}

export default App;
