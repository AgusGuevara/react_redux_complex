import React from "react";
import Modal from "../Modal";
import history from "../../reducers/history";
import { connect } from "react-redux";
import { fetchSingleStream } from "../../actions";
import { Link } from "react-router-dom";
import { deleteStream } from "../../actions/index";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Borrar
        </button>
        <Link onClick={() => history.push("/")} className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Seguro que queres borrar el stream?";
    }
    return `Seguro que queres borrar el stream:  ${this.props.stream.title}`;
  }

  render() {
    return (
      <Modal
        title="Borrar el stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchSingleStream, deleteStream }
)(StreamDelete);
