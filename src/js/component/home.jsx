import React, {useEffect, useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selected, setSelected] = useState("")

	const handleSelected = (color) => {
		setSelected(color)
		setShowBtn(false)
	}

	const [showBtn, setShowBtn] = useState(false)

	return (
		<div className="text-center">
			<div className="post"></div>
			<div className="box">
				<div className={`${selected === "circle-red"? "red-selected" : "circle-red"} circle-red`} onClick={()=>handleSelected("circle-red")}>
					
				</div>
				<div className={`${selected === "circle-yellow"? "yellow-selected" : "circle-yellow"} circle-yellow`} onClick={()=>handleSelected("circle-yellow")}>
					
				</div>
				<div className={`${selected === "circle-green"? "green-selected" : "circle-green"} circle-green`} onClick={()=>handleSelected("circle-green")}>
					
				</div>
				{showBtn?<div className={`${selected === "circle-purple"? "purple-selected" : "circle-purple"} circle-purple`} onClick={()=>handleSelected("circle-purple")}></div>:""}
					
			</div>
			<div className="btn btn-warning" onClick={() => setShowBtn(true)}>click for surpriese</div>
			
		</div>
	);
};

export default Home;
