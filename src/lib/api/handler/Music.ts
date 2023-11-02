import { MusicStats } from "../../models/MusicStats";

export function getAllMusicStatsByArtistId(idArtist: number): MusicStats[] {
    console.log(idArtist)
    const result: MusicStats[] = [
        {
            title: "Song 1",
            listenerCount: 100,
            likedCount: 50,
            history: {
                month: 1,
                listenerCount: 10
            }
        },
        {
            title: "Song 2",
            listenerCount: 200,
            likedCount: 100,
            history: {
                month: 1,
                listenerCount: 12
            }
        },
        {
            title: "Song 3",
            listenerCount: 500,
            likedCount: 100,
            history: {
                month: 2,
                listenerCount: 14
            }
        },
        {
            title: "Song 4",
            listenerCount: 200,
            likedCount: 100,
            history: {
                month: 3,
                listenerCount: 15
            }
        },
    ];
    return result;
}


function getAllGenreStatsByArtistId(artistId: number): GenreStats[] {
    const result: GenreStats[] = [
        {
            genre: "Genre 1",
            listenerCount: 100,
            likedCount: 50,
        },
        {
            genre: "Genre 2",
            listenerCount: 200,
            likedCount: 100,
        },
        {
            genre: "Genre 3",
            listenerCount: 212,
            likedCount: 100,
        },
        {
            genre: "Genre 4",
            listenerCount: 323,
            likedCount: 100,
        },
        {
            genre: "Genre 5",
            listenerCount: 123,
            likedCount: 100,
        },
    ];
    return result;
}


function getAllAlbumStatsByArtistId(artistId: number): AlbumStats[] {
    const result: AlbumStats[] = [
        {
            album: "album 1",
            listenerCount: 100,
            likedCount: 50,
        },
        {
            album: "album 2",
            listenerCount: 200,
            likedCount: 100,
        },
        {
            album: "album 3",
            listenerCount: 212,
            likedCount: 100,
        },
        {
            album: "album 4",
            listenerCount: 323,
            likedCount: 100,
        },
        {
            album: "album 5",
            listenerCount: 123,
            likedCount: 100,
        },
    ];
    return result;
}



