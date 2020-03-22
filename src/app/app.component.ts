import { Component } from '@angular/core';

class TodoItem {
  isDone: boolean;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = '';
  public items: Array<TodoItem> = [];

  public getRemainingCount() {
    return this.items.length - this.items.filter(item => item.isDone).length;
  }

  public add() {
    this.name = this.name.trim();
    if (!this.name) { return; }
    this.items.push({
      isDone: false,
      name: this.name
    });
    this.name = '';
  }

  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }

}
