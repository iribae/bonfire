const Command = require('Command')
const StateTracker = require('tera-state-tracker')
const bonfireid = {
	'red': 1,
	'fire' : 2,
	'santa' : 6,
	'blue' : 8,
	'purple' : 9,
	'fos' : 10
}
var cidnum = [6969]
module.exports = function bonfire(dispatch) {
	const command = Command(dispatch)
	const state = StateTracker(dispatch)
	
	command.add('bonfire', (arg) => {
		command.message('Spawning ' + arg + ' bonfire.')
		dispatch.toClient('S_SPAWN_BONFIRE', 1, {
			unk1: 0,
			cid: cidnum[cidnum.length-1]+1,
			type: bonfireid[arg], 
			unk2: 0,
			x: state.client.position.x + 30,
			y: state.client.position.y + 30,
			z: state.client.position.z + 30,
			state: 0 
		})
		cidnum.push(cidnum[cidnum.length-1]+1)
	})
	
	command.add('despawnlast', () => {
		command.message('Despawning last bonfire.')
		dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
			cid: cidnum[cidnum.length-1],
			unk: 0
		})
		cidnum.pop(cidnum.length-1)
	})
	command.add('despawnall', () => {
		command.message('Despawning all bonfires.')
		for (let removekebab of bonfireid)
		{
			dispatch.toClient('S_DESPAWN_BONFIRE', 1, {
				cid: removekebab,
				unk: 0
			})
			bonfireid.splice(bonfireid.indexOf(removekebab))
		}
	})
}
