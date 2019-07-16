import React, { Component } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Empty from "../components/empty";
import Separator from "../../sections/components/horizontal-separator";
import Category from "../components/category";
import Layout from "../components/category-list-layout";
import { connect } from "react-redux";
import API from "../../../utils/api";

function mapStateToProps(state) {
  return {
      list: state.categoryList,
      categoryMovies: state.categoryMovies
  };
}

class CategoryList extends Component {
  keyExtractor = item => item.id;
  renderEmpty = () => <Empty text="No suggestions :(" />;
  itemSeparator = () => <Separator />;
  changeCategory = async category => {
    const movies = await API.getSuggestionByCategory(category);
    this.props.dispatch({
      type: "SET_CATEGORY_MOVIES",
      payload: {
        movies
      }
    });
  };
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.changeCategory(item.id);
        }}
      >
        <Category {...item} />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Layout title="Categories:">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

export default connect(mapStateToProps)(CategoryList);
