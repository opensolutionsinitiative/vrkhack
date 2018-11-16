import React, { Component } from 'react'
import { Query } from 'react-apollo'
import {GET_MYDATA} from './graphql/mydata'
import DataRelease from './components/dataRelease'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <section class="app-header">
          <h3 style={{textAlign: 'center'}}>Hei Alina!</h3>
          <p>Henkilötietosi on luovutettu seuraaville tahoille:</p>
          <Query query={GET_MYDATA} variables={{henkilotunnus: "310118-998M"}}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;
            return (
              data.MyDataByNationalID.length > 0 ?
              <section class="DataContainer">
              <p>
              <a class='fetchData' href={`data: text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data))}`} download="mydata.json">Lataa omat tietosi</a>
              </p>
              {data.MyDataByNationalID.map(item => (
                  <DataRelease key={item.id} organization={item.organization} requestedBy={item.requestedBy} released={item.released} />
              ))}
              </section> : <section class="DataContainer"><span style={{fontWeight: 'normal', fontSize: '20px'}}>Ei luovutettuja henkilötietoja</span></section>
            );
          }}
        </Query>
        </section>
      </div>
    );
  }
}

export default App
