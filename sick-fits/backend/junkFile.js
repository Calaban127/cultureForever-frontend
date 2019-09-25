@id


type User {
    id: ID! @unique @id,
    name: String!,
    email: String!
  }
  
  type Item {
    id: ID! @unique @id,
    title: String!,
    description: String!,
    image: String,
    largeImage: String,
    price: Int!
    # createdAt: DateTime! @createdAt,
    # updatedAt: DateTime! @updatedAt,
    #  user: User!
  }