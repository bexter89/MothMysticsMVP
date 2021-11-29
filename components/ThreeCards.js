import React, {useState, useEffect, Component} from 'react';
import { Text, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function ThreeCards ({threeCardDraw}) {
  console.log('three card data', threeCardDraw)
  const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 10,
    },
    itemContainer: {
      justifyContent: 'center',
      alignItmes: 'center',
      flexDirection: 'column',
      flex: 1,
      padding: 20,
      height: 800,
      width: 500,
    },
  });

  return (
    <FlatGrid
  itemDimension={600}
  spacing={10}
  data={threeCardDraw}
  renderItem={({ item }) => (
    <View style={styles.itemContainer}>
    <>
    <Image
    source={{uri: item.img}}
    style={{width: 300, height: 520}}
    />
    <br/>
    <Card elevation={3}>
    <Card.Title title={item.name} subtitle={item.arcana} />
    <Card.Content>
    <Text>This card represents:</Text>
    {item.meanings.light.map((string, index)=>{
      return <Paragraph key={index}>
        {'- '+ string +'.'}
      </Paragraph>
    })}
    </Card.Content>
    <Card.Content>
    <Text>All cards have a shadow side:</Text>
    {item.meanings.shadow.map((string, index)=>{
      return <Paragraph key={index}>
        {'- '+ string +'.'}
      </Paragraph>
    })}
    </Card.Content>
    <Card.Content>
    <Text>Questions to ponder:</Text>
    {item['Questions to Ask'].map((string, index)=>{
      return <Paragraph key={index}>
        {'- '+ string}
      </Paragraph>
    })}
    </Card.Content>
    </Card>
    </>
    </View>
  )}
  />
  )
};



      // <>
      // <Image
      // source={{uri: threeCardDraw[0].img}}
      // style={{width: 300, height: 520}}
      // />
      // <br/>
      // <Card elevation={3}>
      // <Card.Title title={threeCardDraw[0].name} subtitle={threeCardDraw[0].arcana} />
      // <Card.Content>
      // <Text>This card represents:</Text>
      // {threeCardDraw[0].meanings.light.map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string +'.'}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // <Card.Content>
      // <Text>All cards have a shadow side:</Text>
      // {threeCardDraw[0].meanings.shadow.map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string +'.'}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // <Card.Content>
      // <Text>Questions to ponder:</Text>
      // {threeCardDraw[0]['Questions to Ask'].map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // </Card>
      // <Image
      // source={{uri: threeCardDraw[1].img}}
      // style={{width: 300, height: 520}}
      // />
      // <br/>
      // <Card elevation={3}>
      // <Card.Title title={threeCardDraw[1].name} subtitle={threeCardDraw[1].arcana} />
      // <Card.Content>
      // <Text>This card represents:</Text>
      // {threeCardDraw[1].meanings.light.map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string +'.'}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // <Card.Content>
      // <Text>All cards have a shadow side:</Text>
      // {threeCardDraw[1].meanings.shadow.map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string +'.'}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // <Card.Content>
      // <Text>Questions to ponder:</Text>
      // {threeCardDraw[1]['Questions to Ask'].map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // </Card>
      // <Image
      // source={{uri: threeCardDraw[2].img}}
      // style={{width: 300, height: 520}}
      // />
      // <br/>
      // <Card elevation={3}>
      // <Card.Title title={threeCardDraw[2].name} subtitle={threeCardDraw[2].arcana} />
      // <Card.Content>
      // <Text>This card represents:</Text>
      // {threeCardDraw[2].meanings.light.map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string +'.'}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // <Card.Content>
      // <Text>All cards have a shadow side:</Text>
      // {threeCardDraw[2].meanings.shadow.map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string +'.'}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // <Card.Content>
      // <Text>Questions to ponder:</Text>
      // {threeCardDraw[2]['Questions to Ask'].map((string, index)=>{
      //   return <Paragraph key={index}>
      //     {'- '+ string}
      //   </Paragraph>
      // })}
      // </Card.Content>
      // </Card>
      // </>