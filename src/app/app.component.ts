import { Component } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';
  player1: Player = {
    name: "Player 1",
    symbol: "X",
    turn: true
  }
  player2: Player = {
    name: "Player 2",
    symbol: "O",
    turn: false
  }
  
  currentPlayer: Player = this.player1;

  board: string[] = [
    " ", " ", " ", " ", " ", " ", " ", " ", " "
  ]

  one:string = " ";
  two:string = " ";
  three:string = " ";
  four:string = " ";
  five:string = " ";
  six:string = " ";
  seven:string = " ";
  eight:string = " ";
  nine:string = " ";
  
  placeOne(symbol:string):void {
    if(this.one == " " && !this.checkForWin())
    {
    this.one = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeTwo(symbol:string):void {
    if(this.two == " " && !this.checkForWin())
    {
    this.two = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeThree(symbol:string):void {
    if(this.three == " " && !this.checkForWin())
    {
    this.three = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeFour(symbol:string):void {
    if(this.four == " " && !this.checkForWin())
    {
    this.four = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeFive(symbol:string):void {
    if(this.five == " " && !this.checkForWin())
    {
    this.five = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeSix(symbol:string):void {
    if(this.six == " " && !this.checkForWin())
    {
    this.six = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeSeven(symbol:string):void {
    if(this.seven == " " && !this.checkForWin())
    {
    this.seven = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeEight(symbol:string):void {
    if(this.eight == " " && !this.checkForWin())
    {
    this.eight = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeNine(symbol:string):void {
    if(this.nine == " " && !this.checkForWin())
    {
    this.nine = symbol;
    if(!this.checkForWin())
    {
    this.switchTurn();
    }
    }
  }

  placeSymbol(index:number):void {
    this.board[index] = this.currentPlayer.symbol;
  }

  switchTurn():void {
    if(this.currentPlayer == this.player1)
    {
      this.currentPlayer = this.player2;
    }
    else
    {
      this.currentPlayer = this.player1;
    }
  }

  clearBoard():void {
    this.one = " ";
    this.two = " ";
    this.three = " ";
    this.four = " ";
    this.five = " ";
    this.six = " ";
    this.seven = " ";
    this.eight = " ";
    this.nine = " ";
  }

  checkForWin():boolean {
    let win: boolean = false;
    //across
    if((this.one != " " && this.one == this.two && this.two == this.three))
    {
      win = true;
    }
    else if((this.four != " " && this.four == this.five && this.five == this.six))
    {
      win = true;
    }
    else if((this.seven != " " && this.seven == this.eight && this.eight == this.nine))
    {
      win = true;
    }
    //down
    else if((this.one != " " && this.one == this.four && this.four == this.seven))
    {
      win = true;
    }
    else if((this.two != " " && this.two == this.five && this.five == this.eight))
    {
      win = true;
    }
    else if((this.three != " " && this.three == this.six && this.six == this.nine))
    {
      win = true;
    }
    //diagonal
    else if((this.one != " " && this.one == this.five && this.five == this.nine))
    {
      win = true;
    }
    else if((this.three != " " && this.three == this.five && this.five == this.seven))
    {
      win = true;
    }
    return win;
  }

  checkForCat():boolean {
    let cat: boolean = false;
    if(this.one != " " && this.two != " " && this.three != " " && this.four != " " &&
    this.five != " " && this.six != " " && this.seven != " " && this.eight != " " &&
    this.nine != " " && !this.checkForWin())
    {
      cat = true
    }
    return cat;
  }
 
}
