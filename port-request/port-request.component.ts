import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSerial } from 'ngx-serial';
import { SerialService } from '../serial.service';
@Component({
  selector: 'app-port-request',
  standalone: true,
  imports: [],
  templateUrl: './port-request.component.html',
  styleUrl: './port-request.component.css'
})
export class PortRequestComponent {

  constructor(private router : Router, private serialService: SerialService) {
  }

  connectToPort() {
    this.serialService.connectToPortFirstTime()
    
  }

  
}
