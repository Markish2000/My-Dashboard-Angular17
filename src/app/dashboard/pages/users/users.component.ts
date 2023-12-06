// Angular
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

// Libraries
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

// Components
import { TitleComponent } from '@shared/title/title.component';

// Services
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, DragDropModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService = inject(UsersService);

  public onDropped(event: CdkDragDrop<any>): void {
    const previous = event.previousIndex;
    const current = event.currentIndex;
    // moveItemInArray(this.usersService, previous, current);
  }
}
