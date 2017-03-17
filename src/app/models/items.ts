export class Item{
  constructor(
    public name: String,
    public material : String,
    public size: Array<string>,
    public code: Array<string>,
    public output: Array<string>,
    public price: Array<number>,
    public remains: Array<number>
  ){
  }

}