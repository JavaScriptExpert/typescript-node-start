
export default class Handler {
  
  private name;
  constructor(name: string){
    this.name = name;
  }

  public getName () {
    return this.name;
  }
}