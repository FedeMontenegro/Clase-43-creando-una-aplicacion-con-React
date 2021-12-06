import React from "react";
import propTypes from "prop-types";

function ContentRowMovies(props) {
    return (
        <div className="col-md-4 mb-4" type={props.title}>
            <div className={props.color}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.length}</div>
                        </div>
                        <div className="col-auto">
                            <i className={props.icon}></i>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

ContentRowMovies.propTypes = {
        title: propTypes.string,
        length: propTypes.number,
        color: propTypes.oneOf(["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"]),
        icon: propTypes.oneOf(["card border-left-primary shadow h-100 py-2", "card border-left-success shadow h-100 py-2", "card border-left-warning shadow h-100 py-2"])

}
ContentRowMovies.defaultProps = {
        title: "Sin titulo",
        length: 0,
        color: "Sin valor",
        icon: "Sin valor"
}

export default ContentRowMovies;