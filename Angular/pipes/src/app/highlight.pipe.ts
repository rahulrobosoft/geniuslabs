import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; 

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer : DomSanitizer){}

  transform(value: string, name:string): any {
    return this.sanitizer.bypassSecurityTrustHtml('<li style="background-color:green;color:white;padding:5px;width:40px;border-radius:5px">' + name + '</li>');
  }
  
 
}
