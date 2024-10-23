$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values
			var electricInput = document.getElementById("electric").value;
			var gasInput = document.getElementById("gas").value;
			var oilInput = document.getElementById("oil").value;
			var carInput = document.getElementById("car").value;
			var flights4LessInput = document.getElementById("flights-4-less").value;
			var flights4MoreInput = document.getElementById("flights-4-more").value;
			var Food = document.getElementById("Food").value;
			var Med = document.getElementById("Med").value;
			var IT = document.getElementById("IT").value;
			var Bank = document.getElementById("Bank").value;
			var Edu = document.getElementById("Edu").value;
			var Rec = document.getElementById("Edu").value;
			// set variables for calculating each component score
			var electricScore = "";
			var gasScore = "";
			var oilScore = "";
			var carScore = "";
			var flights4LessScore = "";
			var flights4MoreScore = "";
			var newspaperScore = "";
			var alumTinScore = "";
			var FoodScore = "";
			var MedScore = "";
			var ITScore = "";
			var BankScore = "";
			var EduScore = "";
			var RecScore = "";
			var totalScore = "";

			if (document.getElementById("optionsRadio1").checked) {
				newspaperScore = 0;
			} else {
				newspaperScore = 184;
			}
			// console.log("Newspaper score is: " + newspaperScore);

			if (document.getElementById("optionsRadio3").checked) {
				alumTinScore = 0;
			} else {
				alumTinScore = 166;
			}
			// console.log("Aluminum and tin score is: " + alumTinScore);

			if (electricInput === 0 || electricInput === "undefined") {
				electricScore = 0;
			} else {
				electricScore = electricInput * 105;
			}
			// console.log("Electric score is: " + electricScore);

			if (gasInput === 0 || gasInput === "undefined") {
				gasScore = 0;
			} else {
				gasScore = gasInput * 105;
			}
			// console.log("Gas score is: " + gasScore);

			if (oilInput === 0 || oilInput === "undefined") {
				oilScore = 0;
			} else {
				oilScore = oilInput * 113;
			}
			// console.log("Oil score is: " + oilScore);

			if (carInput === 0 || carInput === "undefined") {
				carScore = 0;
			} else {
				carScore = carInput * 0.79;
			}
			// console.log("Car score is: " + carScore);
		
			if (flights4LessInput === 0 || flights4LessInput === "undefined") {
				flights4LessScore = 0;
			} else {
				flights4LessScore = flights4LessInput * 1100;
			}
			// console.log("Flights taken 4 hours or less score is: " + flights4LessScore);

			if (flights4MoreInput === 0 || flights4MoreInput === "undefined") {
				flights4MoreScore = 0;
			} else {
				flights4MoreScore = flights4MoreInput * 4400;
			}
			// console.log("Flights taken 4 hours or more score is: " + flights4MoreScore);
			if (Food === 0 || Food === "undefined") {
				Food = 0;
			} else {
				FoodScore = Food * 1000;
			}
			// console.log("Food score is: " + Food);
			if (Med === 0 || Med === "undefined") {
				Med = 0;
			} else {
				MedScore = Med * 1000;
			}
			// console.log("Med score is: " + Med);
			if (IT === 0 || IT === "undefined") {
				IT = 0;
			} else {
				ITScore = IT * 1000;
			}
			// console.log("IT score is: " + IT);
			if (Bank === 0 || Bank === "undefined") {
				Bank = 0;
			} else {
				BankScore = Bank * 1000;
			}
			// console.log("Banking/Finance score is: " + Bank);
			if (Edu === 0 || Edu === "undefined") {
				Edu = 0;
			} else {
				EduScore = Edu * 1000;
			}
			// console.log(Education score is: " + Edu);
			if (Rec === 0 || Rec === "undefined") {
				Rec = 0;
			} else {
				RecScore = Rec * 1000;
			}
			// console.log(Recreation score is: " + Rec);


			// calculate scores for each category
			var energyScore = electricScore + gasScore + oilScore;
			var travelScore = carScore	+ flights4LessScore + flights4MoreScore;
			var wasteScore = newspaperScore + alumTinScore;
			var otherScore = FoodScore + MedScore + ITScore + BankScore + EduScore + RecScore;
			// calculate total score and round to nearest whole integer
			totalScore = Math.round(energyScore + travelScore + wasteScore + otherScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}

		// check selection made for recycling newspaper before calculating and displaying score
		var recycleNewspaperSelectionYes = document.getElementById("optionsRadio1").checked;
		var recycleNewspaperSelectionNo = document.getElementById("optionsRadio2").checked;
		var recycleAlumTinSelectionYes = document.getElementById("optionsRadio3").checked;
		var recycleAlumTinSelectionNo = document.getElementById("optionsRadio4").checked;

		if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false || recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
			if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false) {
				$("#newspaper-alert").show();
			} else {
				$("#newspaper-alert").hide();
			}

			if (recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
				$("#alum-tin-alert").show();
			} else {
				$("#alum-tin-alert").hide();
			}
		} else {
			calculateAndDisplayScore();
		}
	});	
});