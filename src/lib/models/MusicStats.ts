export interface MusicStats {
    title: string;
    listenerCount: number;
    likedCount: number;
    history: {
        month: number;
        listenerCount: number;
    }
}