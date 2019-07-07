
import { Observable } from 'rxjs/Observable';

  export const observable = Observable.create(observer => {
      let users = {
        "successful": true,
        "message": null,
        "status": "200",
        "errors": null,
        "warnings": null,
        "data": {
          "session": {
            "userData": {
              "sessionId": "30101",
              "sapId": [
                {
                  "code": "12",
                  "name": "vendor1"
                },
                {
                  "code": "13",
                  "name": "vendor2"
                }
              ],
              "application": 1,
              "idDomain": null,
              "userId": "9066",
              "userName": "Nitesh Ranka",
              "userEmail": "nitesh@moglix.com",
              "token": "63e7f8c1-7778-4fa7-a22e-af14d5c6f6f1",
              "expiryTime": 1561702052341,
              "resetPasswordKey": null,
              "isFirstLogin": false,
              "isAdmin": true,
              "moglixSuperAdmin": false
            },
            "companyData": null
          }
        }
      };
      observer.next(users); // This method same as resolve() method from Angular 1
      console.log("am done");
      observer.complete();//to show we are done with our processing
  });


