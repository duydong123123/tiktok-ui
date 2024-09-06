import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/0c320a286ede91e3f077263410f8a3b1~c5_720x720.jpeg?lk3s=a5d48078&amp;nonce=26953&amp;refresh_token=a8e80986f4e951e77e74f3ab25c6fe46&amp;x-expires=1725789600&amp;x-signature=aOPridj3oWM1qUkLmWzjNmREZTc%3D&amp;shp=a5d48078&amp;shcp=81f88b70"'
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
