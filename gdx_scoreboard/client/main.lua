local Keys = {
	["ESC"] = 322, ["F1"] = 288, ["F2"] = 289, ["F3"] = 170, ["F5"] = 166, ["F6"] = 167, ["F7"] = 168, ["F8"] = 169, ["F9"] = 56, ["F10"] = 57, 
	["~"] = 243, ["1"] = 157, ["2"] = 158, ["3"] = 160, ["4"] = 164, ["5"] = 165, ["6"] = 159, ["7"] = 161, ["8"] = 162, ["9"] = 163, ["-"] = 84, ["="] = 83, ["BACKSPACE"] = 177, 
	["TAB"] = 37, ["Q"] = 44, ["W"] = 32, ["E"] = 38, ["R"] = 45, ["T"] = 245, ["Y"] = 246, ["U"] = 303, ["P"] = 199, ["["] = 39, ["]"] = 40, ["ENTER"] = 18,
	["CAPS"] = 137, ["A"] = 34, ["S"] = 8, ["D"] = 9, ["F"] = 23, ["G"] = 47, ["H"] = 74, ["K"] = 311, ["L"] = 182,
	["LEFTSHIFT"] = 21, ["Z"] = 20, ["X"] = 73, ["C"] = 26, ["V"] = 0, ["B"] = 29, ["N"] = 249, ["M"] = 244, [","] = 82, ["."] = 81,
	["LEFTCTRL"] = 36, ["LEFTALT"] = 19, ["SPACE"] = 22, ["RIGHTCTRL"] = 70, 
	["HOME"] = 213, ["PAGEUP"] = 10, ["PAGEDOWN"] = 11, ["DELETE"] = 178,
	["LEFT"] = 174, ["RIGHT"] = 175, ["TOP"] = 27, ["DOWN"] = 173,
	["NENTER"] = 201, ["N4"] = 108, ["N5"] = 60, ["N6"] = 107, ["N+"] = 96, ["N-"] = 97, ["N7"] = 117, ["N8"] = 61, ["N9"] = 118
}

local idVisable = true
ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

	Citizen.Wait(2000)
	ESX.TriggerServerCallback('gdx_scoreboard:getConnectedPlayers', function(connectedPlayers)
		UpdatePlayerTable(connectedPlayers)
	end)
end)

Citizen.CreateThread(function()
	Citizen.Wait(500)
	SendNUIMessage({
		action = 'updateServerInfo',

		maxPlayers = GetConvarInt('sv_maxclients', 256),
		uptime = 'unknown',
		playTime = '00h 00m'
	})
end)

RegisterNetEvent('gdx_scoreboard:updateConnectedPlayers')
AddEventHandler('gdx_scoreboard:updateConnectedPlayers', function(connectedPlayers)
	UpdatePlayerTable(connectedPlayers)
end)

RegisterNetEvent('gdx_scoreboard:updatePing')
AddEventHandler('gdx_scoreboard:updatePing', function(connectedPlayers)
	SendNUIMessage({
		action  = 'updatePing',
		players = connectedPlayers
	})
end)

RegisterNetEvent('gdx_scoreboard:toggleID')
AddEventHandler('gdx_scoreboard:toggleID', function(state)
	if state then
		idVisable = state
	else
		idVisable = not idVisable
	end

	SendNUIMessage({
		action = 'toggleID',
		state = idVisable
	})
end)

RegisterNetEvent('uptime:tick')
AddEventHandler('uptime:tick', function(uptime)
	SendNUIMessage({
		action = 'updateServerInfo',
		uptime = uptime
	})
end)

