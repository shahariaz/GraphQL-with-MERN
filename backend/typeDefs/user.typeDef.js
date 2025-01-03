const userTypeDef = `#graphql
type User {
_id: ID!
username: String!
name: String!
password:String!
ProfilePicture:String
gender:String!

}
type Query{
users:[User!]
authUser:User
user(userId:ID!):User
}
type Mutation{
  singUp(input:SignUpInput!):User
  singIn(input:SignInInput!):User
  logout:LogoutResponse
}
input SignUpInput{
  username:String!
  name:String!
  password:String!
  gender:String!

}
input SignInInput{
  username:String!
  password:String!
}
type LogoutResponse{
  message:String!
}
`;
export default userTypeDef;
