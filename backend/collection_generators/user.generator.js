const USER_COUNT = 30;
const usernames = [
    "grievingbroken", "movieprosecutor",
    "themthink", "effecthidden",
    "indicaterun", "plopuniform",
    "kittengoujon", "allegeminecraft",
    "morticianblossom", "vastproducer",
    "sciencexiphoid", "hereollie",
    "silenceinfested", "immaculategrease",
    "didborn", "cranecontract",
    "crosstreesmud", "revolutionless",
    "etherealdam", "warnnugget",
    "harassthe", "boundarycisco",
    "browncontest", "bloatpeppered",
    "cricketroad", "jackstaylustful",
    "abundantspace", "boogerjungle",
    "poontangprickle", "wardroomwhen"];
const firstNames = [
    "Harry","Ross",
    "Bruce","Cook",
    "Carolyn","Morgan",
    "Albert","Walker",
    "Randy","Reed",
    "Larry","Barnes",
    "Lois","Wilson",
    "Jesse","Campbell",
    "Ernest","Rogers",
    "Theresa","Patterson",
    "Henry","Simmons",
    "Michelle","Perry",
    "Frank","Butler",
    "Shirley","Maya",
    "David","jane"];
const userImageURL = [
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/15_whu7yt.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563147/userImage/8_wk8e4l.png",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/7_vqkwlj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/9_in6jvn.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/5_trcqdf.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/3_elkvzo.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/24_cis3me.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/30_hsdmth.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563146/userImage/6_kkisov.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563145/userImage/28_dmllw5.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563145/userImage/27_m8t6nl.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563152/userImage/25_fwp6fi.png",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563145/userImage/4_aofbcg.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563145/userImage/26_fljzzh.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563145/userImage/22_l71f4a.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563145/userImage/23_mfpkvd.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/15_whu7yt.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/21_smdyxj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/20_o0kian.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/2_mnlq0l.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/19_x78wly.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/16_k8wdj5.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/12_rqb8cd.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/18_yuhtib.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/17_vojhpx.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/11_n2buom.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563144/userImage/13_owjuxi.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563143/userImage/14_cr5fig.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563143/userImage/1_lwsbfj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636563143/userImage/10_lpt48x.jpg"
];
const getUsername = (index) => usernames[index-1];
const getUserImageURL = (index) => userImageURL[index-1];
const getFirstName = () => firstNames[Math.floor(Math.random() * (firstNames.length-1))];
const getPassword = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
const getWebSite = (username) =>  username + ".site.com";
const getAboutMe = (name) => `Hello my name ${name}!`;


const getUser = (index) => {
    const username = getUsername(index);
    const firstName = getFirstName();
    const image = getUserImageURL(index)
    return user = {
        _id: index,
        username: username,
        userImageURL: image,
        firstName: firstName,
        password: getPassword(),
        webSite: getWebSite(username),
        aboutMe: getAboutMe(firstName),
        subscribers: [],
        subscriptions: []
    };
};
module.exports = Array.from({length: USER_COUNT},(_, index) => getUser(index + 1));