function UpdatePlayerTable(connectedPlayers)
name = GetPlayerName(PlayerId())
	local formattedPlayerList, num = {}, 1
	local ambulance, police, sheriff, vlada, mecano, mecano2, reporter, unicorn, bahamas, vigne, pivovar, unemployed, estate, cardeal, arma, stato, galaxy, kavarna, weazelnews, players = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

	for k,v in pairs(connectedPlayers) do
		
		if v.name == "Gdany" then
			if num == 1 then
				table.insert(formattedPlayerList, ('<tr><td style="color:lime;font-weight:bold;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 2
			elseif num == 2 then
				table.insert(formattedPlayerList, ('<td style="color:lime;font-weight:bold;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 3
			elseif num == 3 then
				table.insert(formattedPlayerList, ('<td style="color:lime;font-weight:bold;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 4
			elseif num == 4 then
				table.insert(formattedPlayerList, ('<td style="color:lime;font-weight:bold;">%s</td><td>%s</td><td>%s</td></tr>'):format(v.name, v.id, v.ping))
				num = 1
			end
		elseif v.group == "superadmin" then
			if num == 1 then
				table.insert(formattedPlayerList, ('<tr><td style="color:yellow;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 2
			elseif num == 2 then
				table.insert(formattedPlayerList, ('<td style="color:yellow;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 3
			elseif num == 3 then
				table.insert(formattedPlayerList, ('<td style="color:yellow;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 4
			elseif num == 4 then
				table.insert(formattedPlayerList, ('<td style="color:yellow;">%s</td><td>%s</td><td>%s</td></tr>'):format(v.name, v.id, v.ping))
				num = 1
			end
		elseif v.group == "admin" then
			if num == 1 then
				table.insert(formattedPlayerList, ('<tr><td style="color:#FF1A1A;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 2
			elseif num == 2 then
				table.insert(formattedPlayerList, ('<td style="color:#FF1A1A;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 3
			elseif num == 3 then
				table.insert(formattedPlayerList, ('<td style="color:#FF1A1A;">%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 4
			elseif num == 4 then
				table.insert(formattedPlayerList, ('<td style="color:#FF1A1A;">%s</td><td>%s</td><td>%s</td></tr>'):format(v.name, v.id, v.ping))
				num = 1
			end
		else
			if num == 1 then
				table.insert(formattedPlayerList, ('<tr><td>%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 2
			elseif num == 2 then
				table.insert(formattedPlayerList, ('<td>%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 3
			elseif num == 3 then
				table.insert(formattedPlayerList, ('<td>%s</td><td>%s</td><td>%s</td>'):format(v.name, v.id, v.ping))
				num = 4
			elseif num == 4 then
				table.insert(formattedPlayerList, ('<td>%s</td><td>%s</td><td>%s</td></tr>'):format(v.name, v.id, v.ping))
				num = 1
			end
		end
		
		if v.name == name then
			myid = v.id
		end

		players = players + 1

		if v.job == 'ambulance' then
			ambulance = ambulance + 1
		elseif v.job == 'police' or v.job == 'sheriff' then
			police = police + 1
		elseif v.job == 'vlada' then
			vlada = vlada + 1
		elseif v.job == 'mecano' then
			mecano = mecano + 1
		elseif v.job == 'mecano2' then
			mecano2 = mecano2 + 1
		--[[ elseif v.job == 'slaughterer' then
			slaughterer = slaughterer + 1
		elseif v.job == 'fueler' then
			fueler = fueler + 1
		elseif v.job == 'lumberjack' then
			lumberjack = lumberjack + 1
		elseif v.job == 'tailor' then
			tailor = tailor + 1 ]]
		elseif v.job == 'journaliste' then
			reporter = reporter + 1
		--[[ elseif v.job == 'miner' then
			miner = miner + 1 ]]
		elseif v.job == 'unicorn' then
			unicorn = unicorn + 1
        elseif v.job == 'bahamas' then
            bahamas = bahamas + 1
		elseif v.job == 'vigne' then
			vigne = vigne + 1
		elseif v.job == 'pivovar' then
			pivovar = pivovar + 1
		elseif v.job == 'unemployed' then
			unemployed = unemployed + 1
		elseif v.job == 'realestateagent' then
			estate = estate + 1
		elseif v.job == 'cardealer' then
			cardeal = cardeal + 1
		elseif v.job == 'armeria' then
			arma = arma + 1
		elseif v.job == 'state' then
			stato = stato + 1
        elseif v.job == 'galaxy' then
            galaxy = galaxy + 1
        elseif v.job == 'kavarna' then
            kavarna = kavarna + 1
        elseif v.job == 'weazelnews' then
            weazelnews = weazelnews + 1
		end
	end

	if num == 1 then
		table.insert(formattedPlayerList, '</tr>')
	end
    
    --local Pname = GetPlayerName(source)
    local Pname = GetPlayerName(PlayerId())
    local Pid = myid


	SendNUIMessage({
		action  = 'updatePlayerList',
		players = table.concat(formattedPlayerList)
	})

	SendNUIMessage({
		action = 'updatePlayerJobs',
		jobs   = {ambulance = ambulance, police = police, vlada = vlada, mecano = mecano, mecano2 = mecano2, reporter = reporter, unicorn = unicorn, bahamas = bahamas, vigne = vigne, pivovar = pivovar, unemployed = unemployed, estate = estate, cardeal = cardeal, arma = arma, stato = stato, galaxy = galaxy, kavarna = kavarna, weazelnews = weazelnews, player_count = players}
	})
    
    SendNUIMessage({
		action = 'updatePoliceCount',
		policeCount = police
	})
    
    SendNUIMessage({
		action = 'updatePoliceCounts',
		policeCounts = police
	})
    
    SendNUIMessage({
		action = 'updatePname',
		playerName = Pname
	})
    
    SendNUIMessage({
		action = 'updatePid',
		playerId = Pid
	})
    
    SendNUIMessage({
		action = 'updateAmbulanceCount',
		ambulanceCount = ambulance
	})
    
    SendNUIMessage({
		action = 'updateVladaCount',
		vladaCount = vlada
	})
    
    SendNUIMessage({
		action = 'updateMecanoCount',
		mecanoCount = mecano
	})
    
    SendNUIMessage({
		action = 'updateMecano2Count',
		mecano2Count = mecano2
	})
    
    SendNUIMessage({
		action = 'updateUnicornCount',
		unicornCount = unicorn
	})
    
    SendNUIMessage({
		action = 'updateBahamasCount',
		bahamasCount = bahamas
	})
    
    SendNUIMessage({
		action = 'updateGalaxyCount',
		galaxyCount = galaxy
	})
    
    SendNUIMessage({
		action = 'updateVigneCount',
		vigneCount = vigne
	})
    
    SendNUIMessage({
		action = 'updatePivovarCount',
		pivovarCount = pivovar
	})
    
    SendNUIMessage({
		action = 'updateKavarnaCount',
		kavarnaCount = kavarna
	})
    
    SendNUIMessage({
		action = 'updateWeazelnewsCount',
		weazelnewsCount = weazelnews
	})
end

Citizen.CreateThread(function()
	while true do
		Citizen.Wait(0)

		if IsControlJustReleased(0, Keys['DELETE']) and IsInputDisabled(0) then
			ToggleScoreBoard()
			Citizen.Wait(200)

		-- D-pad up on controllers works, too!
		elseif IsControlJustReleased(0, 172) and not IsInputDisabled(0) then
			ToggleScoreBoard()
			Citizen.Wait(200)
		end
	end
end)

-- Close scoreboard when game is paused
Citizen.CreateThread(function()
	while true do
		Citizen.Wait(300)

		if IsPauseMenuActive() and not IsPaused then
			IsPaused = true
			SendNUIMessage({
				action  = 'close'
			})
		elseif not IsPauseMenuActive() and IsPaused then
			IsPaused = false
		end
	end
end)

function ToggleScoreBoard()
	SendNUIMessage({
		action = 'toggle'
	})
end

Citizen.CreateThread(function()
	local playMinute, playHour = 0, 0

	while true do
		Citizen.Wait(1000 * 60) -- every minute
		playMinute = playMinute + 1
	
		if playMinute == 60 then
			playMinute = 0
			playHour = playHour + 1
		end

		SendNUIMessage({
			action = 'updateServerInfo',
			playTime = string.format("%02dh %02dm", playHour, playMinute)
		})
	end
end)
