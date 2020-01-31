const Sliders = "#game #sliders form";
const StaticImage = "#staticImage";
const ChangingImage = "#changingImage";
const CurrentScore = "#currentScore";
const PreviousScore = "#previousScore";
var expected_colors = [0,0,0];
var difficulty = 5;
var millisecondsTaken = 0;
var score_value = 0;
var turns_taken = 0;
var max_turns = 0;
var start_time = null;


/**
 *
 * @param expected_value
 * @param actual_value
 * @returns {number}
 */
function get_percent_off(expected_value, actual_value) {
    return (Math.abs(expected_value-actual_value)/255)*100;
}

/**
 *
 * @param r precent off for red
 * @param g percent off for green
 * @param b percent off for blue
 * @returns {number} averge for percent off for red green and blue
 */
function avg_percent_off(r,g,b) {
    return (r+g+b)/3
}

/**
 * round value to nearest huntreth
 * @param val
 * @returns {number}
 */
function round(val) {
    return Number.parseFloat(val).toFixed(2);
}
/**
 *
 * @param percent_off_value
 * @param difficulty
 * @param milliseconds_taken
 * @returns {number}
 */
function get_score(percent_off_value,difficulty,milliseconds_taken) {
    if (15-difficulty === 0 || 15000 - milliseconds_taken ===0) {
        return 0;
    }
    var score = ((15 - difficulty - percent_off_value) / (15 - difficulty)) * (15000 - milliseconds_taken);
    score = score > 1 ? score : 0;
    return round(score);
}

function get_random_color() {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    expected_colors = [r,g,b];
    return [r,g,b];

}
function update_value(value) {

}
$(Sliders + " input").change(function() {
    var type = "number";
    var name = $(this).attr("name");
    var value = $(this).val();
    if ($(this).attr("type") == "number") {
        type = "range";
    }
    $(`input[type="${type}"][name="${name}"]`).val(value);
    colors = [];
    $(".colorsinput").each(function(a,b) {
        colors.push($(this).val());
    });
    $(ChangingImage).css("background","rgb("+colors[0]+","+colors[1]+","+colors[2]+")");
});
$(Sliders).submit(function(e) {
    e.preventDefault();
    millisecondsTaken = (new Date()).getTime() - start_time;
    if (turns_taken >= max_turns || millisecondsTaken > 15000) {
        $("#turns_left").text("--");
        return;
    }
    for (var i = 0;i < 3;++i) {
        $(Sliders + " label .percent_off"+i).text("--");
    }
    var colors = [];
    var i = 0;
    var percent_of = null;
    var percent_off_all = [];
    var value = null;
    $("#sliders > form input[type='number']").each(function() {

        value = parseInt($(this).val());
        percent_of = Math.round(get_percent_off(expected_colors[i],value));
        $(Sliders + " label .percent_off_"+i).text(percent_of);
        percent_off_all.push(percent_of);
        ++i;
    });



    $(PreviousScore).text(score_value);
    score_value = get_score(avg_percent_off(percent_off_all[0],percent_off_all[1],percent_off_all[2]),difficulty,millisecondsTaken);
    $(CurrentScore).text(score_value);
    turns_taken+=1;

    $("#turns_left").text(max_turns-turns_taken);

});

function lsTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function record_high_score() {
    if (score_value == 0) {
        return;
    }
    if (!lsTest()) {
        alert("You are blocking the high score recorder :(");
    }
    var current_high_score = JSON.parse(localStorage.getItem("highscores"));
    if (current_high_score == null) {
        current_high_score = [];
    }
    var next_high_score = {
        "player_name": undefined,
        "difficulty": difficulty,
        "turns": turns_taken,
        "score": score_value,
        "timestamp": start_time+millisecondsTaken
    };
    current_high_score.push(next_high_score);
    current_high_score.sort(function(a, b){
        if (a.score == b.score) {
            return a.timestamp < b.timestamp;
        }
        return a.score < b.score;
    });
    for (var i = 0;i < current_high_score.length;++i) {
        if (current_high_score[i].player_name === undefined) {
            function getname() {
                var name = prompt("You have gotten in the top 5 of the high score list! Enter your name:");
                if (name == null || name == "") {
                    return getname();
                } else {
                    return name;
                }

            }
            current_high_score[i].player_name = getname();
        }
    }
    localStorage.setItem("highscores",JSON.stringify(current_high_score.slice(0,5)));
}
function get_high_scores() {
    if (!lsTest()){
        return;
    }
    var current_high_score = JSON.parse(localStorage.getItem("highscores"));
    if (current_high_score == null) {
        return;
    }
    for (var i = 0;i < current_high_score.length;++i) {
        var player_name = current_high_score[i].player_name;
        var difficulty = current_high_score[i].difficulty;
        var turns = current_high_score[i].turns;
        var score = current_high_score[i].score;
        var timestamp = current_high_score[i].timestamp;
        $(".high_scores").append(`<tr>
    <td>${player_name}</td>
    <td>${difficulty}</td>
    <td>${turns}</td>
    <td>${score}</td>
    <td>${timestamp}</td>
</tr>`);
    }
}
$(".high_scores").ready(function(){
    get_high_scores();
});

function lower_time(time,starttime) {
    if (starttime !== start_time) {
        return;
    }
    $("#time_left").text(time);
    if (time > 0) {
        setTimeout(lower_time,1000,time-1,starttime);
    } else {
        setTimeout(function() {
            record_high_score();
            $("#time_left").text("--");
        },2000);
    }
}
function start_timer() {
    var settings = $("#settings form");
    difficulty = parseInt($(settings).children().children("input[name='difficulty']").val());
    max_turns = parseInt($(settings).children().children("input[name='turns']").val());
    start_time = (new Date()).getTime();
    lower_time(15,start_time);
}
$("#refresh").on("click", function() {
    var color = [0,0,0];
    color = get_random_color();
    $(StaticImage).css("background","rgb("+color[0]+","+color[1]+","+color[2]+")");
    start_timer();

});