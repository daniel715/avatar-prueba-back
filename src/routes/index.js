const { Router } = require('express');
const router = Router();
const axios = require('axios');


//controlador getMovies
router.get('/api/v1/movies', async (req, res) => {
    const response = await axios.get("https://api.jikan.moe/v4/anime?q=one")
    console.log(response.data)
    res.json(response.data);
})

//controlador getCharacterByMovie 
router.get('/api/v1/charactersbymovie', async (req, res) => {
    const movieId = req.body.movieId;
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${movieId}/characters`)
    res.json(response.data);
})

//controlador getCharacterById
router.get('/api/v1/characterbyid', async (req, res) => {
    const characterId = req.body.characterId;
    const response = await axios.get(`https://api.jikan.moe/v4/characters/${characterId}/full`)
    res.json(response.data);
})



module.exports = router;