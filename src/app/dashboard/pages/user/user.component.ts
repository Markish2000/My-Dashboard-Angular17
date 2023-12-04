// Angular
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

// Libraries
import { switchMap } from 'rxjs';

// Components
import { TitleComponent } from '@shared/title/title.component';

// Services
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()" />

    @if (user()) {
    <section>
      <img
        [srcset]="user()?.avatar"
        [alt]="user()?.first_name"
        [title]="user()?.first_name"
      />
      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>
          {{ user()?.email }}
        </p>
      </div>
    </section>
    } @else {
    <p>loading information</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);

  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User information: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`;
    } else {
      return 'User information';
    }
  });

  constructor() {}
}
