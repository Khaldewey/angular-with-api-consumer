import { Injectable } from '@angular/core';
import { BlogData } from '../models/blogData';
import{ environment } from '../../assets/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { BlogDataPost } from '../models/blogDataPost';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseURL:string = ""
  private blogData:BlogData | any

  constructor(private http:HttpClient,
              private location: Location) {
    this.baseURL = environment.blogApi
   }

   getPostagem(id:string):Observable<BlogData>{
    this.blogData = this
                    .http
                    .get<BlogData>
                    (`${this.baseURL}/${id}`)


    return this.blogData
  }

  getPostagens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}`);
  }

  deletePostagem(id: string): void {
    this.http.delete(`${this.baseURL}/${id}`).subscribe(
      () => {
        console.log(`Postagem com ID ${id} foi excluída com sucesso.`);
        // Aqui você pode adicionar qualquer outra lógica necessária após a exclusão da postagem.
        this.location.go(this.location.path());
        location.reload();
      },
      (error) => {
        console.error(`Ocorreu um erro ao excluir a postagem com ID ${id}:`, error);
        // Aqui você pode tratar o erro de acordo com as necessidades do seu aplicativo.
      }
    );
  }

  postPostagem(postagem: BlogDataPost): void {
    this.http.post(`${this.baseURL}/post`, postagem).subscribe(
      () => {
        console.log('Postagem criada com sucesso.');
        // Aqui você pode adicionar qualquer outra lógica necessária após a criação da postagem.
        this.location.go(this.location.path());
        location.reload();
      },
      (error) => {
        console.error('Ocorreu um erro ao criar a postagem:', error);
        // Aqui você pode tratar o erro de acordo com as necessidades do seu aplicativo.
      }
    );
  }


}
