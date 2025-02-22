import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { plainToInstance } from 'class-transformer';
import { Characters } from './entity/characters.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('characters')
export class CharactersController {
    constructor(private readonly charactersService: CharactersService) {}

    @UseGuards(JwtAuthGuard)
    @Get(':nameCharacter')
    async getCharacterByName(@Param('nameCharacter') nameCharacter: string) {
        const charactersData = await this.charactersService.getCharactersData(nameCharacter);
        return plainToInstance(Characters, charactersData);
    }
}
