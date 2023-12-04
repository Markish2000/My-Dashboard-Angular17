// Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Components
import { HeavyLoaderFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoaderFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
  styles: ``,
})
export default class DeferOptionsComponent {}
