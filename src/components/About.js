import React from 'react';

export default function About(props) {

	let myStyle = {
		color: props.mode === "dark" ? "white" : "rgb(27, 28, 28)",
		backgroundColor: props.mode === "dark" ? "rgb(27, 28, 28)" : "white"
	};

	return (
		<div className="container" style={myStyle}>
			<h1 className="my-3">About Us</h1>
			<div class="accordion" id="accordionExample">
				<div class="accordion-item" style={myStyle}>
					<h2 class="accordion-header">
						<button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							Developer
						</button>
					</h2>
					<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<strong>Ajit Singh</strong> is a student at IIIT Manipur and develops apps in Flutter, ReactJS, Kotlin and Qt.
						</div>
					</div>
				</div>
				<div class="accordion-item" style={myStyle}>
					<h2 class="accordion-header">
						<button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Contact Info
						</button>
					</h2>
					<div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
						<div class="accordion-body">
							<strong>singh2003ajit@gmail.com</strong>
							<br />
							Github: <a href="https://github.com/0singh-ajit0">https://github.com/0singh-ajit0</a>
							<br />
							LinkedIn: <a href="https://www.linkedin.com/in/0singh-ajit0/">https://www.linkedin.com/in/0singh-ajit0/</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};