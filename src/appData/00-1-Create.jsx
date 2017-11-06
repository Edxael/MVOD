import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const MUTATION = gql`
  mutation createVideo( $language: String!, $pic: String!, $rating: Int!, $singer: String!, $song: String!, $tags: String!, $video: String!, $year: Int! )
    {
      createVideo( language: $language, pic: $pic, rating: $rating, singer: $singer, song: $song, tags: $tags, video: $video, year: $year )
      {
        language pic rating singer song tags video year
      }
    }
`


class AddVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { language: "", pic: "", rating: "", singer: "", song: "", tags: "", video: "", year: "" }
  }

  exe1 = ()=>{
    console.log("Video Added");
  }

  render(){
    const labSty = {  }
    const inpSty = {  }
    return(
      <div>
        <h2>Add Game</h2>

        <div>
                        
          <div>
            <label style={labSty}>Song</label>
            <input style={inpSty} type="text" value={this.state.song} onChange={ (eve)=>{ this.setState({ song: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Singer</label>
            <input style={inpSty} type="text" value={this.state.singer} onChange={ (eve)=>{ this.setState({ singer: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Video(String)</label>
            <input style={inpSty} type="text" value={this.state.video} onChange={ (eve)=>{ this.setState({ video: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Picture(String)</label>
            <input style={inpSty} type="text" value={this.state.pic} onChange={ (eve)=>{ this.setState({ pic: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Language</label>
            <input style={inpSty} type="text" value={this.state.language} onChange={ (eve)=>{ this.setState({ language: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Year</label>
            <input style={inpSty} type="text" value={this.state.year} onChange={ (eve)=>{ this.setState({ year: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Tags</label>
            <input style={inpSty} type="text" value={this.state.tags} onChange={ (eve)=>{ this.setState({ tags: eve.target.value }) } } />
          </div>
          <div>
            <label style={labSty}>Rating</label>
            <input style={inpSty} type="text" value={this.state.rating} onChange={ (eve)=>{ this.setState({ rating: eve.target.value }) } } />
          </div>

        </div>

        <br/>
        <button onClick={this.exe1}>Add Video</button>
      </div>
    )
  }
}

export default graphql(MUTATION)(AddVideo)
