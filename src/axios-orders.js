import axios from 'axios';

const instanace = axios.create(
    {baseURL: "http://localhost:8000"}
);

export default instanace;