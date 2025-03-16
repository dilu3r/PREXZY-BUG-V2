require("./all/module")

global.owner = "https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04" 
global.namabot = "𝕻𝕽𝕰𝖃𝖄 𝕭𝖀𝕾 𝕻𝟐" //BOT NAME
global.namaCreator = "*PRECIOUS AYOMIDE*" //CREATOR NAME
global.autoJoin = false //DON'T CHANGE  / JANGAN GANTI
global.antilink = false //DON'T CHANGE  / JANGAN GANTI
global.versisc = '1.0.0' //DON'T CHANGE 
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"aExWJhkQLnchR7XD5plpGpl8+0MOO+3ajWQYf2kMXE0="},"public":{"type":"Buffer","data":"zR+hhxiM/x097h+15JlcFBAzQWYEO9d5YhHPTU2kHCE="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0NmHXFlgFDIdDbeGESrj4sTqZMd9giEs2S6wWIlLkXQ="},"public":{"type":"Buffer","data":"paw5AKw5WsDKXlCrLWwwb7dk6q/UtvzStnYis1ixgl0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"uOQkqU4HL4W5JUIwevC4k3jM7sky3bZ82lLaQ8p/5ks="},"public":{"type":"Buffer","data":"6dAmVTTcdAPTlSWYiZHPIyQc3cvDGrtfmswiAT+KQXE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"wPvl2kk/vuUiDoCbk2rtYGIL4Nv+xPEzdyV9w043UW0="},"public":{"type":"Buffer","data":"sZ1s7SY9IHaMGcjixBYNhSL+6fQhA485rHpFtkx9xF4="}},"signature":{"type":"Buffer","data":"osgB7y0Npsn1K/uL0w7Sf2v0T64dUAEYzRfk4+qezjT7mocEFNN103nJV78teWPSE688ZzfvtB1h2PAjD3SzBg=="},"keyId":1},"registrationId":5,"advSecretKey":"RBrAcWgC8u5cXMNmq4tyN6XmvpzaISuI1b6/ggNNYyg=","processedHistoryMessages":[{"key":{"remoteJid":"94723420249@s.whatsapp.net","fromMe":true,"id":"33CEE253A94D96B0E5FB6BE24266E0EA"},"messageTimestamp":1742130187},{"key":{"remoteJid":"94723420249@s.whatsapp.net","fromMe":true,"id":"1F14230A269D4CB838A25D217C145C4F"},"messageTimestamp":1742130189}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"BslBk95oSyiUnm3iQxZ4og","phoneId":"cbff8e15-2abe-4818-9162-32071c61b334","identityId":{"type":"Buffer","data":"sH8WDvNHqLFmQrayWDRbxrgZgM4="},"registered":true,"backupToken":{"type":"Buffer","data":"Y1HMFupqtgNlNwCSVslJDoripFM="},"registration":{},"pairingCode":"RH9GK5NQ","me":{"id":"94723420249:3@s.whatsapp.net","name":"𝗜'𝗠\n\n\n\n𝗢\n𝗟\n𝗗\n\n\n\n𝗞\n𝗜\n𝗡\n𝗚\n\n\n\n𝗗\n𝗜\n𝗡\n𝗨\n𝗭\n𝗭\n.\n.\n.\n.","lid":"147236327534798:3@lid"},"account":{"details":"CN/a5uUFEIaY274GGAMgACgA","accountSignatureKey":"gWIphfo0t84vOkaHiLTQQZQIxRL1dTy69IbGiVqPEn8=","accountSignature":"5cSo26Ch8lH+KIuiBUlgS1Q52CU922/AxpdGkOEPNjT0Z2YyC8NNEN21WDPmOqRfkbFoS3e8iM2QCKilemkRCg==","deviceSignature":"eR9BEwcfnBppJFjPDekRcpY5vx1RJ7gdJXTfl44ROvteaLGykPbwk3xWt3RnrALs3Lh8nso0xJBJkFb9YzZVBg=="},"signalIdentities":[{"identifier":{"name":"94723420249:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYFiKYX6NLfOLzpGh4i00EGUCMUS9XU8uvSGxolajxJ/"}}],"platform":"smba","lastAccountSyncTimestamp":1742130185,"myAppStateKeyId":"AAAAAPCe"}'
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/6b841282edd26fa590b6c.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://whatsapp.com/channel/0029VaaUfPO8qIzztuf42D04' 
global.thumb = fs.readFileSync("./thumb.png") ///DON'T CHANGE  
global.audionya = fs.readFileSync("./all/sound.mp3") //DON'T CHANGE  
global.packname = "𝐁𝐲 𝕻𝕽𝕰𝖃𝖄 𝕭𝖀𝕾 𝕻𝟐 " 
global.author = "*PRECIOUS AYOMIDE👑*" 
global.jumlah = "5" ////DON'T CHANGE

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
