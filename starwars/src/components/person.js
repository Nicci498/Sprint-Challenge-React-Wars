import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const PersonCard = styled.div`
    background: rgba(255,255,255,0.5);
    width: 45%;
    margin: 20px 0;
    h1 {
        font-style: italic;
        padding: 15px 0;
        margin: 0;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        li{
            padding: 10px 0;
        }
    }
`;

function Person(props){
    const [home,setHome] = useState("Loading...");
    useEffect(()=>{
        axios.get(props.info.homeworld).then(r=>setHome(r.data.name));
    },[props.info.homeworld]);
  
    return(
        <PersonCard>
            <h1>{props.info.name}</h1>
            {/* <img src='{props.info.url}' alt={props.info.name}/> */}
            <ul>
                <li>Featured in {props.info.films.length} films</li>
                <li>Born: {props.info.birth_year} on {home}</li>
                <li>Gender: {props.info.gender}</li>
                <li>Height(cm): {props.info.height} Weight: {props.info.mass}kg</li>
                <li>Skin Color: {props.info.skin_color} , Hair Color: {props.info.hair_color} , Eye Color: {props.info.eye_color}</li>                
            </ul>
        </PersonCard>
    )
}
export default Person;