import React, {memo, useCallback} from 'react';
import Web3 from "web3";
import {useDispatch, useSelector} from "react-redux";

import classes from './TopBar.module.scss'
import {Time} from "../Time/Time";
import {TopBarButton} from "../TopBarButton/TopBarButton";
import {selectActiveWindow} from "../../store/selectors/window.selector";
import {ConnectWalletPopup} from "../ConnectWalletPopup/ConnectWalletPopup";
import {toggleConnectModal} from "../../store/reducers/wallet.reducer";
import {ReactComponent as WifiIcon} from '../../assets/svg/wifi.svg'
import {selectedIsConnectPopupVisible} from "../../store/selectors/wallet.selector";


export const TopBar = memo(() => {
    const dispatch = useDispatch();

    const activeWindow = useSelector(selectActiveWindow);
    const isConnectPopupVisible = useSelector(selectedIsConnectPopupVisible);

    const toggleConnectPopup = useCallback((shown: boolean) => {
        dispatch(toggleConnectModal(shown))
    }, [])

    return (
        <>
            <div className={classes.topBarContainer}>
                <div className={classes.topBarMain}>
                    <TopBarButton isLogo></TopBarButton>
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
