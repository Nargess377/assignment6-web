
$(document).ready(function () {

    console.log("jQuery is ready!");

    $("h2").css("letter-spacing", "1px");
    $(".eyebrow").css("font-weight", "bold");

    let changed = false;

    $("#changeGreeting").click(function () {
        if (changed) {
            $("#greeting").text("Hello, I'm Narges ♡");
        } else {
            $("#greeting").text("Welcome to My Little World ✿");
        }
        changed = !changed;
    });

    $("#lightMode").click(function () {
        $("body").removeClass("dark");
    });

    $("#darkMode").click(function () {
        $("body").addClass("dark");
    });

    $("#hideFacts").click(function () {
        $("#funFacts").hide();
        $("#status").hide();
    });

    $("#showFacts").click(function () {
        $("#funFacts").show();
        $("#status").show();
    });

    $("#toggleFacts").click(function () {
        $("#funFacts").toggle();
        $("#status").toggle();
    });

    $("#fadeOut").click(function () {
        $(".gallery img").fadeOut(600);
    });

    $("#fadeIn").click(function () {
        $(".gallery img").fadeIn(600);
    });

    $("#fadeToggle").click(function () {
        $(".gallery img").fadeToggle(600);
    });

    $(".slide-title").click(function () {
        let panel = $(this).attr("data-panel");
        $("#" + panel).slideToggle(400);
    });

    $("#slideUp").click(function () {
        $(".slide-panel").slideUp(400);
    });

    $("#slideDown").click(function () {
        $(".slide-panel").slideDown(400);
    });

    $("#slideToggle").click(function () {
        $(".slide-panel").slideToggle(400);
    });

    $("#addSkill").click(function () {
        let skill = $("#newSkill").val().trim();

        if (skill === "") {
            $("#skillError").text("Please enter a skill!");
            return;
        }

        $("#skillList").append($("<li>").text(skill));
        $("#newSkill").val("");
        $("#skillError").text("");
    });

    $("#prependSkill").click(function () {
        let skill = $("#newSkill").val().trim();

        if (skill === "") {
            $("#skillError").text("Please enter a skill!");
            return;
        }

        $("#skillList").prepend($("<li>").text(skill));
        $("#newSkill").val("");
        $("#skillError").text("");
    });

    $("#removeSkill").click(function () {
        $("#skillList li").last().remove();
    });

    let github = true;

    $("#changeLink").click(function () {
        if (github) {
            $("#socialLink").attr("href", "https://www.linkedin.com");
            $("#socialLink").text("Visit LinkedIn");
        } else {
            $("#socialLink").attr("href", "https://github.com");
            $("#socialLink").text("Visit GitHub");
        }
        github = !github;
    });

    $("#nameInput").on("input", function () {
        let name = $(this).val();
        $("#liveName").text(name);
    });

    $("#emailInput").on("input", function () {
        let email = $(this).val();
        $("#liveEmail").text(email);
    });

    $("#contactForm").submit(function (event) {
        event.preventDefault();
    });

    let animated = false;

    $("#animateSkills").click(function () {
        if (animated) {
            $(".bar").animate({ width: "0%" }, 800);
        } else {
            $(".bar").each(function () {
                let width = $(this).attr("data-width");
                $(this).animate({ width: width }, 800);
            });
        }
        animated = !animated;
    });

});
