const apiConfig = {
    baseUrl:'https://api.themoviedb.org/3/',
    apiKey: '518e0a7c9f83fc3b6ea25fea81a05819',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;