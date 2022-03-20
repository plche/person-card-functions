import './PersonCard.css';
function PersonCard(props) {
    const {person: {firstName, lastName, age, hairColor}} = props;
    return(
        <div className="PersonCard">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}
export default PersonCard;