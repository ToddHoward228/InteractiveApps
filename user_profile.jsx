import "./user_profile.css"
function UserProfile(props) {
    return (
        <div>
            <img src={props.img}></img>
            <h1>{props.name}</h1>
            <p>{props.job}</p>
        </div>
    )
}

export default UserProfile