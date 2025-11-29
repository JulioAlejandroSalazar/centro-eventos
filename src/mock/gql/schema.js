export const typeDefs = `
  type EventDetail {
    id: ID!
    title: String!
    date: String!
    time: String!
    location: String!
    category: String!
    organizer: String!
    capacity: Int!
    attendees: Int!
    description: String!
  }

  type Query {
    eventDetail(id: ID!): EventDetail
  }
`
