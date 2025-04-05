export class game {
    gameId!: number;
    title!: string;
    imageUrl! : string;
    plateform!: string;
    sort!: string;
    developper!: string;
    releaseDate!: Date;
    inventory!: number;

    constructor(id: number, title: string, imageUrl: string, plateform:string, sort:string,developper:string,releaseDate:Date,inventory:number){
        this.gameId = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.plateform = plateform;
        this.sort = sort;
        this.developper = developper;
        this.releaseDate = releaseDate;
        this.inventory = inventory;
    }
}