const Card = (props) => {
	return (
		<div className="card h-100">
			<img src={props.imageUrl} className="card-img-top" alt={props.title} />
			<div className="card-body text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
			</div>
			<div className="card-footer text-center">
				<a href="#" className="btn btn-primary">
					{props.buttonText}
				</a>
			</div>
		</div>
	);
};

export default Card;
