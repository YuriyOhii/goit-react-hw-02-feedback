import PropTypes from 'prop-types';
import { Note } from './Notification.styled';

export const Notification = ({ message }) => <Note>{message}</Note>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
