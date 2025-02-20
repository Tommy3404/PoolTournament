export class Player {
    playerName: string
    win: number
    average: number
    loss: number
    playerId: string

    constructor(playerName: string, win: number, average:number, loss: number, playerId: string){
        this.playerName = playerName;
        this.win = win;
        this.average = average;
        this.loss = loss;
        this.playerId = playerId;
    }
}