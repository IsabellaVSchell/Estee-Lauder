//Create variable
var alabaster = $(".alabaster")
var colorsHeader = $(".colorsHeader")
var warmPorcelain = $(".warmPorcelain")
var porcelain = $(".porcelain")
var espresso = $(".espresso")
var richJava = $(".richJava")
var sienna = $(".sienna")
var deepSpice = $(".deepSpice")
var deepAmber = $(".deepAmber")
var richMahogany = $(".richMahogany")
var nutmeg = $(".nutmeg")
var truffle = $(".truffle")
var pecan = $(".pecan")
var sandalwood = $(".sandalwood")
var mocha = $(".mocha")
var richCocoa = $(".richCocoa")
var richCaramel = $(".richCaramel")
var amberHoney = $(".amberHoney")
var sepia = $(".sepia")
var cinnamon = $(".cinnamon")
var maple = $(".maple")
var bronze = $(".bronze")
var richGinger = $(".richGinger")
var richChestnut = $(".richChestnut")
var hazel = $(".hazel")
var henna = $(".henna")
var mapleSugar = $(".mapleSugar")
var softan = $(".softan")
var toastyToffee = $(".toastyToffee")
var spicedSand = $(".spicedSand")
var auburn = $(".auburn")
var honeyBronze = $(".honeyBronze")
var shellBeige = $(".shellBeige")
var outdoorBeige = $(".outdoorBeige")
var sandbar = $(".sandbar")
var cashew = $(".cashew")
var wheat = $(".wheat")
var pebble = $(".pebble")
var fawn = $(".fawn")
var tawny = $(".tawny")
var ivoryBeige = $(".ivoryBeige")
var dusk = $(".dusk")
var ivoryRose = $(".ivoryRose")
var fresco = $(".fresco")
var rattan = $(".rattan")
var buff = $(".buff")
var dawn = $(".dawn")
var desertBeige = $(".desertBeige")
var pureBeige = $(".pureBeige")
var warmVanilla = $(".warmVanilla")
var coolVanilla = $(".coolVanilla")
var sand = $(".sand")
var ecru = $(".ecru")
var bone = $(".bone")
var ivoryNude = $(".ivoryNude")
var coolBone = $(".coolBone")
var shell = $(".shell")
var faceImg = $(".faceImg").attr("src", );
var armImg = $(".armImg").attr("src", "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051", "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929", "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709", "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455");


//Create event listeners
henna.on("click", hennaFunction)
mapleSugar.on("click", mapleSugarFunction)
softan.on("click", softanFunction)
toastyToffee.on("click", toastyToffeeFunction)
spicedSand.on("click", spicedSandFunction)
auburn.on("click", auburnFunction)
honeyBronze.on("click", honeyBronzeFunction)
shellBeige.on("click", shellBeigeFunction)
outdoorBeige.on("click", outdoorBeigeFunction)
sandbar.on("click", sandbarFunction)
cashew.on("click", cashewFunction)
wheat.on("click", wheatFunction)
pebble.on("click", pebbleFunction)
fawn.on("click", fawnFunction)
tawny.on("click", tawnyFunction)
ivoryBeige.on("click", ivoryBeigeFunction)
dusk.on("click", duskFunction)
ivoryRose.on("click", ivoryRoseFunction)
fresco.on("click", frescoFunction)
rattan.on("click", rattanFunction)
buff.on("click", buffFunction)
dawn.on("click", dawnFunction)
desertBeige.on("click", desertBeigeFunction)
pureBeige.on("click", pureBeigeFunction)
warmVanilla.on("click", warmVanillaFunction)
coolVanilla.on("click", coolVanillaFunction)
sand.on("click", sandFunction)
ecru.on("click", ecruFunction)
bone.on("click", boneFunction)
ivoryNude.on("click", ivoryNudeFunction)
coolBone.on("click", coolBoneFunction)
shell.on("click", shellFunction)
alabaster.on("click", alabasterFunction)
warmPorcelain.on("click", warmPorcelainFunction)
porcelain.on("click", porcelainFunction)
espresso.on("click", espressoFunction)
richJava.on("click", richJavaFunction)
sienna.on("click", siennaFunction)
deepSpice.on("click", deepSpiceFunction)
deepAmber.on("click", deepAmberFunction)
richMahogany.on("click", richMahoganyFunction)
nutmeg.on("click", nutmegFunction)
truffle.on("click", truffleFunction)
pecan.on("click", pecanFunction)
sandalwood.on("click", sandalwoodFunction)
mocha.on("click", mochaFunction)
richCocoa.on("click", richCocoaFunction)
richCaramel.on("click", richCaramelFunction)
amberHoney.on("click", amberHoneyFunction)
sepia.on("click", sepiaFunction)
cinnamon.on("click", cinnamonFunction)
maple.on("click", mapleFunction)
bronze.on("click", bronzeFunction)
richGinger.on("click", richGingerFunction)
richChestnut.on("click", richChestnutFunction)
hazel.on("click", hazelFunction)



