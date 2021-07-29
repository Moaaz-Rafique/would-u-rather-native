import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function User({user, ...props}) {     
  const { name, answeredPolls, createdPolls,image } = user;    
    return (    
        <Card {...props}> 
            <Card.Title 
                title={name}
                subtitle={"Score: " + (answeredPolls+createdPolls)}
            />  
            <Card.Content>
            <Paragraph>
                Answered Polls: {answeredPolls +"\n"} 
                Created Polls: {createdPolls}
            </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: image }} />            
        </Card>
    );
}
export default User;