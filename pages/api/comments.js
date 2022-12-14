/* 
Next.js API route support: https://nextjs.org/docs/api-routes/introduction
Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. 
We can send the data to the hygraph and it will update the database and publish it automatically
*/

import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphqlToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphqlToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
}
