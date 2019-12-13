import React, {useState,useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Person from "./person";

const CastList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: rgba(202, 250, 254, 0.2);
    width: 90%;
    margin: 0 auto;
`;

function Cast(){
    const [cast,setCast] = useState();
    useEffect(()=>{
        axios
            .get("https://swapi.co/api/people/")
            .then(response=>setCast(response.data.results))
            .catch(error=>console.log(error));
    },[]);
    if(!cast) return null;
    return(
        <CastList>
            {cast.map((item,index)=><Person key={index} info={item} />)}
        </CastList>
    )
}
export default Cast;