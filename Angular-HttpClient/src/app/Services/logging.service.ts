import {Injectable,inject} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class LoggingService{


    http:HttpClient=inject(HttpClient);

    logError(data:{statusCode:number,errorMessage:string,dateTime:Date}){
        this.http.post('https://angular-http-client-360ac-default-rtdb.firebaseio.com/log.json',data)
        .subscribe();

        

    }

    fetchError(){
        this.http.get('https://angular-http-client-360ac-default-rtdb.firebaseio.com/log.json')
        .subscribe((data)=>{
            console.log(data);
        })

    }


}
