import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {

    private ninjas = [
        {id:0, name: 'Naruto', village: 'hisar'},
        {   id:1, name: 'Sasuke', village: 'dadri'}, 


    ]

    getNinjas( village?:'hisar' | 'dadri') {
        if(village) {
        return this.ninjas.filter(ninja => ninja.village === village);
    }

    }


}
