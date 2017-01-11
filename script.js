/* These scripts were used in the ASP.NET environment to change the class dependent on the status of the phase. Currently this   script is not working with the html and css files, however if you are planning to use this code in an ASP.NET environment be sure to: 
1) Include runat="server" and ClientIDMode="Static" to the div's
(e.g. - <asp:Panel ID="InitToolTip" runat="server" class="tooltiptext" ClientIDMode="Static"></asp:Panel>)
2) Change "div" to "asp:Panel"
*/

$(document).ready(function () {

// PROJECT STAGE BANNER ====================================================================================
	changeClassForStatus();

	function changeClassForStatus()
		//Evaluates project status and returns the appropiate color for the status
		//TransAlta Green = Complete
		//TransAlta Orange = In Progress
		//Light Gray = Not Started
	{
		//class names
		var complete = "timeline-badge success";
		var inprogress = "timeline-badge success donut";
		var parallelprogress = "timeline-badge success loading";
		var incomplete = "timeline-badge default";
		var checkmark = "<i class='glyphicon glyphicon-ok'></i>";

		//stages
		var stage1_1 = $('#initiation');
		var stage1_2 = $('#bus_case');
		var stage1_3 = $('#prj_charter');
		var stage2_1 = $('#bus_req');
		var stage2_2 = $('#sec_risk_ases');
		var stage2_3 = $('#chg_mang_ases');
		var stage2_4 = $('#plan_PGT');
		var stage3_1 = $('#chg_mang_plan');
		var stage3_2 = $('#trans_sup_plan');
		var stage3_3 = $('#exec_plan');
		var stage4_1 = $('#prj_close');

		var statusNo = Number($('#ProjectStatusNumber').html());
		//alert(statusNo);

		//if the projectstatus is "num" then change the classes to indicate what stage they are on
		switch (statusNo) {
			case 1:
				stage1_1.addClass(inprogress);
				stage1_2.addClass(incomplete);
				stage1_3.addClass(incomplete);
				stage2_1.addClass(incomplete);
				stage2_2.addClass(incomplete);
				stage2_3.addClass(incomplete);
				stage2_4.addClass(incomplete);
				stage3_1.addClass(incomplete);
				stage3_2.addClass(incomplete);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 2: case 3:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(inprogress);
				stage1_3.addClass(incomplete);
				stage2_1.addClass(incomplete);
				stage2_2.addClass(incomplete);
				stage2_3.addClass(incomplete);
				stage2_4.addClass(incomplete);
				stage3_1.addClass(incomplete);
				stage3_2.addClass(incomplete);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 4: case 5:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(inprogress);
				stage2_1.addClass(incomplete);
				stage2_2.addClass(incomplete);
				stage2_3.addClass(incomplete);
				stage2_4.addClass(incomplete);
				stage3_1.addClass(incomplete);
				stage3_2.addClass(incomplete);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 6: case 7: case 8: case 9:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(inprogress);
				stage2_2.addClass(inprogress);
				stage2_3.addClass(inprogress);
				stage2_4.addClass(incomplete);
				stage3_1.addClass(incomplete);
				stage3_2.addClass(incomplete);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 10: case 11:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(complete);
				stage2_1.html(checkmark);
				stage2_2.addClass(complete);
				stage2_2.html(checkmark);
				stage2_3.addClass(complete);
				stage2_3.html(checkmark);
				stage2_4.addClass(inprogress);
				stage3_1.addClass(incomplete);
				stage3_2.addClass(incomplete);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 12:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(complete);
				stage2_1.html(checkmark);
				stage2_2.addClass(complete);
				stage2_2.html(checkmark);
				stage2_3.addClass(complete);
				stage2_3.html(checkmark);
				stage2_4.addClass(complete);
				stage2_4.html(checkmark);
				stage3_1.addClass(inprogress);
				stage3_2.addClass(incomplete);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 13:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(complete);
				stage2_1.html(checkmark);
				stage2_2.addClass(complete);
				stage2_2.html(checkmark);
				stage2_3.addClass(complete);
				stage2_3.html(checkmark);
				stage2_4.addClass(complete);
				stage2_4.html(checkmark);
				stage3_1.addClass(complete);
				stage3_1.html(checkmark);
				stage3_2.addClass(inprogress);
				stage3_3.addClass(incomplete);
			    stage4_1.addClass(incomplete);
				break;
			case 14: case 15:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(complete);
				stage2_1.html(checkmark);
				stage2_2.addClass(complete);
				stage2_2.html(checkmark);
				stage2_3.addClass(complete);
				stage2_3.html(checkmark);
				stage2_4.addClass(complete);
				stage2_4.html(checkmark);
				stage3_1.addClass(complete);
				stage3_1.html(checkmark);
				stage3_2.addClass(complete);
				stage3_2.html(checkmark);
				stage3_3.addClass(inprogress);
			    stage4_1.addClass(incomplete);
				break;
			case 16: case 17:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(complete);
				stage2_1.html(checkmark);
				stage2_2.addClass(complete);
				stage2_2.html(checkmark);
				stage2_3.addClass(complete);
				stage2_3.html(checkmark);
				stage2_4.addClass(complete);
				stage2_4.html(checkmark);
				stage3_1.addClass(complete);
				stage3_1.html(checkmark);
				stage3_2.addClass(complete);
				stage3_2.html(checkmark);
				stage3_3.addClass(complete);
				stage3_3.html(checkmark);
			    stage4_1.addClass(inprogress);
				break;
			case 18:
				stage1_1.addClass(complete);
				stage1_1.html(checkmark);
				stage1_2.addClass(complete);
				stage1_2.html(checkmark);
				stage1_3.addClass(complete);
				stage1_3.html(checkmark);
				stage2_1.addClass(complete);
				stage2_1.html(checkmark);
				stage2_2.addClass(complete);
				stage2_2.html(checkmark);
				stage2_3.addClass(complete);
				stage2_3.html(checkmark);
				stage2_4.addClass(complete);
				stage2_4.html(checkmark);
				stage3_1.addClass(complete);
				stage3_1.html(checkmark);
				stage3_2.addClass(complete);
				stage3_2.html(checkmark);
				stage3_3.addClass(complete);
				stage3_3.html(checkmark);
			    stage4_1.addClass(complete);
				stage4_1.html(checkmark);
				break;
			default:
				stage1_1.className(incomplete);
				stage1_2.className(incomplete);
				stage1_3.className(incomplete);
				stage2_1.className(incomplete);
				stage2_2.className(incomplete);
				stage2_3.className(incomplete);
				stage2_4.className(incomplete);
				stage3_1.className(incomplete);
				stage3_2.className(incomplete);
				stage3_3.className(incomplete);
			    stage4_1.className(incomplete);
			}
	}

	stageToolTips();

	function stageToolTips()
		//Evaluates project status and returns the appropiate tooltips
	{
		var initiation = $('#InitToolTip');
		var planning = $('#PlanToolTip');
		var execution = $('#ExecToolTip');
		var closure = $('#CloseToolTip');

		var statusNo = Number($('#ProjectStatusNumber').html());

		//if the projectstatus is "num" then change the classes to indicate what stage they are on
		switch (statusNo) {
			case 1:
				initiation.html("<b>Initiation:</b> In Progress<br><b>Business Case:</b> Not Started<br><b>Project Charter:</b> Not Started");
				planning.html("Planning Stage Not Started");
				execution.html("Execution Stage Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 2: case 3:
				initiation.html("<b>Initiation:</b> Complete<br><b>Business Case:</b> In Progress<br><b>Project Charter:</b> Not Started");
				planning.html("Planning Stage Not Started");
				execution.html("Execution Stage Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 4: case 5:
				initiation.html("<b>Initiation:</b> Complete<br><b>Business Case:</b> Complete<br><b>Project Charter:</b> In Progress");
				planning.html("Planning Stage Not Started");
				execution.html("Execution Stage Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 6: case 7: case 8: case 9:
				initiation.html("Initiation Stage Complete");
				planning.html("<b>BRD:</b> In Progress<br><b>Risk Assessments:</b> In Progress<br><b>Change Assessments:</b> In Progress<br><b>Planning PGT:</b> Not Started");
				execution.html("Execution Stage Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 10: case 11:
				initiation.html("Initiation Stage Complete");
				planning.html("<b>BRD:</b> Complete<br><b>Risk Assessments:</b> Complete<br><b>Change Assessments:</b> Complete<br><b>Planning PGT:</b> In Progress");
				execution.html("Execution Stage Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 12:
				initiation.html("Initiation Stage Complete");
				planning.html("Planning Stage Complete");
				execution.html("<b>Change Plan:</b> In Progress<br><b>Support Plan:</b> Not Started<br><b>Executing PGT:</b> Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 13:
				initiation.html("Initiation Stage Complete");
				planning.html("Planning Stage Complete");
				execution.html("<b>Change Plan:</b> Complete<br><b>Support Plan:</b> In Progress<br><b>Executing PGT:</b> Not Started");
				closure.html("Closure Stage Not Started");
				break;
			case 14: case 15:
				initiation.html("Initiation Stage Complete");
				planning.html("Planning Stage Complete");
				execution.html("<b>Change Plan:</b> Complete<br><b>Support Plan:</b> Complete<br><b>Executing PGT:</b> In Progress");
				closure.html("Closure Stage Not Started");
				break;
			case 16: case 17:
				initiation.html("Initiation Stage Complete");
				planning.html("Planning Stage Complete");
				execution.html("Execution Stage Complete");
				closure.html("<b>Closure:</b> In Progress");
				break;
			case 18:
				initiation.html("Initiation Stage Complete");
				planning.html("Planning Stage Complete");
				execution.html("Execution Stage Complete");
				closure.html("Closure Stage Complete");
				break;
			default:
				initiation.html("Initiation Stage Complete");
				planning.html("Planning Stage Complete");
				execution.html("Execution Stage Complete");
				closure.html("Closure Stage Complete");
				break;
		}
	}
