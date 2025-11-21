export const typeDefs = `
  type EventDetail {
    id: ID!
    organizer: String!
    attendees: Int!
    description: String!
  }

  type Query {
    eventDetail(id: ID!): EventDetail
  }
`
