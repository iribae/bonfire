const Command = require('Command')
const StateTracker = require('tera-state-tracker')

module.exports = function bonfire(dispatch) {
	const command = Command(dispatch)
	const state = StateTracker(dispatch)
	
command.add('purple', () => {
	command.message('Spawning purple bonfire...')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 9, // 1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 // 0 = full flame, anything else = embers
		})
	})
	command.add('red', () => {
	command.message('Spawning red bonfire...')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 1, // 1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 // 0 = full flame, anything else = embers
		})
	})
	command.add('blue', () => {
	command.message('Spawning blue bonfire...')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 8, // 1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 // 0 = full flame, anything else = embers
		})
	})
	command.add('santa', () => {
	command.message('Spawning santa candle...')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 6, // 1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 // 0 = full flame, anything else = embers
		})
	})
	command.add('sacrifice', () => {
	command.message('Spawning flame of sacrifice...')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 10, // 1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 // 0 = full flame, anything else = embers
		})
	})
	command.add('fire', () => {
	command.message('Spawning bonfire without stand...')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 2, // 1,3,11 = normal bonfire, 2 = fire without stand, 6 = santa candle, 8 = blue fire, 9 = purple fire, 10 = flame of sacrifice
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 // 0 = full flame, anything else = embers
		})
	})
}

	
