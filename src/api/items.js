// This is where our api calls for the items rousrources will live
import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllItems = () => {
    return axios(`${apiUrl}/items}`)
}

// READ -> Show
export const getOneItem = (id) => {
    return axios(`${apiUrl}/items/${id}}`)
}

//  Create (create a item)


// Update (update a item)


// Delete (delet a item)