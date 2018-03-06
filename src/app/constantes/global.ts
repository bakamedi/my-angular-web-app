import { Http, Headers, RequestOptions, Response } from '@angular/http';

class Constants {
    // SERVER
    static SERVER_API: String = 'http://localhost:3000/';
    static localUser: String = '';
}

Object.seal(Constants);
export { Constants };
