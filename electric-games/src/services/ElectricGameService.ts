import axios from "axios";
import IElectricGame from "../interfaces/IElectricGame";

const ElectricGameService = (
    () => {
        const electricGameApiEndpoints = {
            electricGames: "https://localhost:7272/ElectricGame" ,
            imageUpload: "https://localhost:7272/FileUpload"
        };


        const getAllElectricGames = async () => {
            const result = await axios.get(electricGameApiEndpoints.electricGames) 
            console.log(result.data);
            return result.data;
        }

        const getElectricGameById = async (id: number) => {
            const result = await axios.get(`${electricGameApiEndpoints.electricGames}/${id}`);
            console.log(result.data);
            return result.data;
        }

        const getElectricGameByTitle = async (title: string) => {
            const result = await axios.get(`${electricGameApiEndpoints.electricGames}/${title}`)
            console.log(result.data);
            return result.data;
        };

        const postElectricGame = async (electricGame : IElectricGame) => {
            const result = await axios.post(electricGameApiEndpoints.electricGames, electricGame)
            
            console.log(result.data);
        };

        const putElectricGame = async (editedElectricGame : IElectricGame) =>{
            const result = await axios.put(electricGameApiEndpoints.electricGames, editedElectricGame);
            return result.data;
        };

        const deleteElectricGame = async (id: number) => {
            const result = await axios.delete(`${electricGameApiEndpoints.electricGames}/${id}`)
            return result;
        }

        const uploadImage = async (image: File) => {
            const formData = new FormData();
            formData.append("file", image);

            const result = await axios({
                url: electricGameApiEndpoints.imageUpload,
                method: "POST",
                data: formData, 
                headers: {"Content-Type": "multipart/form-data"}
            });

            formData.delete("file"); 
            console.log(result);

        };


        return {
            getAllElectricGames,
            getElectricGameById,
            getElectricGameByTitle,
            postElectricGame,
            putElectricGame,
            deleteElectricGame,
            uploadImage
        }
    }

    
)();

export default ElectricGameService;