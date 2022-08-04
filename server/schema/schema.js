const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const { articles } = require("./sampleData");

const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    markdown: { type: GraphQLString },
    category: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    article: {
      type: ArticleType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return articles.find((article) => article.id === args.id);
      },
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve: () => {
        return articles;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
