import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'


const Header = () => {
	const {onClose, tg} = useTelegram()

	return (
			<div className={'header'}>
				<Button onClick={onClose}>Close</Button>
				<span className={'username'}>
					{tg.initData}
				</span>
				<div>
					{tg.initData}
				</div>
				<div>
					{tg.initDataUnsafe}
				</div>
			</div>
	);
};

export default Header;