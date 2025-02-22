import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CharactersService {
    constructor(private readonly httpService: HttpService) { }

    async getCharactersData(charactersName: string) {
        try {
            const response = await firstValueFrom(this.httpService.get(`https://rickandmortyapi.com/api/character?name=${charactersName}`));
            const results = response.data;
    
            if (!results || !results.results || results.results.length === 0) {
                throw new Error('Nenhum personagem encontrado');
            }
    
            return results.results.map(character => ({
                id: character.id,
                name: character.name,
                status: character.status,
                species: character.species,
                location: character.location ? character.location.name : 'Desconhecido',
                image: character.image
            }));
        } catch (error) {
            throw new Error('Erro ao buscar personagem');
        }
    }
    
      
    


}
