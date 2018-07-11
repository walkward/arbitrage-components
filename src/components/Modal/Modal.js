import React, { Children } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import Title from './Title';
import Content from './Content';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';

ReactModal.setAppElement('#root');

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const {
      state: { showModal },
      props: {
        className, modalClassName, children, title,
      },
    } = this;

    return (
      <div>
        <Button onClick={this.handleOpenModal}>Trigger Modal</Button>
        <ReactModal
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          className={modalClassName}
          portalClassName={className}
          {...this.props}
        >
          <Title title={title} />

          <Content>
            {Children.toArray(children)}
          </Content>

          <ButtonGroup justifyContent="flex-end">
            <Button type="hollow" onClick={this.handleCloseModal}>Close</Button>
            <Button>Send</Button>
          </ButtonGroup>

        </ReactModal>
      </div>
    );
  }
}

Modal.propTypes = {
  className: PropTypes.string.isRequired,
  modalClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

// Modal.defaultProps = {
//
// };

export default Modal;
