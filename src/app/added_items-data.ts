import {InMemoryDbService} from "angular-in-memory-web-api";

export class AddedItemsData implements InMemoryDbService{
  createDb(){
    let added_item = [
      {
        "add": [0,5,35]
      },
      {
        "add": [0,5,35]
      }
    ];
    return {added_item};
  }
}