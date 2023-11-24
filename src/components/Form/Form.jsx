import React, {useCallback, useEffect, useState} from 'react';
import "./Form.css"
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
	const {tg} = useTelegram()

	const [country, setCountry] = useState('')
	const [street, setStreet] = useState('')
	const [floor, setFloor] = useState('')
	const [room, setRoom] = useState('')

	const onSendData = useCallback(() => {
		const data = {
			country,
			street,
			floor,
			room
		}
		tg.sendData(JSON.stringify(data))
	}, [])

	useEffect(() => {
		tg.onEvent('mainButtonClicked', onSendData)
		return () => {
			tg.offEvent('mainButtonClicked', onSendData)
		}
	}, []);

	useEffect(() => {
		tg.MainButton.setParams({
			text: "Send data"
		})
	}, []);

	useEffect(() => {
		if (!street || !country || !floor || !room) {
			tg.MainButton.hide()
		} else {
			tg.MainButton.show()
		}
	}, [country, street, floor, room]);


	return (
			<div className={'form'}>
				<h3>Put your information</h3>
				<input value={country}
							 onChange={(e) => setCountry(e.target.value)}
							 className={'input'}
							 type="text"
							 placeholder={"Country"}/>
				<input value={street}
							 onChange={(e) => setStreet(e.target.value)}
							 className={'input'}
							 type="text"
							 placeholder={"Street"}/>
				<input value={floor}
							 onChange={(e) => setFloor(e.target.value)}
							 className={'input'}
							 type="number"
							 placeholder={"floor"}/>
				<input value={room}
							 onChange={(e) => setRoom(e.target.value)}
							 className={'input'}
							 type="number"
							 placeholder={"room"}/>
			</div>
	);
};

export default Form;