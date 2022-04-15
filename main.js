const selection = document.getElementsByClassName("selection");
const player_one = document.getElementById("player-one");
const player_two = document.getElementById("player-two");
const computer_result = document.getElementById("computer_result");
const you_result = document.getElementById("you_result");
const draw = document.getElementById("draw_result");


const player = [{

        select: '✊',
        beat: '✌'
    },

    {

        select: '✋',
        beat: '✊'
    },

    {

        select: '✌',
        beat: '✋'
    }

]


var counter_one = 1;
var counter_two = 1;
var draw_counter = 1;

for (var i = 0; i < selection.length; i++) {



    selection[i].addEventListener("click", (e) => {


        const randomselect = Math.floor(Math.random() * player.length);

        const target = e.target.innerHTML;

        player_one.insertAdjacentHTML("afterbegin", target); //Add Selection On Top 



        PlayerTwoSelection(randomselect);
        playertwo_html(randomselect);



        winner(target, PlayerTwoSelection(randomselect), randomselect);

    })

};




function winner(one, two, random) {



    if (one === two) {
        draw.innerHTML = draw_counter
        draw_counter++;


    } else if (one === player[random].beat) {


        computer_result.innerHTML = counter_one;
        counter_one++;


    } else if (one != player[random].beat) {


        you_result.innerHTML = counter_two;
        counter_two++;
    }

}


function playertwo_html(random) {

    return player_two.insertAdjacentHTML("afterbegin", player[random].select);


}




function PlayerTwoSelection(random) {


    return player[random].select;


}