import './AddDrink.css'
import image1 from '../img/add-drink1.png'
import image2 from '../img/add-drink2.png'
import image3 from '../img/add-drink3.png'

const AddDrink = () => {
    return (
        <div>
            <h2>
                Füge deine eigenen Getränke hinzu!
            </h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Kategorie" />
                <input type="url" placeholder="Bild-URL" />
                <textarea cols="30" rows="10" placeholder="Anleitung"></textarea>
                <input type="text" placeholder="Zutat 1" />
                <input type="text" placeholder="Menge Zutat 1" />
                <input type="text" placeholder="Zutat 2" />
                <input type="text" placeholder="Menge Zutat 2" />
                <input type="text" placeholder="Zutat 3" />
                <input type="text" placeholder="Menge Zutat 3" />
                <input type="submit" value="Submit" />
            </form>
            <img src={image1} alt="Beispiel-Cocktail" />
            <img src={image2} alt="Beispiel-Cocktail" />
            <img src={image3} alt="Beispiel-Cocktail" />
        </div>
    );
}

export default AddDrink;