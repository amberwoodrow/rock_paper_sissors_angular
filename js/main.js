// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.greeting = "Rock, Paper, Scissors!";
  $scope.playerScore = 0;
  $scope.computerScore = 0;

  $scope.comparePicks = function(userPick) {
    comparePicks(userPick, $scope);
  };
});

function randomPick(){
  var num = Math.floor(Math.random() * 3);
  return num;
}

var picksArray = ['Rock', 'Paper', 'Scissors'];
var winningMap = {Rock: "Scissors", Paper: "Rock", Scissors: "Paper"};

function comparePicks(userPick, $scope){
  $scope.show = true;
  var computerPick = randomPick();
  $scope.computerPick = computerPick = picksArray[computerPick];
  $scope.userPick = userPick = picksArray[userPick];
  if(userPick === computerPick){
    $scope.result= "It's a tie.";
  }
  else if(computerPick === winningMap[userPick]){
    $scope.result= "You Win!";
    $scope.playerScore++;
  }
  else{
    $scope.result= "Computer Wins.";
    $scope.computerScore++;
  }
}



  // if(computerPick===0){
  //   if(userPick===1){
  //     $scope.result = "Paper wins!";
  //     $scope.playerScore++;
  //   }
  //   else if(userPick===2){
  //     $scope.result = "Rock wins!";
  //     $scope.computerScore++;
  //   }
  // }
  // else if(computerPick===1){
  //   if(userPick === 0){
  //     $scope.result = "Rock wins!";
  //     $scope.playerScore++;
  //   }
  //   else if(userPick===2){
  //     $scope.result = "Scissors wins!";
  //     $scope.playerScore++;
  //   }
  // }
  // else if(computerPick===2)
  //   if(userPick=== 0){
  //     $scope.result = "Rock wins!";
  //     $scope.playerScore++;
  //   }
  //   else if(userPick===1){
  //     $scope.result = "Scissors wins!";
  //     $scope.computerScore++;
  // }
  // else{
  //   $scope.result = "The result is a tie!";
  // }

// }

// 0-rock
// 1-paper
// 2-scissors