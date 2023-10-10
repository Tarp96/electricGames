import {useState, ChangeEvent} from 'react';
import ElectricGameService from '../../services/ElectricGameService';

const DeleteGame = () => {
    const [id, setId] = useState<number>(0);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");


    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setId(parseInt(event.target.value));
        
    }

    console.log(id);

    const deleteGame = () => {
        ElectricGameService.deleteElectricGame(id).then(() => {
            setErrorMessage("");
            setSuccessMessage("The game has been deleted from our database 🗑️")
        }).catch((error) => {
            console.log(error);
            setErrorMessage(error.message + " : " + " The Id does not exist");
            setSuccessMessage("");
        })
    }

    return (
         <div className='deleteGameContainer'>
            <div className='labelDiv'>
            <label className='deleteLabel'>Enter Id for the game you want to delete</label>
            </div>
            <input className="deleteInputBar" type="text" onChange={changeHandler} ></input>
            
            <div className='deleteBtnContainer'>
            <button className='btn btn-danger btn-md' onClick={deleteGame}>Delete Game</button>
            </div>

            <section className='outputSection'>
                <p className='successMessageP'>{successMessage} </p>
                <p className='errorMessageP'>{errorMessage}</p>
            </section>
        </div>
        
    )
}

export default DeleteGame; 