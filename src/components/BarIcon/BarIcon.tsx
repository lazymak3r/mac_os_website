import React, {memo, useMemo} from 'react';

import classes from './BarIcon.module.scss'
import activity_monitor from '../../assets/icons/activity_monitor.png'
import app_store from '../../assets/icons/app_store.png'
import books from '../../assets/icons/books.png'
import calculator from '../../assets/icons/calculator.png'
import discord from '../../assets/icons/discord.png'
import facebook from '../../assets/icons/facebook.png'
import finder from '../../assets/icons/finder.png'
import github from '../../assets/icons/github.png'
import google_chrome from '../../assets/icons/google_chrome.png'
import instagram from '../../assets/icons/instagram.png'
import launchpad from '../../assets/icons/launchpad.png'
import notes from '../../assets/icons/notes.png'
import photos from '../../assets/icons/photos.png'
import qr_encoder from '../../assets/icons/qr_encoder.png'
import safari from '../../assets/icons/safari.png'
import settings from '../../assets/icons/settings.png'
import spotify from '../../assets/icons/spotify.png'
import telegram from '../../assets/icons/telegram.png'
import terminal from '../../assets/icons/terminal.png'
import trash from '../../assets/icons/trash.png'
import twitter from '../../assets/icons/twitter.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import xcode from '../../assets/icons/xcode.png'
import youtube from '../../assets/icons/youtube.png'

type IconName =
    "activity_monitor"
    | "app_store"
    | "books"
    | "calculator"
    | "discord"
    | "facebook"
    | "finder"
    | "github"
    | "google_chrome"
    | "instagram"
    | "launchpad"
    | "notes"
    | "photos"
    | "qr_encoder"
    | "safari"
    | "settings"
    | "spotify"
    | "telegram"
    | "terminal"
    | "trash"
    | "twitter"
    | "whatsapp"
    | "xcode"
    | "youtube";

const IconsMap: { [key: string]: any } = {
    activity_monitor,
    app_store,
    books,
    calculator,
    discord,
    facebook,
    finder,
    github,
    google_chrome,
    instagram,
    launchpad,
    notes,
    photos,
    qr_encoder,
    safari,
    settings,
    spotify,
    telegram,
    terminal,
    trash,
    twitter,
    whatsapp,
    xcode,
    youtube
}

interface Props {
    iconName: IconName,
    onClick?: () => void
}

export const BarIcon: React.FC<Props> = memo(({iconName, onClick}) => {
    const iconSrc = useMemo(() => IconsMap[iconName], [iconName])

    return (
        <div className={classes.barIconContainer} onClick={onClick}>
            <img src={iconSrc} alt={iconSrc} className={classes.barIcon}/>
        </div>
    )
})