import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui negative button "
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderCreate(isSignedIn) {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button green" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <Link to={`/streams/${stream.id}`} className="header">
            {stream.title}
            <div className="description">{stream.description}</div>
          </Link>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.streams);
    return (
      <div>
        <h2>StreamO's!: </h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
