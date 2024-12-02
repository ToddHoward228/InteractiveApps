import { useState } from "react"
import "./myinfo.css"
function MyInfo() {

    const [button_clicked, SetButtonClicked] = useState(false);
    const HandleClick = () => {
        SetButtonClicked(!button_clicked);
    };

    const places = [
        "Канада, як потенційна країна для переїзду",
        "Японія, через багату культуру",
        "Карпати, залізти на Говерлу"
    ];

    return (
        <div id="my-info">
            <img src="../img/shrek2.jpg" />
            <h1>Багно Тимофій Андрійович</h1>
            <p>Я студент, навчаюсь в Сумському Державному Університеті</p>
            <p>Місця які я хочу відвідати</p>
            <ul>
                {places.map((item, index) => (
                    <li key={index}>{item}</li>
                ))} 
            </ul>

            <button
                onClick={HandleClick}
            >
                {button_clicked ? "Кнопка натинута, щирі вітання" : "Натисніть на кнопку"}
            </button>

        </div>

    );
}

export default MyInfo