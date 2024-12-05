import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSerial } from 'ngx-serial';

@Injectable({
  providedIn: 'root'
})
export class SerialService {

  private serial: NgxSerial;
  public connectedPort: any | null = null; // Az aktuálisan csatlakoztatott port
  public isConnected: boolean = false; // Kapcsolat állapota

  constructor(private router : Router) {
    // Serial inicializálás adatkezelővel
    this.serial = new NgxSerial(this.dataHandler.bind(this));
  }

  // Adatkezelő függvény
  private dataHandler(data: string) {
    console.log('Eszközről érkező adat:', data);
  }

  // Port kiválasztása és csatlakozás
  async connectToPort(): Promise<void> {
    try {
      await this.serial.connect((port: any) => {
        this.connectedPort = port;
        console.log('Kapcsolat létrejött:', port);
      });
      this.isConnected = true;
    } catch (error) {
      console.error('Hiba a csatlakozás során:', error);
      throw error;
    }
  }

  async connectToPortFirstTime(): Promise<void> {
    try {
      await this.serial.connect((port: any) => {
        this.connectedPort = port;
        console.log('Kapcsolat létrejött:', port);
        this.router.navigateByUrl("main")
      });
      this.isConnected = true;
    } catch (error) {
      console.error('Hiba a csatlakozás során:', error);
      throw error;
    }
  }

  // Kód küldése
  async sendCode(code: string): Promise<void> {
    if (!this.isConnected || !this.connectedPort) {
      throw new Error('Először csatlakozz egy eszközhöz!');
    }

    try {
      await this.serial.sendData("reset(); " + code);
      console.log('Kód elküldve:', code);
    } catch (error) {
      console.error('Hiba a kód küldésekor:', error);
      throw error;
    }
  }
}
