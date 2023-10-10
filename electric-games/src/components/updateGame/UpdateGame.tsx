import {useState, ChangeEvent} from 'react';
import IElectricGame from '../../interfaces/IElectricGame';
import ElectricGameService from '../../services/ElectricGameService';

const UpdateGame = () => {
    const [id, setId] = useState<number>();
    const [title, setTitle] = useState<string>("");
    const [platform, setPlatform] = useState<string>("");
    const [releaseYear, setReleaseYear] = useState<number>();
    const [image, setImage] = useState<File | null>();
    const [imageUrl, setImageUrl] = useState<string>("");
    const [idErrorMessage, setIdErrorMessage] = useState("");
    const [submitBtnErrorMessage, setSubmitBtnErrorMessage] = useState<string>("");    
    const [submitBtnSuccessMessage, setSubmitBtnSuccessMessage] = useState<string>("");    


    

    const getGameById = async () => {
        
        if(id !=null) {
            const gameFromService = await ElectricGameService.getElectricGameById(id).catch((error) => {
            console.log(error);
            setIdErrorMessage(error.message);
            
            });
            setTitle(gameFromService.title);
            setPlatform(gameFromService.platform);
            setReleaseYear(gameFromService.releaseYear);
            setImageUrl(gameFromService.image);
            setIdErrorMessage("");
        }

        

        
    }

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
    

    const IdHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(e.target.value));
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

    const editedElectricGame = () => {
        if (title != null &&  platform != null && releaseYear != null){
            const editedGame : IElectricGame = {
                id: id,
                title: title,
                platform: platform,
                releaseYear: releaseYear,
                image: imageUrl
            };
            
            ElectricGameService.putElectricGame(editedGame).catch((err) => {
                setSubmitBtnErrorMessage(err.message);
                setSubmitBtnSuccessMessage("");
                
            });
            
            setSubmitBtnSuccessMessage("The game has been edited!");
            

        }
        
        else {
            console.log("Please fill out all the fields")
        }

    };

    const editGame = () => {
        editedElectricGame();
        uploadImage();
    }

    return (
        <section>
            <h2 className='updateGameHeadline'>Pick a game you want to edit</h2>
            <div>
                <label className='updateLabel'>Id</label> <br />
                <input className='updateGameInput' name='id' onChange={IdHandler} type="number" value={id}></input>
                <button className='btn btn-success btn-md' onClick={getGameById}>Get Game</button> <br />
                {idErrorMessage!="" && <p>{idErrorMessage} : Could not find this ID</p>}
            </div>

            <form className='inputForm'>

            <div className='inputDiv'>
                <label className='updateLabel'>Title</label> <br />
                <input className='updateGameInput' name="title" type="text" value={title} onChange={changeHandlerFunction} ></input>
            </div>

            <div className='inputDiv'>
                <label className='updateLabel'>Platform</label>
                <input className='updateGameInput' name="platform" type="text" onChange={changeHandlerFunction} value={platform}></input>
            </div>

            <div className='inputDiv'>
                <label className='updateLabel'>Release Year</label>
                <input className='updateGameInput' name="releaseYear" type="number" onChange={changeHandlerFunction} value={releaseYear}></input>
            </div>

            <div className='inputDiv'>
                <label className='updateLabel'>Add image</label>
                <input className='updateGameInput' type="file" onChange={setImageHandler}></input>
            </div>

            

        </form>
        <button className='btn btn-md btn-success updateBtn' onClick={editGame}>Submit Changes</button>
        <section className='outputSection'>
        <p className='errorMessageP'>{submitBtnErrorMessage} </p>
        <p className='successMessageP'>{submitBtnSuccessMessage}</p>
        </section>
        
        
        </section>
    )
}

export default UpdateGame;