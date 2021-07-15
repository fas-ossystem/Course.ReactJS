function CardComponent(props) {
    const {left, right} = props;
    return (
        <div className="card-component">
            <div className="left-slot">
                {left}
            </div>
            <div className="right-slot">
                {right}
            </div>
        </div>
    );
};

export default CardComponent;
