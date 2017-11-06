import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo'
import { client } from './appData/gcool/EndPoint.jsx'
import RoutingComp from './appData/00-0-Routing.jsx'

class IndexCom extends Component {
  render() {
    return(
      <div>

        <ApolloProvider client={client}>

          <RoutingComp/>

        </ApolloProvider>

      </div>
    )
  }
}

ReactDOM.render(<IndexCom/>, document.getElementById("root"));
