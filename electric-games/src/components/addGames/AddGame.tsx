import {useState, ChangeEvent} from 'react';
import IElectricGame from '../../interfaces/IElectricGame';
import ElectricGameService from '../../services/ElectricGameService';



const AddGame = () => {
    
    const [title, setTitle] = useState<string>("Title not set");
    const [platform, setPlatform] = useState<string>("Platform not set");
    const [releaseYear, setReleaseYear] = useState<number>(0);
    const [image, setImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
   
  

    const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target 
        if(files !=null){
            const file = files[0];
            setImage(file);
            console.log(file);
            setImageUrl(files[0].name)
        }

        
    }

    const uploadImage = () => {
        if(image != null){
            ElectricGameService.uploadImage(image);
        }
        
    }


    const changeHandlerFunction = (e: ChangeEvent<HTMLInputElement>) => {
        const{name, value} = e.currentTarget;
        switch (name){
            case "title":
                setTitle( value );
                break;
            case "platform":
                setPlatform( value );
                break;
            case "releaseYear":
                setReleaseYear ( parseInt(value) );
                break;
            }
    }

    const addNewGame = () => {
        if (title != null && platform != null && releaseYear != null && image!=null){
            const newGame : IElectricGame = {
                title: title,
                platform: platform,
                releaseYear: releaseYear,
                image: imageUrl
            };
            
            ElectricGameService.postElectricGame(newGame);
            setSuccessMessage("The game has been added to our database 🥳")
            setErrorMessage("");
            console.log(newGame);
        }

       else {
        setSuccessMessage("");
        setErrorMessage("Make sure you have entered all the neccessary information 🧐")
       } 
}

    const sendGameToApi = () => {
        
        uploadImage();
        addNewGame();
    };


    return (
        <>
        <h2>Add your favourite game to our database</h2>

        <form className='inputForm'>

        

            <section className='inputSection'>
                <label>Title</label>
                <input name="title" type="text" value={title} onChange={changeHandlerFunction} ></input>
            </section>

            <section className='inputSection'>
                <label>Platform</label>
                <input name="platform" type="text" onChange={changeHandlerFunction} value={platform}></input>
            </section>

            <section className='inputSection'>
                <label>Release Year</label>
                <input name="releaseYear" type="number" onChange={changeHandlerFunction} value={releaseYear}></input>
            </section>

            <section className='inputSection'>
                <label>Add image</label>
                <input type="file" onChange={setImageHandler}></input>
            </section>

            

        </form>
        <button className='btn btn-primary btn-md' onClick={sendGameToApi}>Submit 💾</button>

        <section className='outputSection'>
        <p className='successMessageP'>{successMessage} </p>
        <p className='errorMessageP'>{errorMessage}</p>
        </section>
        
        
        </>
    ) 
}

export default AddGame;