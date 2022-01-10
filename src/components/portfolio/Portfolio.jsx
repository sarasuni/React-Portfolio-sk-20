import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featuredPortfolio,
    htmlcssPortfolio,
    JavasciptPortfolio,
    BootstrapPortfolio,
    apiPortfolio,
    NodeJSPortfolio,
    MySQLPortfolio,
    MongoDBPortfolio,
    ReactJSPortfolio } from "../../data.js";

//import { Link } from "@material-ui/core";    
import {Link, Code} from "@material-ui/icons";

export default function Portfolio() {
    const [selected,setSelected] = useState("featured");
    const [data,setData] = useState([]);
    const list = [
        {
            id:"Featured",
            title:"Featured",
        },  
        {
            id:"HTML,CSS",
            title:"HTML,CSS",
        },
        {
            id:"Javascript",
            title:"Javascript",
        },
        {
            id:"Bootstrap",
            title:"Bootstrap",
        },
        {
            id:"API",
            title:"API",
        },
        {
            id:"NodeJS",
            title:"NodeJS",
        },
        {
            id:"MySQL",
            title:"MySQL",
        },
        {
            id:"MongoDB",
            title:"MongoDB",
        },
        {
            id:"ReactJS",
            title:"ReactJS",
        },
    ];

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
                case "HTML,CSS":
                setData(htmlcssPortfolio);
                break;
                case "Javascript":
                setData(JavasciptPortfolio);
                break;
                case "Bootstrap":
                setData(BootstrapPortfolio);
                break;
                case "API":
                setData(apiPortfolio);
                break;
                case "NodeJS":
                setData(NodeJSPortfolio);
                break;
                case "MySQL":
                setData(MySQLPortfolio);
                break;
                case "MongoDB":
                setData(MongoDBPortfolio);
                break;
                case "ReactJS":
                setData(ReactJSPortfolio);
                break;
                default:
                setData(featuredPortfolio);
        }
    },[selected])


    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img src={d.img} alt="image" />
                        <h3>{d.title}</h3>
                        {/*Adding Link Icon */}
                        <div className="portfolioIcons">
                            <a href={d.appLink} target="_blank">
                                <Link />
                            </a>
                            <a href={d.codeLink} target="_blank">
                                <Code />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
