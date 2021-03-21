import axios from 'axios';



export const getData = async() => {
    try {

        const res = await axios.get('/api/orders');

        return res.data;


    } catch (err) {
        console.log(err)
    }
}