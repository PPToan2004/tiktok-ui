import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7321215042358083586~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=f78087a1&x-expires=1769158800&x-signature=9SSSjh4EKKrHV%2FjXpdB0J47%2BJGA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my'
                alt=''
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <p className={cx('name')}>Quốc Nguyễn Phú</p>

            </div>
        </div>
    )
}

AccountItem.propTypes = {

}

export default AccountItem;