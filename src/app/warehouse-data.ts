import {InMemoryDbService} from "angular-in-memory-web-api";

export class WarehouseData implements InMemoryDbService{
  createDb(){
    let items = [
      {
        "name": "EXPETRO Вибро подголовник антистресс из хлопка, сине-бордовый 30х30х12 см",
        "material": "сландекс+плюш",
        "size": ["0.25","30x30x12"],
        "code": ["BH8518", "4690315021003"],
        "output": ["ТРЦ Черная площадь", "Петроградка","Резерв"],
        "price": [1300,1100,1300],
        "remains": [9,65,25]
      },
      {
        "name": "EXPETRO Вибро подголовник антистресс из хлопка, сине-бордовый 30х30х12 см",
        "material": "сландекс+плюш",
        "size": ["0.25","30x30x12"],
        "code": ["BH8518", "4690315021003"],
        "output": ["ТРЦ Черная площадь", "Петроградка","Резерв"],
        "price": [1300,1100,1300],
        "remains": [9,65,25]
      }
    ];
    return {items};
  }
}