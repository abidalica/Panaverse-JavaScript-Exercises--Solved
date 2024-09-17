// start writing your code here. When you are done, try saving it into assignment40.js file.

let make_album = (artistName,albumTitle,tracks = null) => {
    let album = {
        artistName: artistName,
        albumTitle: albumTitle,
    }

    if (tracks == null) {
        album.tracks = 0;
    } else {
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album("Nusrat Fateh Ali Khan","Shahen-Shah");
let album2 = make_album("Atif Aslam","Meri Kahani");
let album3 = make_album("Abida Parveen","Raqs-e-Bismil",5);

console.log(`Artist: ${album1.artistName} Album: ${album1.albumTitle} Number of tracks: ${album1.tracks}`);
console.log(`Artist: ${album2.artistName} Album: ${album2.albumTitle} Number of tracks: ${album2.tracks}`);
console.log(`Artist: ${album3.artistName} Album: ${album3.albumTitle} Number of tracks: ${album3.tracks}`);
