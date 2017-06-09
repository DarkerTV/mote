import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as common from '../actions/common';
import * as note from '../actions/note';
import NoteModify from '../components/NoteModify';
import * as fromRoot from '../reducers';

class NoteAdd extends PureComponent {
  static propTypes = {
    draft: ImmutablePropTypes.map.isRequired,
    setTitle: PropTypes.func.isRequired,
    saveDraft: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.setTitle('Añadir Nota');
  }

  render() {
    return (
      <NoteModify draft={this.props.draft} saveDraft={this.props.saveDraft} />
    );
  }
}

const mapStateToProps = state => ({
  draft: fromRoot.getNoteDraft(state),
});

const mapDispatchToProps = dispatch => ({
  setTitle(title) {
    dispatch(common.setTitle(title));
  },
  saveDraft(draft) {
    dispatch(note.setDraft(draft));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteAdd);
