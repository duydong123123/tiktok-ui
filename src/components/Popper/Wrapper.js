import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import { DefaultLayout } from '~/layouts';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

DefaultLayout.PropTypes = {
    children: PropTypes.node.isRequired,
};
export default Wrapper;
