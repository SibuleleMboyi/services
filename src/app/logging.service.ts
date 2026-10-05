import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  public log(message: string) {
    const timeStamp = new Date().toLocaleTimeString();
    console.log(`[${timeStamp}]L ${message}`)
  }
}
