export class CategoryDescriptor {

    public id: number;
    public name: string;

    constructor() {}

    public static import(rawData: any) {

        let category = new CategoryDescriptor();

        category.id        = rawData.hasOwnProperty('id') ? rawData.id : null;        
        category.name      = rawData.hasOwnProperty('name') ? rawData.name : "";

        return category;
    }

}

export class CategorySnapshot {

    public categories: any = [];
    /**
     *  @method CategorySnapshot.import
     *
     *  This method expects to receive the raw object response from category.json endpoint
     *  https://my.api.mockaroo.com/category.json?key=e31f5c00
     *  It returns a populated instance of type CategorySnapshot.
     */
    public static import(rawData: any) {

        let categories: CategorySnapshot = new CategorySnapshot();

        for (var i = 0; i < rawData.length; i++) {
            let pet: object = {};
            let row = rawData[i];
            pet = row.hasOwnProperty('id') ? CategoryDescriptor.import(row) : new CategoryDescriptor();
            categories.categories.push(pet);
        }

        return categories;
    }

}
