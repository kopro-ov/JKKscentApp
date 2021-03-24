import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Detail = ({ route }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.167:1202/scent/'+route.params.id)
      .then((response) => response.json())
      .then((json) => { setData(json) })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (        
    <Card>
        <Card.Content>
            <Title>{data.name}</Title>
            <Card.Cover source={{ uri: 'http://192.168.0.167:1202/' + data.thumbnailFilename }} />
            <View>
                <Paragraph>{data.categories}</Paragraph>
                <Paragraph >{data.regDt}</Paragraph>
            </View>                
            <Paragraph>Card content</Paragraph>
        </Card.Content>        
    </Card>        
  );
};

export default Detail;
