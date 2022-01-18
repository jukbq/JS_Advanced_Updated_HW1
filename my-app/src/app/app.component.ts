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
  public text_input = ''
  public inp_bw = 'Word here...'
  public inp_text = 'Text here'
  public bad_words: any = []

  constructor() { }

  clear_bw() {
    this.inp_bw = ''
    this.bw_input = ''
  }
  clear_text() {
    this.inp_text = ''
  }

  addBad(): void {
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

  cenzor(): any {
    let ti = this.inp_text

    if (ti !== '') {
      this.bad_words.forEach((word: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }) => {
        ti = ti.replace(word, function (mach: any) {
          let x = mach.length;
          let y = '';
          for (let i = 0; i < x; i++) {
            y += "*";
          }
          return y;
        });
      })
      this.inp_text = ti
    }
  }


  reset() {
    location.reload()
  }




}
function removeClass(arg0: string): string {
  throw new Error('Function not implemented.');
}

