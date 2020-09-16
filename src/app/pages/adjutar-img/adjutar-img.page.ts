import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-adjutar-img',
  templateUrl: './adjutar-img.page.html',
  styleUrls: ['./adjutar-img.page.scss'],
})
export class AdjutarImgPage {
  // tslint:disable-next-line: max-line-length
  constructor(public navCtrl: NavController, private platform: Platform, private document: DocumentViewer, private file: File, private transfer: FileTransfer) {

  }
  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'Mi PDF'
    };
    this.document.viewDocument('assets/documentos/prueba_pdf.pdf', 'aplication/pdf', options);
  }

  downloadAndOpenPdf() {
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;

    } else {
      path = this.file.dataDirectory;
    }

    const transfer = this.transfer.create();
    transfer.download('https://devactiv.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'aplication/pdf', {});
    })
  }

}