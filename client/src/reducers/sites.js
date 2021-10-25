export default (sites = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return sites;
    
        default:
            return sites;
    }
};