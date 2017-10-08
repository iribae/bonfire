const Command = require('Command')
const StateTracker = require('tera-state-tracker')

module.exports = function bonfire(dispatch) {
	const command = Command(dispatch)
	const state = StateTracker(dispatch)
	
command.add('purple', () => {
	command.message('Spawning purple bonfire.')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696969,
	type: 9, 
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 
		})
	})
	command.add('red', () => {
	command.message('Spawning red bonfire.')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696970,
	type: 1, // 
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 
		})
	})
	command.add('blue', () => {
	command.message('Spawning blue bonfire.')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696971,
	type: 8, 
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 
		})
	})
	command.add('santa', () => {
	command.message('Spawning santa candle.')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696972,
	type: 6, 
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 
		})
	})
	command.add('fos', () => {
	command.message('Spawning flame of sacrifice.')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696973,
	type: 10, 
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 
		})
	})
	command.add('fire', () => {
	command.message('Spawning bonfire without stand.')
	dispatch.toClient('S_SPAWN_BONFIRE', 1, {
	unk1: 0,
	cid: 6969696974,
	type: 2, 
	unk2: 0,
	x: state.client.position.x + 30,
	y: state.client.position.y + 30,
	z: state.client.position.z + 30,
	state: 0 
		})
	})
	command.add('despawnred', () => {
		command.message('Despawning red bonfire.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
		cid: 6969696970,
		unk: 0
		})
	})
	command.add('despawnblue', () => {
		command.message('Despawning blue bonfire.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
		cid: 6969696971,
		unk: 0
		})
	})
	command.add('despawnpurple', () => {
		command.message('Depsawning purple bonfire.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
		cid: 6969696969,
		unk: 0
		})
	})
	command.add('despawnsanta', () => {
		command.message('Despawning santa candle.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
		cid: 6969696972,
		unk: 0
		})
	})
	command.add('despawnfire', () => {
		command.message('Despawning fire without stand.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
		cid: 6969696974,
		unk: 0
		})
	})
	command.add('despawnfos', () => {
		command.message('Despawning flame of sacrifice.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
		cid: 6969696973,
		unk: 0
		})
	})
}


	
