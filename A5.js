const movieCollection = [];
const totalMovies = 3;

for (let i = 0; i < totalMovies; i++) {
    let filmDetails = {
        title: prompt(`Enter Movie ${i + 1} Name:`),
        starring: prompt(`Enter Movie ${i + 1} Starring:`),
        language: prompt(`Enter Movie ${i + 1} Language:`),
        rating: Number(prompt(`Enter Movie ${i + 1} Rating:`))
    };
    movieCollection.push(filmDetails);
}
for (let i = 0; i < movieCollection.length; i++) {
    document.writeln("Movie Name: " + movieCollection[i].title + "<br>");
    document.writeln("Starring: " + movieCollection[i].starring + "<br>");
    document.writeln("Language: " + movieCollection[i].language + "<br>");
    document.writeln("Rating: " + movieCollection[i].rating + "<br><hr>");
}