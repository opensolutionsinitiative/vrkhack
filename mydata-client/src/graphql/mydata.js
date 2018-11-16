import gql from 'graphql-tag';

const GET_MYDATA = gql`
query getMyDataByNationalId($henkilotunnus: String!) {
    MyDataByNationalID(Henkilotunnus: $henkilotunnus) {
    released,
    requestedBy,
    organization
  }
}
`

export {GET_MYDATA}