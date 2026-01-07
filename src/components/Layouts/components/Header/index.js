import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { forwardRef, useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle Changle language
                break;
            default:
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const SearchBox = forwardRef((props, ref) => (
        <div ref={ref} className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    ));

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@crist',
        },

        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <SearchBox />
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>

                            {/* <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="data:image/jpeg;base64,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"
                                alt="NguyenVanA"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
