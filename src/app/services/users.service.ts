// Angular
import { HttpClient } from '@angular/common/http';
import { signal, computed, Injectable } from '@angular/core';

// Libraries
import { delay, map } from 'rxjs';

// Interfaces
import type {
  User,
  UserResponse,
  UsersResponse,
} from '@interfaces/req-response';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http: HttpClient;

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor(http: HttpClient) {
    this.http = http;

    const url: string = 'https://reqres.in/api/users';

    this.http
      .get<UsersResponse>(url)
      .pipe(delay(1000))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
        });
      });
  }

  getUserById(id: string) {
    const url: string = `https://reqres.in/api/users/${id}`;

    return this.http.get<UserResponse>(url).pipe(
      delay(1000),
      map((resp) => resp.data)
    );
  }
}
