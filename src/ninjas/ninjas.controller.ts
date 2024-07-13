import { Controller, Delete, Get, Post, Put,Param,Query,Body } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninjas.dto';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjaService: NinjasService) {}  //since here use definng everyhting inside class(providers,controllers) so we need to make object of that after impoting and then we can use its method but by making constructor we can use it directly
   
    @Get()
    findNinjas(@Query('type') village: 'hisar' | 'dadri') {
        return this.ninjaService.getNinjas(village);
        
    }

    @Get(':id')
    findNinja(@Param('id') id: string) {
        return {
            id,
        };
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name,
        };
    }

    @Put(':id')
    updateNinja(@Param('id') id: string, @Body() updateNinjaDto: CreateNinjaDto){
        return {
            id,
            name:updateNinjaDto.name,
        };
    }

    @Delete(':id')  
    deleteNinja(@Param('id') id: string){
        return {
        id, 
    }
    }   








}


// GET /ninjas->[{..}, {..}]
// GET /ninjas/:id -> {..}
// POST /ninjas
//PUT /ninjas/:id-->{..}
//DELETE /ninjas/:id
