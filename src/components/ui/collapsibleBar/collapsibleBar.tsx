// CollapsibleBar.tsx
import React, { useState } from 'react';
import './collapsibleBar.scss';
import UserModel from '../../../models/UserModel';

interface CollapsibleBarProps {
    user: any;
    children: React.ReactNode;
    handleUserClick: (user: UserModel) => void,
    collapsedUsers: any
}


const CollapsibleBar: React.FC<CollapsibleBarProps> = ({ user, children, handleUserClick, collapsedUsers }) => {

    const [isCollapsed, setIsCollapse] = useState<boolean>(true)

    const handleUser = (selectedUser: UserModel) => {
        handleUserClick(selectedUser)
        setIsCollapse(collapsedUsers.includes(selectedUser.login));


    };
    return (

        <div className="collapsible-bar" key={user.id}  >

            <div className="item-header" onClick={() => handleUser(user)}  >
                <span className="item-title">{user.login}</span>
                <div className="arrow">{isCollapsed ? '🔼' : '🔽'}</div>
            </div>
            <div className={`collapsible-content ${isCollapsed ? '' : 'expanded'}`}>
                {children}
            </div>
        </div>
    );
};

export default CollapsibleBar;
