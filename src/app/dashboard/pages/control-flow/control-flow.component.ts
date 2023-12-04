// Angular
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

// Components
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue.Js', 'Svelte', 'Qwik']);
  public frameworks2 = signal([]);

  public toggleContent(): void {
    this.showContent.update((value) => !value);
  }
}
