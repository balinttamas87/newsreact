import React from "react";
import "./Article.css"

export default ({title, urlToImage, description}) => (
	<div className="article-wrapper">
		<div className="article">
			<h1 className="article-title">{title}</h1>
			<img className="article-img"src={urlToImage} alt=""/>
			<p className="article-description">{description}</p>
		</div>
	</div>
)

