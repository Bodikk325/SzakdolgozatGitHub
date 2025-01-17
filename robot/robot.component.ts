import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SerialService } from '../serial.service';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.css'
})
export class RobotComponent {
  @Input() messages: string[] = [];
  @Input() showMessages: boolean = false;
  serialService : SerialService

  toggleMessages() {
    this.showMessages = !this.showMessages;
  }

  /**
   *
   */
  constructor( serialService : SerialService) {
    this.serialService = serialService
  }
}
