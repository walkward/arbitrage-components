import styled from 'styled-components';

import { globalPadding, borderRadius } from '../../styles/theme';
import { white } from '../../styles/colors';
import Modal from './Modal';

const StyledModal = styled(Modal).attrs({
  overlayClassName: 'Overlay',
  className: 'Modal',
})`
  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(42, 47, 65, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Modal {
    max-width: 50%;
    min-width: 300px;
    padding: ${globalPadding};
    position: absolute;
    border: none;
    background: ${white};
    overflow: auto;
    border-radius: ${borderRadius};
    outline: none;
  }
`;

export default StyledModal;
