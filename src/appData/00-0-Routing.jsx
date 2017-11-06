import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import CreateItm from './00-1-Create.jsx'
// import ReadItm from './00-2-Create.jsx'
// import UpdateItm from './00-3-Read.jsx'
// import DeleteItm from './00-4-Delete.jsx'

import CRUD1 from './00-1-1-CRUD.jsx'


export default class extends Component {
  render() {
    const LKSty = {}
    const bar1 = {}
    return(
      <div>
        <Router>
          <div>

            <div>
              <Link style={LKSty} to="/">Home</Link> | <Link style={LKSty} to="/cre">Create</Link>
            </div>

            <hr style={bar1} />

            <Switch>
              <Route exact path="/" component={CRUD1}></Route>
              <Route path="/cre" component={CreateItm}></Route>

            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}


// <Link style={LKSty} to="/rea">Read</Link>
// <Link style={LKSty} to="/upd">Update</Link>
// <Link style={LKSty} to="/del">Delete</Link>



// <Route path="/rea" component={ReadItm}></Route>
// <Route path="/upd" component={UpdateItm}></Route>
// <Route path="/del" component={DeleteItm}></Route>
