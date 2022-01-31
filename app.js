console.log("Name:Roderick Hall")
console.log("Career: Full Stack App and Web Developer")
console.log("Description: I like Coding!")

console.log("My Interest:*Gaming *Coding *TikTok *BingeWatching TV/Movies")

console.log("My Previous Experience:*Ed Farm Pathways *Innovation Birmingham *HighSchoolDiploma *Associates")

console.log("My Skills: *JavaScript *BAM: Swift *HTML *CSS")
let myPastPositions = [{companyName: "Walmart Distrubtion", Title: "Non Con Order Filler", Description: "Fill the pallets with Essential tool and goods."}
                       [{companyName: "Megamet Industries", Title: "Painter and Grinder", Description: "Prepared weather and bullet proof doors for in field installaton."}

let mySkills = [{'BAM Computer Skills','JavaScript','HTML','CSS'}]
console.log(mySkills[index]);


function displaySkill(mySkills, BAM){
    if (BAM == true) {
        console.log(" *BAM " + mySkills);
    }
  else if (BAM == false) {
    console.log("*BAM" + mySkills)
};