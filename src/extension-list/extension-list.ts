import { Component, Input, ViewEncapsulation} from '@angular/core';
import { data } from '../data';
import { CommonModule } from '@angular/common'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-extension-list',
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './extension-list.html',
  styleUrl: './extension-list.css',
  encapsulation: ViewEncapsulation.None,
})
export class ExtensionList {
  data: any = data;
  @Input() isDarkTheme: boolean = false;
  filterType: string = 'all';
  filterExtensions(type: string) {
    this.filterType = type;
    if (type === 'all') {
      this.data = data;
    } else if (type === 'active') {
      this.data = data.filter((item: any) => item.isActive);
    } else if (type === 'inactive') {
      this.data = data.filter((item: any) => !item.isActive);
    }
  }
  removeExtension(name: string) {
    this.data = this.data.filter((ext: any) => ext.name !== name);
  }
}
