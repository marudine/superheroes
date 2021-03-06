import { Component, OnInit } from '@angular/core';

import { Meta } from '../meta';
import { MetaService } from '../services/meta-service';

@Component({
  selector: "metas",
  templateUrl: '../templates/metas.component.html',
  styleUrls: ['../stylesheets/metas.component.css',
  '../stylesheets/shared/translucentBG.css']
})

export class MetasComponent implements OnInit {

  metaShown: Meta[];//what will be returned by 'ngOnInit()' function.
  selectedMeta: Meta;

  constructor(
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.metaService.getMetas().then(metas => this.metaShown = metas);
  }

  onSelect(individualMeta: Meta): void {
    this.selectedMeta = individualMeta;
  }

}
