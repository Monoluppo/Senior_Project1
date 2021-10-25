import * as api from '../api';

//Action creator
export const getSites = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSites();
        
        dispatch({type:'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }

}