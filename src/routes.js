import Rodape from "components/Rodape";
import Cabecalho from "components/cabecalho";
import Inicio from "pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import lista from "./json/db.json"

function AppRoutes() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Carrega os vídeos iniciais do JSON
        setVideos(lista);
    }, []);

    const handleAddVideo = (newVideo) => {
        setVideos((prevVideos) => [...prevVideos, newVideo]);
    };
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio videos={videos} />} />
                <Route path="/NovoVideo" element={<NovoVideo onAddVideo={handleAddVideo} />} />
            </Routes>S
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;