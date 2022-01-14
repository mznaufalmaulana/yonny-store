import React from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Notification extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	createNotification = (type) => {
		return () => {
			switch (type) {
				case 'info':
					NotificationManager.info('Info message' , 'Email Info', 3000);
					break;
				case 'success':
					NotificationManager.success('Success message', 'Email Sended', 3000);
					break;
				case 'warning':
					NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
					break;
				case 'error':
					NotificationManager.error('Error message', 'Click me!', 3000);
					break;
			}
		};
	};

	render(){
		this.createNotification('success');
		return(			
			<div>
				<NotificationContainer/>
			</div>
		);
	}

}

export default Notification;