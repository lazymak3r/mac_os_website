import React, {memo, useMemo, useState, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

import classes from './TopBar.module.scss'
import {Time} from "../Time/Time";
import {Dropdown} from "../DropDown/Dropdown";
import {TopBarButton} from "../TopBarButton/TopBarButton";
import {selectActiveWindow} from "../../store/selectors/window.selector";
import {ConnectWalletPopup} from "../ConnectWalletPopup/ConnectWalletPopup";
import {toggleConnectModal} from "../../store/reducers/wallet.reducer";
import {ReactComponent as WifiIcon} from '../../assets/svg/wifi.svg'
import {selectedIsConnectPopupVisible} from "../../store/selectors/wallet.selector";


export const TopBar = memo(() => {
    const dispatch = useDispatch();
    const [logoDropdown, setLogoDropdown] = useState(false);

    const activeWindow = useSelector(selectActiveWindow);
    const isConnectPopupVisible = useSelector(selectedIsConnectPopupVisible);

    const toggleConnectPopup = useCallback((shown: boolean) => {
        dispatch(toggleConnectModal(shown))
    }, [])

    const logoOptions = useMemo(() => [
        {
            id: 1, label: 'About This Mac', onClick: () => {
                console.log(1)
            }
        },
        {
            id: 2, label: 'System Preferences', onClick: () => {
                console.log(2)
            }
        },
        {
            id: 3, label: 'App Store', separator: true, onClick: () => {
                console.log(3)
            }
        },
        {
            id: 4, label: 'Recent Items', separator: true, onClick: () => {
                console.log(3)
            }
        },
        {
            id: 5, label: 'Force Quit', separator: true, onClick: () => {
                console.log(3)
            }
        },
        {
            id: 6, label: 'Sleep', onClick: () => {
                console.log(3)
            }
        },
        {
            id: 7, label: 'Restart', onClick: () => {
                console.log(3)
            }
        },
        {
            id: 8, label: 'Shut Down ', separator: true, onClick: () => {
                console.log(3)
            }
        },
        {
            id: 9, label: 'Lock Screen ', onClick: () => {
                console.log(3)
            }
        }
    ], [])

    return (
        <>
            <div className={classes.topBarContainer}>
                <div className={classes.topBarMain}>
                    <Dropdown
                        width={250}
                        show={logoDropdown}
                        onClose={() => setLogoDropdown(false)}
                        options={logoOptions}>
                        <TopBarButton isLogo onClick={() => setLogoDropdown(!logoDropdown)}></TopBarButton>
                    </Dropdown>
                    <TopBarButton isFolder>{activeWindow?.name}</TopBarButton>
                    <TopBarButton>File</TopBarButton>
                    <TopBarButton>Edit</TopBarButton>
                    <TopBarButton>View</TopBarButton>
                </div>
                <div className={classes.topBarSecond}>
                    <ConnectWalletPopup show={isConnectPopupVisible} onClose={() => toggleConnectPopup(false)}>
                        <TopBarButton onClick={() => toggleConnectPopup(true)}>
                            <WifiIcon fill={'white'}/>
                        </TopBarButton>
                    </ConnectWalletPopup>
                    <Time/>
                </div>
            </div>


        </>
    )
})
