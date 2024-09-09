import { Routes,Route } from "react-router-dom";
import { MovieDetail, MovieList ,PageNotFound,Search } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
  <div className="dark:bg-darkbg">
  <Routes>
    <Route path="/" element={<MovieList apiPath='movie/now_playing' title='Home'/>} />
    <Route path="/movie/:id" element={<MovieDetail/>} />
    <Route path="/movies/popular" element={<MovieList apiPath='movie/popular' title='popular'/>} />
    <Route path="/movies/top" element={<MovieList apiPath='movie/top_rated'title='top' />} />
    <Route path="/movies/upcoming" element={<MovieList apiPath='movie/upcoming'title='upcoming' />} />
    <Route path="search" element={<Search apiPath='search/movie' title='search'/>} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
  </div>
  )
}
