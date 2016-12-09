export class Event{

	constructor(
		public name : string = "Game 'N' Hack";
		public address : string = "Campus UNITEC San Pedro Sula, Cortés";
		public cost : string = "100";
		public type : string = "";
		public capacity : number = 10 ;
		public limit : number = 50;
		public availables : number = 20;
		public category : string = "Hackathon";
		public date : string = "09/12/16";
		public beginsAt : string = "09:00";
		public description : string = "Video game making hackathon";
		public image : string = "https://gamenhack.files.wordpress.com/2015/08/game-n-hack-logo-04.png?w=300&h=273";	
	){}
}
