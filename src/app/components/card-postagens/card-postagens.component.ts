import { Component } from '@angular/core';
import { BlogService } from 'src/app/services/consumer.service';
import { BlogData } from 'src/app/models/blogData';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-postagens',
  templateUrl: './card-postagens.component.html',
  styleUrls: ['./card-postagens.component.css']
})
export class CardPostagensComponent {
  postagem:BlogData
  postagens: any[] = [];

  constructor(
   private sanitizer: DomSanitizer,
   private service:BlogService
  ){
    this.postagem = {
     titulo:"",
     id: "",
     foto:"",
     descricao:""
    }
  }

  ngOnInit(): void {
   this.getPostagem('2')
   this.getPostagens()
 }

 getPostagem(id:string){
   this.service.getPostagem(id).subscribe(
     {
       next: (res) => {

         this.postagem = {
           id: res.id,
           titulo: res.titulo,
           foto: res.foto,
           descricao: res.descricao
         }
       },
       error: (err) => console.log('not found')
     }
   )
 }

 getPostagens() {
  this.service.getPostagens().subscribe({
    next: (res: any[]) => {
      this.postagens = res; // Armazena o array recebido na variável postagens
    },
    error: (err) => console.log('not found')
  });
}

deletePostagem(id:string) {
 this.service.deletePostagem(id);
}


 sanitizeUrl(url: string): SafeUrl {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
}
