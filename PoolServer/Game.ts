export class Game {
    gameType: GameType
    solidPlayer: string
    stripePlayer: string
    gameId: string

    constructor(gameType: GameType, solidPlayer: string, stripePlayer: string, gameId: string){
        this.gameType = gameType;
        this.solidPlayer = solidPlayer;
        this.stripePlayer = stripePlayer;
        this.gameId = gameId;
    }
}

enum GameType {
    NORMAL,
    EIGHTBALL,
    NINEBALL
}

//From Swift (Player Mock data)
//var players: [Player] = [Player(id: "1", name: "Jeremy Skirdlant", win: 90, avg: 100, loss: 0), Player(id: "2", name: "Harlan Tasci", win: 100, avg: 100, loss: 0)]

//From Swift (Game Mock Data)
//var games : [Game(gameId: "1", gameType: .NORMAL, solidPlayerId: "1", stripePlayerId: "2", winnerId: "1"), Game(gameId: "2", gameType: .NINEBALL, solidPlayerId: "2", stripePlayerId: "1", winnerId: "2")]