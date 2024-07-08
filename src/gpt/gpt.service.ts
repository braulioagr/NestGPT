import { Injectable } from '@nestjs/common';
import { orthographyCheckUseCase } from './use-cases';
import { OrthographyDto } from './dtos/orthography.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  //Solo va a llamar a casos de uso
  public async orthographyCheck(orthographyDto: OrthographyDto) {
    console.log(this.openai.apiKey);
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }
}
