import React, {memo, useRef, useEffect, useCallback, FC, useMemo} from 'react';
import Web3 from "web3";
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";

import classes from './ConnectWalletPopup.module.scss'
import {Switch} from "../Switch/Switch";
import {setWallet} from "../../store/reducers/wallet.reducer";
import {useNotification} from "../Notifications";
import {selectedIsConnected} from "../../store/selectors/wallet.selector";

declare var window: any

interface ConnectWalletPopupProps {
    show: boolean,
    children: React.ReactNode,
    onClose: () => void;
}

export const ConnectWalletPopup: FC<ConnectWalletPopupProps> = memo(({show, children, onClose}) => {
    const dispatch = useDispatch();
    const toast = useNotification();
    const popupRef = useRef<HTMLDivElement>(null);

    const isConnected = useSelector(selectedIsConnected);

    const detectCurrentProvider = useCallback(() => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            toast.open({
                appName: 'finder',
                title: 'Meta Mask',
                content: 'Non-ethereum browser. You should install Metamask',
                autoClose: -1,
            })
        }

        return provider;
    }, [])

    const checkConnection = useCallback(async () => {
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                const web3 = new Web3(currentProvider);
                const accounts = await web3.eth.getAccounts();

                dispatch(setWallet({
                    isConnected: !!accounts && accounts.length > 0,
                    accounts: accounts,
                }))
            }
        } catch (err) {
            toast.open({
                appName: 'finder',
                title: 'Meta Mask',
                content: 'Non-ethereum browser. You should install Metamask',
                autoClose: -1,
            })
        }
    }, [])

    const connectWalletHandler = useCallback(async () => {
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                await currentProvider.request({method: 'eth_requestAccounts'});
                const web3 = new Web3(currentProvider);
                const accounts = await web3.eth.getAccounts();

                dispatch(setWallet({
                    isConnected: !!accounts && accounts.length > 0,
                    accounts: accounts,
                }))
            }
        } catch (err) {
            toast.open({
                appName: 'finder',
                title: 'Meta Mask',
                content: 'User rejected the request.',
                autoClose: -1,
            })
        }
    }, [])

    const disconnectWalletHandler = useCallback(async () => {
        const currentProvider = detectCurrentProvider();
        if (currentProvider) {
            const web3 = new Web3(currentProvider);

            dispatch(setWallet({
                isConnected: false,
                accounts: [],
            }))
        }
    }, [])

    const clickOutsideHandler = useCallback((event: any) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            onClose()
        }
    }, [])

    const onChangeHandler = useCallback(async (value: boolean) => {
        if (value) {
            await connectWalletHandler();
        } else {
            await disconnectWalletHandler();
        }
    }, [connectWalletHandler, disconnectWalletHandler])

    const connectedContent = useMemo(() => {
        return (
            <div className={classes.connected}>
                Connected
            </div>
        )
    }, [])

    const disconnectedContent = useMemo(() => {
        return (
            <div className={classes.disconnected}>
                Disconnected
            </div>
        )
    }, [])

    useEffect(() => {
        checkConnection();

        document.addEventListener("mouseup", clickOutsideHandler);
        return () => {
            document.removeEventListener("mouseup", clickOutsideHandler);
        }
    }, [])

    return (
        <div className={classes.container}>
            {children}

            <div ref={popupRef} className={classNames([classes.popup, {[classes.show]: show}])}>
                <div className={classes.popupHeader}>
                    <p className={classes.label}>Connect wallet</p>
                    <Switch checked={isConnected} onChange={onChangeHandler}/>
                </div>
                {/*{isConnected ? connectedContent : disconnectedContent}*/}
            </div>
        </div>
    )
})
