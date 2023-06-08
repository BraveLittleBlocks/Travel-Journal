

export default function Card(props){
    console.log(props)
    return(
        <div className="card">
            <div className="card--box">
                <img src={props.imageUrl} className="card--img"></img>
            </div>

        <div className="card--infos">
            <h2 className="card--location">{props.location}</h2>
            <a href={props.googleMapsUrl} className="card--location-url">
                view on Google Maps
            </a>

            <h3 className="card--title">{props.title}</h3>
            <p className="card--date">
            {props.startDate} - {props.endDate}
            </p>
            <p className="card--description">{props.description}</p>

            </div>
        </div>
    )
}

