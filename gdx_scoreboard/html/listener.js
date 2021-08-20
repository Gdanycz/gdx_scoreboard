var visable = false;

$(function () {
	window.addEventListener('message', function (event) {

		switch (event.data.action) {
			case 'toggle':
				if (visable) {
					$('#wrap').fadeOut();
				} else {
					$('#wrap').fadeIn();
				}
                if (visable) {
				$('#wrapx').fadeOut();
			} else {
				$('#wrapx').fadeIn();
			}

				visable = !visable;
				break;

			case 'close':
				$('#wrap').fadeOut();
				visable = false;
				break;

			case 'toggleID':

				if (event.data.state) {
					$('td:nth-child(2),th:nth-child(2)').show();
					$('td:nth-child(5),th:nth-child(5)').show();
					$('td:nth-child(8),th:nth-child(8)').show();
					$('td:nth-child(11),th:nth-child(11)').show();
				}

				break;

			case 'updatePlayerJobs':
				var jobs = event.data.jobs;

				$('#player_count').html(jobs.player_count);

				$('#ems').html(jobs.ems);
				$('#police').html(jobs.police);
				$('#vlada').html(jobs.vlada);
				$('#mechanic').html(jobs.mechanic);
				$('#mecano2').html(jobs.mecano2);
				/* $('#slaughterer').html(jobs.slaughterer);
				$('#fueler').html(jobs.fueler);
				$('#lumberjack').html(jobs.lumberjack);
				$('#tailor').html(jobs.tailor); */
				$('#reporter').html(jobs.reporter);
				/* $('#miner').html(jobs.miner); */
				$('#vigne').html(jobs.vigne);
				$('#unicorn').html(jobs.unicorn);
				$('#pivovar').html(jobs.pivovar);
				$('#estate').html(jobs.estate);
				$('#cardeal').html(jobs.cardeal);
				$('#arma').html(jobs.arma);
				$('#stato').html(jobs.stato);
				$('#unemployed').html(jobs.unemployed);
				break;

			case 'updatePlayerList':
				$('#playerlist tr:gt(0)').remove();
				$('#playerlist').append(event.data.players);
				applyPingColor();
				//sortPlayerList();
				break;
                
            case 'updatePname':
                var count = event.data.playerName;
                    $("#PNAME").html(count);
			break; 
                
            case 'updatePid':
                var count = event.data.playerId;
                    $("#PID").html(count);
			break;
                
            case 'updatePoliceCount':
                var count = event.data.policeCount;
                if (count >= 1) {
                    $("#PD").css("color", "eeeeee");
                }
                else {
                    $("#PD").css("color", "303030");
			     }
			break; 
                
            case 'updateAmbulanceCount':
                var count = event.data.ambulanceCount;
                if (count >= 1) {
                    $("#EMS").css("color", "eeeeee");
                }
                else {
                    $("#EMS").css("color", "303030");
			 }       
			break;
                
            case 'updateVladaCount':
                var count = event.data.vladaCount;
                if (count >= 1) {
                    $("#VLADA").css("color", "eeeeee");
                }
                else {
                    $("#VLADA").css("color", "303030");
			     }
			break; 
                
            case 'updateMecanoCount':
                var count = event.data.mecanoCount;
                if (count >= 1) {
                    $("#MECH").css("color", "eeeeee");
                }
                else {
                    $("#MECH").css("color", "303030");
			     }
			break; 
            
            case 'updateMecano2Count':
                var count = event.data.mecano2Count;
                if (count >= 1) {
                    $("#MECH2").css("color", "eeeeee");
                }
                else {
                    $("#MECH2").css("color", "303030");
			     }
			break;
                
            case 'updateUnicornCount':
                var count = event.data.unicornCount;
                if (count >= 1) {
                    $("#UNICORN").css("color", "eeeeee");
                }
                else {
                    $("#UNICORN").css("color", "303030");
			     }
			break;
                
            case 'updateBahamasCount':
                var count = event.data.bahamasCount;
                if (count >= 1) {
                    $("#BAHAMA").css("color", "eeeeee");
                }
                else {
                    $("#BAHAMA").css("color", "303030");
			     }
			break;
                
            case 'updateGalaxyCount':
                var count = event.data.galaxyCount;
                if (count >= 1) {
                    $("#GALAXY").css("color", "eeeeee");
                }
                else {
                    $("#GALAXY").css("color", "303030");
			     }
			break;
                
            case 'updateVigneCount':
                var count = event.data.vigneCount;
                if (count >= 1) {
                    $("#VINARI").css("color", "eeeeee");
                }
                else {
                    $("#VINARI").css("color", "303030");
			     }
			break;
                
            case 'updatePivovarCount':
                var count = event.data.pivovarCount;
                if (count >= 1) {
                    $("#PIVARI").css("color", "eeeeee");
                }
                else {
                    $("#PIVARI").css("color", "303030");
			     }
			break;
                
            case 'updateKavarnaCount':
                var count = event.data.kavarnaCount;
                if (count >= 1) {
                    $("#KAVARNA").css("color", "eeeeee");
                }
                else {
                    $("#KAVARNA").css("color", "303030");
			     }
			break;
                
            case 'updateWeazelnewsCount':
                var count = event.data.weazelnewsCount;
                if (count >= 1) {
                    $("#WEAZELNEWS").css("color", "eeeeee");
                }
                else {
                    $("#WEAZELNEWS").css("color", "303030");
			     }
			break;
                
            /*case 'updatePoliceCounts': // #e94444 | #4fca4f
                var count = event.data.policeCounts;
                if (count >= 6) {
                    $("#CAR").css("color", "#4fca4f");
                    $("#SHOP").css("color", "#4fca4f");
                    $("#JAVAHERI").css("color", "#4fca4f");
                    $("#BANK1").css("color", "#4fca4f");
                    $("#BANK2").css("color", "#4fca4f");
                    $("#updatetext").text("Veškeré vykrádání povoleno");
                    // 4 green
                } else if (count >= 5) {
                    $("#CAR").css("color", "#4fca4f");
                    $("#SHOP").css("color", "#4fca4f");
                    $("#JAVAHERI").css("color", "#4fca4f");
                    $("#BANK1").css("color", "#4fca4f");
                    $("#BANK2").css("color", "#e94444");
                    $("#updatetext").text("Vykrádání klenotnictví a bank povoleno");
                    // 3 green 1 red
                } else if (count >= 3) {
                    $("#CAR").css("color", "#4fca4f");
                    $("#SHOP").css("color", "#4fca4f");
                    $("#JAVAHERI").css("color", "#e94444");
                    $("#BANK1").css("color", "#e94444");
                    $("#BANK2").css("color", "#e94444");
                    $("#updatetext").text("Vykrádání obchodu povoleno");
                    // 1 green 3 red
                } else if (count >= 1) {
                    $("#CAR").css("color", "#4fca4f");
                    //$("#AUTO").html("Vykrádání auta je povoleno").css("color", "white");
                    $("#SHOP").css("color", "#e94444");
                    $("#JAVAHERI").css("color", "#e94444");
                    $("#BANK1").css("color", "#e94444");
                    $("#BANK2").css("color", "#e94444");
                    $("#updatetext").text("Vykrádání auta je povoleno");
                    // 1 green 3 red
                } else {
                    $("#CAR").css("color", "#c2c2c2");
                    //$("#AUTO").html("Vykrádání auta je zakázáno").css("color", "red");
                    $("#SHOP").css("color", "#c2c2c2");
                    $("#JAVAHERI").css("color", "#c2c2c2");
                    $("#BANK1").css("color", "#c2c2c2");
                    $("#BANK2").css("color", "#c2c2c2");
                    $("#updatetext").text("Není povoleno žádné vykrádání");
                    // 4 red
                }
			break;*/
                
            case 'updatePoliceCounts':
                var count = event.data.policeCounts;
                if (count >= 8) {
                    $(".globalni").css("display", "none");
                    $(".hlavni_banka").css("display", "block");
                    $(".mala_banka").css("display", "block");
                    $(".obchod").css("display", "block");
                    $(".auto").css("display", "block");
                    $(".globalni .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".hlavni_banka .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".mala_banka .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".obchod .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".auto .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                } else if (count >= 6) {
                    $(".globalni").css("display", "none");
                    $(".hlavni_banka").css("display", "block");
                    $(".mala_banka").css("display", "block");
                    $(".obchod").css("display", "block");
                    $(".auto").css("display", "block");
                    $(".globalni .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".hlavni_banka .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".mala_banka .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".obchod .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".auto .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                } else if (count >= 4) {
                    $(".globalni").css("display", "none");
                    $(".hlavni_banka").css("display", "block");
                    $(".mala_banka").css("display", "block");
                    $(".obchod").css("display", "block");
                    $(".auto").css("display", "block");
                    $(".globalni .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".hlavni_banka .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".mala_banka .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".obchod .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".auto .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                } else if (count >= 2) {
                    $(".globalni").css("display", "none");
                    $(".hlavni_banka").css("display", "block");
                    $(".mala_banka").css("display", "block");
                    $(".obchod").css("display", "block");
                    $(".auto").css("display", "block");
                    $(".globalni .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".hlavni_banka .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".mala_banka .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".obchod .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".auto .statex").html("Můžete <font color=\"#fff\" style=\"background: green; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                } else {
                    $(".globalni").css("display", "block");
                    $(".unos").css("display", "block");
                    $(".hlavni_banka").css("display", "none");
                    $(".mala_banka").css("display", "none");
                    $(".obchod").css("display", "none");
                    $(".auto").css("display", "none");
                    $(".globalni .statex").html("Nemůžete <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">vykrádat</font>");
                    $(".unos").html("Nemůžete dělat <font color=\"#fff\" style=\"background: red; border-radius: 5px; padding: 0px 4px;\">nelegální aktivity</font>");
                }
                break;

			case 'updatePing':
				updatePing(event.data.players);
				applyPingColor();
				break;

			case 'updateServerInfo':
				if (event.data.maxPlayers) {
					$('#max_players').html(event.data.maxPlayers);
				}

				if (event.data.uptime) {
					$('#server_uptime').html(event.data.uptime);
				}

				if (event.data.playTime) {
					$('#play_time').html(event.data.playTime);
				}

				break;

			default:
				console.log('gdx_scoreboard: unknown action!');
				break;
		}
	}, false);
});

function applyPingColor() {
	$('#playerlist tr').each(function () {
		$(this).find('td:nth-child(3),td:nth-child(6),td:nth-child(9),td:nth-child(12)').each(function () {
			var ping = $(this).html();
			var color = 'green';

			if (ping > 150 && ping < 300) {
				color = 'orange';
			} else if (ping >= 300) {
				color = 'red';
			}

			$(this).css('color', color);
			$(this).html(ping + " <span style='color:white;'>ms</span>");
		});

	});
}

// Todo: not the best code
function updatePing(players) {
	jQuery.each(players, function (index, element) {
		if (element != null) {
			$('#playerlist tr:not(.heading)').each(function () {
				$(this).find('td:nth-child(2):contains(' + element.id + ')').each(function () {
					$(this).parent().find('td').eq(2).html(element.ping);
				});
				$(this).find('td:nth-child(5):contains(' + element.id + ')').each(function () {
					$(this).parent().find('td').eq(5).html(element.ping);
				});
				$(this).find('td:nth-child(8):contains(' + element.id + ')').each(function () {
					$(this).parent().find('td').eq(8).html(element.ping);
				});
				$(this).find('td:nth-child(11):contains(' + element.id + ')').each(function () {
					$(this).parent().find('td').eq(11).html(element.ping);
				});
			});
		}
	});
}

function sortPlayerList() {
	var table = $('#playerlist'),
		rows = $('tr:not(.heading)', table);

	rows.sort(function(a, b) {
		var keyA = $('td', a).eq(1).html();
		var keyB = $('td', b).eq(1).html();

		return (keyA - keyB);
	});

	rows.each(function(index, row) {
		table.append(row);
	});
}
