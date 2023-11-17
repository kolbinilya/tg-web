import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'


const Header = () => {
	const {onClose, user, user1} = useTelegram()

	return (
			<div className={'header'}>
				<Button onClick={onClose}>Close</Button>
				<span className={'username'}>
					{user?.username || "Guest"}
					{user1?.username || "Guest"}
				</span>
			</div>
	);
};

export default Header;