import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PendejoCharacter } from '../models/Pendejo';


export interface PendejosCharacters {
  results: PendejoCharacter[];
}

@Injectable({
  providedIn: 'root',
})
export class RickymortoService {
  httpClient = inject(HttpClient);
  getAll() {
    const urlApi = 'https://rickandmortyapi.com/api/character';

    return this.httpClient.get<PendejosCharacters>(urlApi);
  }
}
