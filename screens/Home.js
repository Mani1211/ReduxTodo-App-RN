import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  List,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Text,
  Right,
  Switch,
  CheckBox,
  Title,
  Subtitle,
  H1,
  Fab,
  Container,
  Content,
} from 'native-base';

import propTypes from 'prop-types';
import {connect} from 'react-redux';

import {deleteTodo, marCompleteTodo} from '../action/todos';

// TODO: action to perform in reduxtodo

const Home = ({navigation, marCompleteTodo, deleteTodo, todoState}) => {
  // if the length of the season is zero then rendering container with the message
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todoState.length == 0 ? (
        <Container style={styles.emptyContainer}>
          <H1 style={styles.heading}>
            Watch list is empty, start by adding one
          </H1>
        </Container>
      ) : (
        <Content padder>
          <H1 style={styles.heading}>Next Series to Watch</H1>
          <List>
            {todoState.map(season => (
              <ListItem icon key={season.id} style={styles.listItem} noBorder>
                <Left>
                  <Button
                    style={styles.actionButton}
                    onPress={() => {
                      console.log(season.id);
                      deleteTodo(season.id);
                    }}
                    danger>
                    <Icon active name="trash" />
                  </Button>
                </Left>
                <Body>
                  <Title style={styles.seasonName}>{season.name}</Title>
                  <Text note> {season.totalNoSeason} season to watch </Text>
                </Body>
                <Right>
                  <CheckBox
                    checked={season.isWatched}
                    onPress={() => marCompleteTodo(season.id)}
                  />
                </Right>
              </ListItem>
            ))}
          </List>
        </Content>
      )}

      <Fab
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => navigation.navigate('Add')}>
        <Icon name="add" />
      </Fab>
      <Text>Home</Text>
    </ScrollView>
  );
};

//TODO: redux config

Home.prototype = {
  deleteTodo: propTypes.func.isRequired,
  marCompleteTodo: propTypes.func.isRequired,
  todoState: propTypes.array.isRequired,
};

const mapStateToProps = state => ({
  todoState: state.todo,
});

const mapDispatchToProps = {
  deleteTodo: id => deleteTodo(id),
  marCompleteTodo: id => marCompleteTodo(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// empty container style will be work in the loading as well as the empty message screen
const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
