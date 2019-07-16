import React, { Component } from "react";
import { FlatList } from "react-native";
import Layout from "../components/suggestion-list-layout";
import Empty from "../components/empty";
import Separator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    list: state.categoryMovies
  };
}

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmtpy = () => <Empty text="No sugestions :(" />;
  itemSeparator = () => <Separator />;
  viewMovie = item => {
    this.props.dispatch({
      type: "SET_SELECTED_MOVIE",
      payload: {
        movie: item
      }
    });
  };
  renderItem = ({ item }) => {
    return (
      <Suggestion
        {...item}
        onPress={() => {
          this.viewMovie(item);
        }}
      />
    );
  };
  render() {
    return (
      <Layout title="Recomended for you:">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(SuggestionList);
