

export class Card{
  public _id!:number;
  public name!:string;
  public genre!:string;
  public count!:number;
  public getId(): number{
    return this._id;
  }
  getName(): string{
    return this.name;
  }
  getGenre(): string{
    return this.genre;
  }
  getCount(): number{
    return this.count;
  }
}
