import 'rxjs/add/operator/switchMap';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MetaService } from '../meta-service';
import { Meta } from '../meta'


@Component({
  selector: 'meta-detail',
  styleUrls: ['../stylesheets/meta-detail.component.css',
   '../stylesheets/shared/translucentBG.css',
   '../stylesheets/flipper.css',
   '../stylesheets/shared/nav-bttns.css'
 ],
  templateUrl: '../templates/meta-detail.component.html'
})

export class MetaDetailComponent {

  @Input() clickedMeta: Meta;

}
