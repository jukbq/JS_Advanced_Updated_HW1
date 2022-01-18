import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  public bw_list = ''
  public bw_input = ''
  public inp_bw = 'Word here...'
  public bad_words: any = []

  constructor() { }

  clear(): void {
    this.inp_bw = ''
    this.bw_input = ''
  }

  addBtn(): void {
    let bw = this.inp_bw;
    if (bw !== '' && !bw.match(/\s/)) {
      this.bw_input = ''
      this.bad_words.push(bw)
      this.inp_bw = 'Word here...'
      this.bw_list = ''
      for (let i = 0; i < this.bad_words.length; i++) {
        this.bw_list += this.bad_words[i];
        this.bw_list += ',  ';
      }

    } else {
      this.bw_input = 'valid'
    }
  }


}
function removeClass(arg0: string): string {
  throw new Error('Function not implemented.');
}

