import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from './AccountPreview.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles)
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7321215042358083586~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=f78087a1&x-expires=1769158800&x-signature=9SSSjh4EKKrHV%2FjXpdB0J47%2BJGA%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="" />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocnguyenphu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <label className={cx('label')}>Followers</label>
                    <strong className={cx('value')}>8.2M </strong>
                    <label className={cx('label')}>Likes</label>
                </p>
            </div>


        </div>
    )
}

export default AccountPreview;