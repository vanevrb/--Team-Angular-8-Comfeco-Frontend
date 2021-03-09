import { Pipe, PipeTransform } from '@angular/core';
import { SocialLinks } from '../enums/SocialLinks';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'redes',
})
export class RedesPipe implements PipeTransform {
  constructor(private domSanitazer: DomSanitizer) {}
  transform(idRedSocial: number, user: string): SafeResourceUrl {
    if (idRedSocial <= 0) {
      return '';
    }

    return this.domSanitazer.bypassSecurityTrustResourceUrl(
      `${SocialLinks[idRedSocial]}/${user}`
    );
  }
}
