class Player {
constructor(name, position) {
this.name=name;
this.position=position;

}
describe() {
    return `$(this.name) plays`
}
class Team {
constructor(name) {
this.name=name
this.players=[]

addPlayer(player) {
if(player instanceof Player)
    this.players.push(player);

}else{
    throw new Error (`You can only use an error`)

    describe() {
return `$(this.name)has`${(this.players.length} players`;

 classs Menu
 constructor(){
 this.teams=[]
  this.selected=null;

    start()
    let selection=this.showMainMenuOptions();
    while(selection !=0) {
    switch(selection){
    
    }
    case`1`
    this.createTeam();
    break;
    case `2`:
        this.viewTeam();
        break;
        case `3` this.deleteTeam();
        break;
        case `4':
            this.displayTeams();
            break;
            default:
                selection=0;
}
}selection =this.showMainMenuOptions

alert(`Goodbye`)

showMainMenuOptions
return prompt(
    0)exit
    1)create new Team
    2)view Team
    3)delete Team
    4)display all displayTeams
    displayTeams()
    let teamstring=``;
    for(i=0, i<this.teams.length;i++){
teamstring +=i +`)` + this.teams[i].name+`\n`;


createTeam(); {
    let name=prompt(`Enter name for new team)`{
this.teams.push(new team (name))

viewTeam() {
let index=prompt(`Enter the index of the team you wish to view`);
if (index> -1 && index<this.teams.length) {}
    this.selectedTeam=this.teams.length){
let description=`team name`+ this.selectedTeam.name+`\n`;}
for(let i=0; i<this.selectedTeam.players.length;i++){
description+= i +`)`+ this.selectedTeam.players[i].name){

}
