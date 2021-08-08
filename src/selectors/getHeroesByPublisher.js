import { heroes } from "../data/Heroes";


export const getHeroesByPublisher = ( publisher ) => {

    

    const validPublishers = ['DC Comics', 'Marvel Comics' ];

    if (!validPublishers.includes(publisher) ){
        throw new Error (`publisher "${ publisher }"No es correcto`)
    }

    return heroes.filter( hero => hero.publisher === publisher );

} 