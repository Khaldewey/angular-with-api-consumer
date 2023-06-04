
import { Component, Input } from '@angular/core';
import { BlogDataPost } from 'src/app/models/blogDataPost';
import { BlogService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-form-postagem',
  templateUrl: './form-postagem.component.html',
  styleUrls: ['./form-postagem.component.css']
})
export class FormPostagemComponent {
  postagem: BlogDataPost = {
    titulo: "",
    foto: "",
    descricao: ""
  };

  titulo: string = ""
  imagem: string = ""
  descricao: string = ""

  constructor (private service:BlogService){}

  postPostagem(): void {
    this.postagem.titulo = this.titulo;
    this.postagem.foto = this.imagem;
    this.postagem.descricao = this.descricao;

    // Aqui você pode chamar o serviço para enviar a postagem para o servidor
    this.service.postPostagem(this.postagem)
  }


}
