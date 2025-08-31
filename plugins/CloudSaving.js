	class CloudSaving extends RenJS.Plugin {
    const cloudAPI;
		onSave(slot,data) {
			// data is an object with all the information of the current game
			// this data will be saved locally in the browser, in localstorage
			// slot is a number used to id the game

			// save in the cloud as a string with the given slot
			let serializedData = JSON.stringify(data)
			cloudAPI.set(`MyRenJSGame_slot_${slot}`,serializedData)
		}

		onLoad(slot,data){
			// data is an object loaded from localstorage
			// if no data is found locally the object will be empty
			// you can add/replace any property you want to the data parameter

			// load data from the cloud with the given slot
			let serializedData = cloudAPI.get(`MyRenJSGame_slot_${slot}`)

			if (serializedData) {
				// parse as JSON
				let loadedData = JSON.parse(serializedData)
				// add loaded data to the data parameter sent
				Object.assign(data, loadedData)
			}
		}
	}

	RenJSGame.addPlugin('CloudSaving',CloudSaving)