import {baseUrl} from "../../utils/constants";

export const farGalaxyTextAction = (text) => ({
    type: "PUT_TEXT",
    payload: text
})

export const getFarGalaxyTextAction = () => {
    return (dispatch) => {

        if (sessionStorage.getItem('text')) {
           dispatch(farGalaxyTextAction(sessionStorage.getItem('text')))
            }
        else {
            dispatch(farGalaxyTextAction("LOADING......"))
            let part = Math.floor(Math.random() * 5 + 1);
            fetch(baseUrl + 'films/' + part)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    sessionStorage.setItem('text', data.opening_crawl);
                    dispatch(farGalaxyTextAction(data.opening_crawl))
                })
                .catch(e => {
                    dispatch(farGalaxyTextAction("ERROR! Wrong request!"))
                })
        }
    }
}