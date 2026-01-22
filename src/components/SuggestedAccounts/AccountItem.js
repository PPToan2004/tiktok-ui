import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';
const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                placement='bottom'
                offset={[-20, 0]}
                delay={[800, 0]}
                render={renderPreview}
            >
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
            </Tippy>
        </div>
    )
}

AccountItem.propTypes = {

}

export default AccountItem;