//Create event handlers
function warmPorcelainFunction(){
  console.log("hello")
  colorsHeader.text("Warm porcelain ")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function porcelainFunction(){
  console.log("hello")
  colorsHeader.text("Porcelain")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function espressoFunction(){
  console.log("hello")
  colorsHeader.text("Espresso")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function richJavaFunction(){
  console.log("hello")
  colorsHeader.text("Rich Java")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function siennaFunction(){
  console.log("hello")
  colorsHeader.text("Sienna")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function deepSpiceFunction(){
  console.log("hello")
  colorsHeader.text("Deep spice")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function deepAmberFunction(){
  console.log("hello")
  colorsHeader.text("Deep Amber")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function richMahoganyFunction(){
  console.log("hello")
  colorsHeader.text("Rich Mahogany")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function nutmegFunction(){
  console.log("hello")
  colorsHeader.text("Nutmeg")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function truffleFunction(){
  console.log("hello")
  colorsHeader.text("Truffle")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function pecanFunction(){
  console.log("hello")
  colorsHeader.text("Pecan")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function sandalwoodFunction(){
  console.log("hello")
  colorsHeader.text("Sandalwood")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function mochaFunction(){
  console.log("hello")
  colorsHeader.text("Mocha")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function richCocoaFunction(){
  console.log("hello")
  colorsHeader.text("Rich cocoa ")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function richCaramelFunction(){
  console.log("hello")
  colorsHeader.text("Rich caramel")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_29.jpg?v=1625108164051"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_18.jpg?v=1625107864505"
}

function amberHoneyFunction(){
  console.log("hello")
  colorsHeader.text("Amber honey")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function sepiaFunction(){
  console.log("hello")
  colorsHeader.text("Sepia")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function cinnamonFunction(){
  console.log("hello")
  colorsHeader.text("Cinnamon")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function mapleFunction(){
  console.log("hello")
  colorsHeader.text("Maple")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function bronzeFunction(){
  console.log("hello")
  colorsHeader.text("Bronze")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function richGingerFunction(){
  console.log("hello")
  colorsHeader.text("Rich ginger")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}


function richChestnutFunction(){
  console.log("hello")
  colorsHeader.text("Rich chestnut")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function hazelFunction(){
  console.log("hello")
  colorsHeader.text("Hazel")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function hennaFunction(){
  console.log("hello")
  colorsHeader.text("Henna")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function mapleSugarFunction(){
  console.log("hello")
  colorsHeader.text("Maple sugar")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function softanFunction(){
  console.log("hello")
  colorsHeader.text("Softan")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function toastyToffeeFunction(){
  console.log("hello")
  colorsHeader.text("Toasty toffee")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function spicedSandFunction(){
  console.log("hello")
  colorsHeader.text("Spiced sand ")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function auburnFunction(){
  console.log("hello")
  colorsHeader.text("Auburn")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function honeyBronzeFunction(){
  console.log("hello")
  colorsHeader.text("Honey bronze")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function shellBeigeFunction(){
  console.log("hello")
  colorsHeader.text("Shell beige")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function outdoorBeigeFunction(){
  console.log("hello")
  colorsHeader.text("Outdoor beige")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function sandbarFunction(){
  console.log("hello")
  colorsHeader.text("Sandbar")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function cashewFunction(){
  console.log("hello")
  colorsHeader.text("Cashew")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function wheatFunction(){
  console.log("hello")
  colorsHeader.text("Wheat")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function pebbleFunction(){
  console.log("hello")
  colorsHeader.text("Pebble")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function fawnFunction(){
  console.log("hello")
  colorsHeader.text("Fawn")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function tawnyFunction(){
  console.log("hello")
  colorsHeader.text("Tawny")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function ivoryBeigeFunction(){
  console.log("hello")
  colorsHeader.text("Ivory beige")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function duskFunction(){
  console.log("hello")
  colorsHeader.text("Dusk")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function ivoryRoseFunction(){
  console.log("hello")
  colorsHeader.text("Ivory rose")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function frescoFunction(){
  console.log("hello")
  colorsHeader.text("Fresco")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function rattanFunction(){
  console.log("hello")
  colorsHeader.text("Rattan")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function buffFunction(){
  console.log("hello")
  colorsHeader.text("Buff")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function dawnFunction(){
  console.log("hello")
  colorsHeader.text("Dawn")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function desertBeigeFunction(){
  console.log("hello")
  colorsHeader.text("Desert beige")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_28.jpg?v=1625107862929"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_20.jpg?v=1625108321446"
}

function pureBeigeFunction(){
  console.log("hello")
  colorsHeader.text("Pure beige")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function warmVanillaFunction(){
  console.log("hello")
  colorsHeader.text("Warm vanilla ")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function coolVanillaFunction(){
  console.log("hello")
  colorsHeader.text("Cool vanilla ")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_27.jpg?v=1625108324709"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_24.jpg?v=1625108327380"
}

function sandFunction(){
  console.log("hello")
  colorsHeader.text("Sand")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}

function ecruFunction(){
  console.log("hello")
  colorsHeader.text("Ecru")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}

function boneFunction(){
  console.log("hello")
  colorsHeader.text("Bone")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}

function ivoryNudeFunction(){
  console.log("hello")
  colorsHeader.text("Ivory nude")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}

function coolBoneFunction(){
  console.log("hello")
  colorsHeader.text("Cool bone")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}

function shellFunction(){
  console.log("hello")
  colorsHeader.text("Shell")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}

function alabasterFunction(){
  console.log("hello")
  colorsHeader.text("Alabaster")
  document.getElementById("armImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_26.jpg?v=1625108327455"
  document.getElementById("faceImg").src = "https://cdn.glitch.com/9ce980ba-9567-4697-b910-3055b4d194c5%2FEL_22.jpg?v=1625108324246"
}


var alabasterBtn = $(".alabasterBtn")
var colorsHeaderBtn = $(".colorsHeaderBtn")
var warmPorcelainBtn = $(".warmPorcelainBtn")
var porcelainBtn = $(".porcelainBtn")
var espressoBtn = $(".espressoBtn")
var richJavaBtn = $(".richJavaBtn")
var siennaBtn = $(".siennaBtn")
var deepSpiceBtn = $(".deepSpiceBtn")
var deepAmberBtn = $(".deepAmberBtn")
var richMahoganyBtn = $(".richMahoganyBtn")
var nutmegBtn = $(".nutmegBtn")
var truffleBtn = $(".truffleBtn")
var pecanBtn = $(".pecanBtn")
var sandalwoodBtn = $(".sandalwoodBtn")
var mochaBtn = $(".mochaBtn")
var richCocoaBtn = $(".richCocoaBtn")
var richCaramelBtn = $(".richCaramelBtn")
var amberHoneyBtn = $(".amberHoneyBtn")
var sepiaBtn = $(".sepiaBtn")
var cinnamonBtn = $(".cinnamonBtn")
var mapleBtn = $(".mapleBtn")
var bronzeBtn = $(".bronzeBtn")
var richGingerBtn = $(".richGingerBtn")
var richChestnutBtn = $(".richChestnutBtn")
var hazelBtn = $(".hazelBtn")
var hennaBtn = $(".hennaBtn")
var mapleSugarBtn = $(".mapleSugarBtn")
var softanBtn = $(".softanBtn")
var toastyToffeeBtn = $(".toastyToffeeBtn")
var spicedSandBtn = $(".spicedSandBtn")
var auburnBtn = $(".auburnBtn")
var honeyBronzeBtn = $(".honeyBronzeBtn")
var shellBeigeBtn = $(".shellBeigeBtn")
var outdoorBeigeBtn = $(".outdoorBeigeBtn")
var sandbarBtn = $(".sandbarBtn")
var cashewBtn = $(".cashewBtn")
var wheatBtn = $(".wheatBtn")
var pebbleBtn = $(".pebbleBtn")
var fawnBtn = $(".fawnBtn")
var tawnyBtn = $(".tawnyBtn")
var ivoryBeigeBtn = $(".ivoryBeigeBtn")
var duskBtn = $(".duskBtn")
var ivoryRoseBtn = $(".ivoryRoseBtn")
var frescoBtn = $(".frescoBtn")
var rattanBtn = $(".rattanBtn")
var buffBtn = $(".buffBtn")
var dawnBtn = $(".dawnBtn")
var desertBeigeBtn = $(".desertBeigeBtn")
var pureBeigeBtn = $(".pureBeigeBtn")
var warmVanillaBtn = $(".warmVanillaBtn")
var coolVanillaBtn = $(".coolVanillaBtn")
var sandBtn = $(".sandBtn")
var ecruBtn = $(".ecruBtn")
var boneBtn = $(".boneBtn")
var ivoryNudeBtn = $(".ivoryNudeBtn")
var coolBoneBtn = $(".coolBoneBtn")
var shellBtn = $(".shellBtn")
var shopHeader = $(".shopHeader")
var addToCart = $(".addToCart")
var items = $(".items")
var shoppingCart = [];
var price = $(".price")

addToCart.on("click", cartFunction)

function cartFunction(){
  var shopHeaderId = document.getElementById("shopHeader")
  shoppingCart.push(shopHeaderId.innerHTML)
  items.text(shoppingCart)
  var basePrice = 43;
  price.text("Subtotal: $" + basePrice * shoppingCart.length )
}


hennaBtn.on("click", hennaBtnFunction)
mapleSugarBtn.on("click", mapleSugarBtnFunction)
softanBtn.on("click", softanBtnFunction)
toastyToffeeBtn.on("click", toastyToffeeBtnFunction)
spicedSandBtn.on("click", spicedSandBtnFunction)
auburnBtn.on("click", auburnBtnFunction)
honeyBronzeBtn.on("click", honeyBronzeBtnFunction)
shellBeigeBtn.on("click", shellBeigeBtnFunction)
outdoorBeigeBtn.on("click", outdoorBeigeBtnFunction)
sandbarBtn.on("click", sandbarBtnFunction)
cashewBtn.on("click", cashewBtnFunction)
wheatBtn.on("click", wheatBtnFunction)
pebbleBtn.on("click", pebbleBtnFunction)
fawnBtn.on("click", fawnBtnFunction)
tawnyBtn.on("click", tawnyBtnFunction)
ivoryBeigeBtn.on("click", ivoryBeigeBtnFunction)
duskBtn.on("click", duskBtnFunction)
ivoryRoseBtn.on("click", ivoryRoseBtnFunction)
frescoBtn.on("click", frescoBtnFunction)
rattanBtn.on("click", rattanBtnFunction)
buffBtn.on("click", buffBtnFunction)
dawnBtn.on("click", dawnBtnFunction)
desertBeigeBtn.on("click", desertBeigeBtnFunction)
pureBeigeBtn.on("click", pureBeigeBtnFunction)
warmVanillaBtn.on("click", warmVanillaBtnFunction)
coolVanillaBtn.on("click", coolVanillaBtnFunction)
sandBtn.on("click", sandBtnFunction)
ecruBtn.on("click", ecruBtnFunction)
boneBtn.on("click", boneBtnFunction)
ivoryNudeBtn.on("click", ivoryNudeBtnFunction)
coolBoneBtn.on("click", coolBoneBtnFunction)
shellBtn.on("click", shellBtnFunction)
alabasterBtn.on("click", alabasterBtnFunction)
warmPorcelainBtn.on("click", warmPorcelainBtnFunction)
porcelainBtn.on("click", porcelainBtnFunction)
espressoBtn.on("click", espressoBtnFunction)
richJavaBtn.on("click", richJavaBtnFunction)
siennaBtn.on("click", siennaBtnFunction)
deepSpiceBtn.on("click", deepSpiceBtnFunction)
deepAmberBtn.on("click", deepAmberBtnFunction)
richMahoganyBtn.on("click", richMahoganyBtnFunction)
nutmegBtn.on("click", nutmegBtnFunction)
truffleBtn.on("click", truffleBtnFunction)
pecanBtn.on("click", pecanBtnFunction)
sandalwoodBtn.on("click", sandalwoodBtnFunction)
mochaBtn.on("click", mochaBtnFunction)
richCocoaBtn.on("click", richCocoaBtnFunction)
richCaramelBtn.on("click", richCaramelBtnFunction)
amberHoneyBtn.on("click", amberHoneyBtnFunction)
sepiaBtn.on("click", sepiaBtnFunction)
cinnamonBtn.on("click", cinnamonBtnFunction)
mapleBtn.on("click", mapleBtnFunction)
bronzeBtn.on("click", bronzeBtnFunction)
richGingerBtn.on("click", richGingerBtnFunction)
richChestnutBtn.on("click", richChestnutBtnFunction)
hazelBtn.on("click", hazelBtnFunction)



function warmPorcelainBtnFunction(){
  console.log("hello")
  shopHeader.text(" Warm Porcelain")
}

function porcelainBtnFunction(){
  console.log("hello")
  shopHeader.text(" Porcelain")
}

function espressoBtnFunction(){
  console.log("hello")
  shopHeader.text(" Espresso")
}

function richJavaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rich Java")
}

function siennaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Sienna")
}

function deepSpiceBtnFunction(){
  console.log("hello")
  shopHeader.text(" Deep Spice")
}

function deepAmberBtnFunction(){
  console.log("hello")
  shopHeader.text(" Deep Amber")
}

function richMahoganyBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rich Mahogany")
}

function nutmegBtnFunction(){
  console.log("hello")
  shopHeader.text(" Nutmeg")
}

function truffleBtnFunction(){
  console.log("hello")
  shopHeader.text(" Truffle")
}

function pecanBtnFunction(){
  console.log("hello")
  shopHeader.text(" Pecan")
}

function sandalwoodBtnFunction(){
  console.log("hello")
  shopHeader.text(" Sandalwood")
}

function mochaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Mocha")
}

function richCocoaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rich Cocoa")
}

function richCaramelBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rich Caramel")
}

function amberHoneyBtnFunction(){
  console.log("hello")
  shopHeader.text(" Amber Honey")
}

function sepiaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Sepia")
}

function cinnamonBtnFunction(){
  console.log("hello")
  shopHeader.text(" Cinnamon")
}

function mapleBtnFunction(){
  console.log("hello")
  shopHeader.text(" Maple")
}

function bronzeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Bronze")
}

function richGingerBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rich Ginger")
}


function richChestnutBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rich Chestnut")
}

function hazelBtnFunction(){
  console.log("hello")
  shopHeader.text(" Hazel")
}

function hennaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Henna")
}

function mapleSugarBtnFunction(){
  console.log("hello")
  shopHeader.text(" Maple Sugar")
}

function softanBtnFunction(){
  console.log("hello")
  shopHeader.text(" Softan")
}

function toastyToffeeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Toasty Toffee")
}

function spicedSandBtnFunction(){
  console.log("hello")
  shopHeader.text(" Spiced Sand ")
}

function auburnBtnFunction(){
  console.log("hello")
  shopHeader.text(" Auburn")
}

function honeyBronzeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Honey Bronze")
}

function shellBeigeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Shell Beige")
}

function outdoorBeigeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Outdoor Beige")
}

function sandbarBtnFunction(){
  console.log("hello")
  shopHeader.text(" Sandbar")
}

function cashewBtnFunction(){
  console.log("hello")
  shopHeader.text(" Cashew")
}

function wheatBtnFunction(){
  console.log("hello")
  shopHeader.text(" Wheat")
}

function pebbleBtnFunction(){
  console.log("hello")
  shopHeader.text(" Pebble")
}

function fawnBtnFunction(){
  console.log("hello")
  shopHeader.text(" Fawn")
}

function tawnyBtnFunction(){
  console.log("hello")
  shopHeader.text(" Tawny")
}

function ivoryBeigeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Ivory Beige")
}

function duskBtnFunction(){
  console.log("hello")
  shopHeader.text(" Dusk")
}

function ivoryRoseBtnFunction(){
  console.log("hello")
  shopHeader.text(" Ivory rose")
}

function frescoBtnFunction(){
  console.log("hello")
  shopHeader.text(" Fresco")
}

function rattanBtnFunction(){
  console.log("hello")
  shopHeader.text(" Rattan")
}

function buffBtnFunction(){
  console.log("hello")
  shopHeader.text(" Buff")
}

function dawnBtnFunction(){
  console.log("hello")
  colorshopHeadersHeader.text(" Dawn")
}

function desertBeigeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Desert Beige")
}

function pureBeigeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Pure beige")
}

function warmVanillaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Warm Vanilla ")
}

function coolVanillaBtnFunction(){
  console.log("hello")
  shopHeader.text(" Cool Vanilla ")
}

function sandBtnFunction(){
  console.log("hello")
  shopHeader.text(" Sand")
}

function ecruBtnFunction(){
  console.log("hello")
  shopHeader.text(" Ecru")
}

function boneBtnFunction(){
  console.log("hello")
  shopHeader.text(" Bone")
}

function ivoryNudeBtnFunction(){
  console.log("hello")
  shopHeader.text(" Ivory Nude")
}

function coolBoneBtnFunction(){
  console.log("hello")
  shopHeader.text(" Cool Bone")
}

function shellBtnFunction(){
  console.log("hello")
  shopHeader.text(" Shell")
}

function alabasterBtnFunction(){
  console.log("hello")
  shopHeader.text(" Alabaster")
}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
