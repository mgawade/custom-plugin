import { Component } from '@angular/core';
import { HelloWorld } from '@ionic-native/plugins/hello-world';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public helloWorld: HelloWorld) {
    this.helloWorld.coolMethod({
      _sMessage: "Hello World"
    }).then((result) => {
      alert(JSON.stringify(result, undefined, 2));
    }, (err) => {
      alert(JSON.stringify(err, undefined, 2));
    });  }
}
