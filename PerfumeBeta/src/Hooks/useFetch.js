import { useState, useEffect } from 'react';
import { fetch } from 'react-native';

export const useFetch = url => {
    console.log(' ============ useFetch url => ', url);

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ inProgress, setInProgress ] = useState(null);

    console.log(' ============ useFetch start ============ ');

    useEffect (() => {
        const fetchData = async () => {
            try {
                setInProgress(true);

                const res = await fetch(url);
                console.log('fetchRes =====> ' , res);
                const result = await res.json();
                console.log('fetchResult =====> ' , result);

                if(res.ok) {
                    setData(result);
                    setError(null);
                } else {
                    throw result;
                }
            } catch (error) {
                setError(error);
            } finally {
                setInProgress(false);
            }
        }
    }, []);

    console.log(' ============ useFetch end   ============ ');

    return { data, error, inProgress };
}