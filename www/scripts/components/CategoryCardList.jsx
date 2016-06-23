import React from 'react';
import CategoryCard from './components/CategoryCard';

export class CategoryCardList extends React.Component {
  getDefaultProps: function() {
    return {
      categories: [],
      click: null
    };
  }

  render: function() {
    var self = this;
    var cardNodes = this.props.categories
      .sort(function(a, b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      })
      .map(function(cardData) {
        return (
          <CategoryCard data={cardData} key={cardData.title} link={self.props.link} />
        );
      });

    return (
      <div className="card-list category-card-list">
        {cardNodes}
      </div>
    );
  }
}
