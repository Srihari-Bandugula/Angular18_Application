import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription, switchMap, take } from 'rxjs';
import { User, UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import spinner module
import {MatButtonModule} from '@angular/material/button';   // Import button module


@Component({
  selector: 'app-user-stream',
  imports: [CommonModule,MatProgressSpinnerModule,MatButtonModule],
  templateUrl: './user-stream.component.html',
  styleUrl: './user-stream.component.scss'
})
export class UserStreamComponent implements OnDestroy {
  users: User[] = [];
  subscription!: Subscription;
  loading = false;

  constructor(private userService: UserService) {}

  startStreaming() {
    this.loading = true;
    this.users = [];

    this.userService.getAllUsers().subscribe((allUsers) => {
      const total = allUsers.length;

      this.subscription = interval(1000).pipe(  //Emits sequential numbers every 1000 milliseconds.
        take(total),  //Limits how many values we want from the stream.
        switchMap(index => [allUsers[index]]) // emit one user per tick, Switches from one observable to another.
      ).subscribe({
        next: (user) => {
          this.users.push(user);
          console.log('User emitted:', user);
        },
        complete: () => {
          this.loading = false;
          console.log('Streaming complete');
        },
        error: (err) => {
          console.error('Error:', err);
          this.loading = false;
        }
      });
    });
  }

  stopStreaming() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.loading = false;
      console.log('Streaming stopped');
    }
  }

  ngOnDestroy() {
    this.stopStreaming();
  }
}
