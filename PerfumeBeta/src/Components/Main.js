import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Styled from 'styled-components/native';
import { useFetch } from '../Hooks/useFetch';

const URL = 'http://192.168.0.167:1202/scent';

const PerFumeList = () => {
    const { data, error, inProgress } = useFetch(URL);

    console.log('Main =======>', data);

    return (
        <Fragment>
            <Text>{data}</Text>
        </Fragment>
    );
}

export default PerFumeList;
