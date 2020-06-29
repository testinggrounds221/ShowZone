import axios from 'axios';

import {useEffect,useState} from 'react';

export function useAxiosGetJSON(url){
	
	const [request,setRequest] = useState({
		loading:true,
		data:null,
		error:false,
	});
	

	useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: [response.data],
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
	}, [url])
    
    
	return request

}

/////////////////////////////////////////////////

export function useAxiosGetArray(url){
	
	const [request,setRequest] = useState({
		loading:true,
		data:null,
		error:false,
	});
	

	useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
	}, [url])
    

	return request

}
