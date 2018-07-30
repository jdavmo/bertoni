export class PetDescriptor {

    public category: number;
    public id: number;
    public name: string;
    public photoUrls: string;
    public tags: string;

    constructor() {}

    public static import(rawData: any) {

        let pet = new PetDescriptor();

        pet.id        = rawData.hasOwnProperty('id') ? rawData.id : null;
        pet.category  = rawData.hasOwnProperty('category') ? rawData.category : null;
        pet.name      = rawData.hasOwnProperty('name') ? rawData.name : "";
        pet.photoUrls = rawData.hasOwnProperty('photoUrls') ? rawData.photoUrls : null;
        pet.tags      = rawData.hasOwnProperty('tags') ? rawData.tags : null;

        return pet;
    }

}

export class PetSnapshot {

    public pets: any = [];
    /**
     *  @method PetSnapshot.import
     *
     *  This method expects to receive the raw object response from pet.json endpoint
     *  https://my.api.mockaroo.com/pet.json?key=e31f5c00
     *  It returns a populated instance of type PetSnapshot.
     */
    public static import(rawData: any) {

        let pets: PetSnapshot = new PetSnapshot();

        for (var i = 0; i < rawData.length; i++) {
            let pet: object = {};
            let row = rawData[i];
            pet = row.hasOwnProperty('id') ? PetDescriptor.import(row) : new PetDescriptor();
            pets.pets.push(pet);
        }

        return pets;
    }

}
