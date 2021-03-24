import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const Detail = ({ route }) => {

  const item = route.params.item;

  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    
    const fetchScent = async () => {
      setIsError(false);
      setIsLoading(true);        
      try {    
        fetch('http://192.168.0.167:1202/scent/'+item.id)
          .then((response) => response.json())
          .then((json) => { setData(json) })
          .catch((error) => console.error(error))
      } catch {
        setIsError(true);
      }      
      setIsLoading(false);
    }
    
    fetchScent();
  }, []);

  return (        
    <>
      {isError && <Text>에러가 발생했습니다.</Text>}
      {isLoading ? (
        <ActivityIndicator animating={true} color={Colors.red800} />
      ) : (      
        <Card>
          <Card.Content>
            <Title>{data.name}</Title>
            <Card.Cover source={{ uri: 'http://192.168.0.167:1202/' + item.thumbnailFilename }} />
            <View>
                <Paragraph>{item.categories}</Paragraph>
            </View>         
            <Paragraph>Card content</Paragraph>
          </Card.Content>        
        </Card>        
      )}

    </>
  );
};

export default Detail;
