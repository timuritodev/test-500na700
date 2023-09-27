import React from 'react';
import { useState } from 'react';
import './PopupButton.scss';
import { Popup } from '../Popup/Popup.jsx';

export const PopupButton = () => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const switchPopup = () => {
		setIsPopupOpen(!isPopupOpen);
	};

	return (
		<div className="popup-button">
			<button className="popup-button__image" onClick={switchPopup} />
			<Popup
				isPopupOpen={isPopupOpen}
				switchPopup={switchPopup}
			/>
		</div>
	);
};
