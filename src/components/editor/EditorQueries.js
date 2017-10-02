import gql from 'graphql-tag';

export const FEED_QUERY = gql`
  query allPosts($lang: String!) {
    allBios(filter: { lang: $lang }) {
      id
      firstName
      lastName
      dateOfBirth
      email
      phone
      location
    }
    allWorks(filter: { lang: $lang }, orderBy: startYear_DESC) {
      id
      companyName
      companyWebsite
      position
      companyLocation
      startYear
      endYear
      responsibilities
      workProjects(filter: { lang: $lang }) {
        name
        website
        description
        goal
        myRole
      }
    }
  }
`;
