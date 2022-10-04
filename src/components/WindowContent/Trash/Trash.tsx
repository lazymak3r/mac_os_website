import React, {memo, useMemo} from 'react';

import classes from './Trash.module.scss'
import narek from '../../../assets/team/narek.jpeg'
import aram from '../../../assets/team/aram.jpeg'
import rob from '../../../assets/team/rob.jpeg'
import aro from '../../../assets/team/aro.jpeg'
import zara from '../../../assets/team/zara.jpeg'
import yegor from '../../../assets/team/yegor.jpeg'
import gor from '../../../assets/team/gor.jpeg'
import mher from '../../../assets/team/mher.jpeg'
import albert from '../../../assets/team/albert.jpeg'


export const Trash = memo(() => {
    const members = useMemo(() => {
        return [
            {id: 1, name: 'Narek', avatar: narek, role: 'Member assistant'},
            {id: 2, name: 'Rob', avatar: rob, role: 'Member assistant'},
            {id: 3, name: 'Aram', avatar: aram, role: 'Member assistant'},
            {id: 3, name: 'Aro', avatar: aro, role: 'Member'},
            {id: 3, name: 'Zara', avatar: zara, role: 'Member'},
            {id: 3, name: 'Yegor', avatar: yegor, role: 'Member'},
            {id: 3, name: 'Gor', avatar: gor, role: 'Member'},
            {id: 3, name: 'Mher', avatar: mher, role: 'Member'},
            {id: 3, name: 'Albert', avatar: albert, role: 'Member'},
        ]
    }, [])


    return (
        <div className={classes.members}>
            {members.map(member => {
                return (
                    <div className={classes.memberCard}>
                        <img src={member.avatar} alt="" width={180} height={180} className={classes.avatar}/>
                        <span className={classes.name}>{member.name}</span>
                    </div>
                )
            })}
        </div>
    )
})
