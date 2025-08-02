import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExtensionList } from '../extension-list/extension-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExtensionList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('browser-extensions-manager');
  img: string = 'images/icon-sun.svg';
  isDarkTheme: boolean = false;
  toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    this.img = body.classList.contains('dark-theme') ? 'images/icon-moon.svg' : 'images/icon-sun.svg';
    this.isDarkTheme = !this.isDarkTheme;
  }
}
