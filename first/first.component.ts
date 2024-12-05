import { Component } from '@angular/core';
import Hu from 'blockly/msg/hu';
// Import Blockly core.
// Import the default blocks.
import 'blockly/blocks'; 
// Import a generator.
import * as Blockly from 'blockly';
import { NgxSerial } from 'ngx-serial';
import 'blockly/javascript';
import { RobotComponent } from "../robot/robot.component";
import { FieldService } from '../services/field.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MicroBitService } from '../services/micro-bit.service';
import { SerialService } from '../serial.service';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RobotComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  displayedCode: string = '';
  mainWorkSpace = Blockly.getMainWorkspace();

  ngAfterViewInit() {

    this.Initialize();
    this.displayedCode = `
      console.log("Hello world!")
    `;
  }

  Initialize()
  {
    var mainWS = Blockly.inject('blocklyDiv', {
      
    });
  }
  

  constructor(private serialService : SerialService,private router : Router, private fieldService : FieldService, private httpClient : HttpClient, private microBitService : MicroBitService) {
    
  }

  runCode() {
    
    
    if (!this.serialService.connectedPort ) {
      console.error('A kapcsolat nincs létrehozva.');
      return;
    }

    console.log("sad")

    this.serialService.sendCode(`reset(); 
      show(0b1111111111110111111111111);
      `);
      
  }

  /*
  async connectToPort(): Promise<void> {
      this.serial.connect((port: any) => {
        this.connectedPort = port;
        console.log('Kapcsolat létrejött:', port);
      });
      this.isConnected = true;
    
  }
      */

  clean()
  {
    this.microBitService.reset()
  }

  next()
  {
    this.fieldService.completeLevel("1")
    this.clean()
    this.router.navigateByUrl("main")
  }
}
