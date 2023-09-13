import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Buscando } from "./components/Buscando";
import { Movies } from "./page/Movies";

export function AppUno() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Movies />} />
                </Routes>
            </BrowserRouter>
        </div>
    )

} 