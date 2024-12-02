function Greeting(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <h1>Вітаємо, користувач!</h1>
            ) : (
                <h1>Будь ласка, увійдіть в систему.</h1>
            )}
        </div>
    );
}

export default Greeting
 //<Greeting isLoggedIn={false} />;
