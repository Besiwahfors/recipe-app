import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import loadingIcon from "../../Assets/Images/fade-stagger-circles.svg";
import { Container } from "@mui/material";
import Navbar from "../../components/navbar";

const getRecipe = (...args) => {
  // console.log(args);
  // prepare URL
  const url = new URL(args[0]);
  url.searchParams.append("apiKey", process.env.REACT_APP_SPOONACULAR_API_URL);
  //fetch and return recipe
  return fetch(url).then((response) => response.json());
};

export default function Recipe() {
  const { id } = useParams();
  const { data, isLoading } = useSWR(
    `${process.env.REACT_APP_RECIPE_API_URL}/recipes/${id}`, getRecipe);

  return (
    <>
    <Navbar />
      {isLoading ? (
        <img src={loadingIcon} alt="Preloader" />
      ) : (
        <Container>
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{__html: data.summary }} />
          <img src={data.image} alt="Preloader" />
        </Container>
      )}
    </>
  );
}

// export default Recipe;
