import React from "react";
import mandalorian from "../assets/images/mandalorian.jpg";
import ContentRowMovies from "./ContentRowMovies";

function ContentRowTop (){
    let genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasía", "Infantiles", "Musical"];

	let totals = [
		{
			title: "Movies in Data Base",
			length: 21,
			color: "card border-left-primary shadow h-100 py-2",
			icon: "fas fa-film fa-2x text-gray-300"
		},
		{
			title: "Total awards",
			length: 79,
			color: "card border-left-success shadow h-100 py-2",
			icon: "fas fa-award fa-2x text-gray-300"
		},
		{
			title: "Actors quantity",
			length: 21,
			color: "card border-left-warning shadow h-100 py-2",
			icon: "fas fa-user fa-2x text-gray-300"
		}
	];
    return (
        <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

				<div className="row" >
					{totals.map(element => {
						return <ContentRowMovies 
									title = {element.title}
									length = {element.length}
									color = {element.color}
									icon = {element.icon}
								/>
					})}
				</div>
					<div className="row">
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={mandalorian} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>

						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">
										
									{genres.map(genre => 
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
                                                <div className="card-body">
                                                    {genre}
												</div>
											</div>
										</div>
                                    )}

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    );
}

export default ContentRowTop;