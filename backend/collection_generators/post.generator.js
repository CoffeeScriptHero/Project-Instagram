const POST_COUNT = 40;
const USER_COUNT = 30;
const postImageURL = [
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712560/postImage/26_ef8hje.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712556/postImage/7_xqtig0.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712556/postImage/9_roysvj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712555/postImage/22_q76wxj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712555/postImage/6_rgbhpn.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712555/postImage/8_ncijuj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712555/postImage/5_zfgfs5.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712555/postImage/27_hxamp8.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712554/postImage/40_aatlul.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712554/postImage/4_lvoxbo.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712553/postImage/37_ukzepw.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712553/postImage/18_xss5k5.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712553/postImage/18_xss5k5.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712553/postImage/2_znf65o.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712552/postImage/39_p2mmvh.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712551/postImage/35_ldrfd1.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712551/postImage/28_eweshr.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712551/postImage/38_rfbyuq.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712550/postImage/33_sxosbj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712549/postImage/1_aqebki.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712549/postImage/36_iuq0ji.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712549/postImage/30_xqlwpi.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712548/postImage/29_yvfzqz.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712548/postImage/31_ruxdci.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712547/postImage/19_y56qxz.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712547/postImage/3_dznywh.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712546/postImage/34_gxrffj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712546/postImage/25_nwgtbj.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712545/postImage/21_so75pl.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712545/postImage/23_p4kz0h.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712545/postImage/14_unuzah.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712545/postImage/32_laqzjs.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712545/postImage/24_cvlm5g.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712544/postImage/20_cj0lhb.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712544/postImage/12_j672p4.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712543/postImage/11_ccfcbs.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712543/postImage/13_nakviq.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712543/postImage/10_kfe4bg.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712543/postImage/15_oqrgjx.jpg",
    "https://res.cloudinary.com/da0yv4czf/image/upload/v1636712543/postImage/17_oxw1eu.jpg"
];

const getUserId = () => Math.floor(Math.random() * (USER_COUNT - 1));
const getPostImageURL = (index) => postImageURL[index]
const getDescription = (index) => `Post with id: ${index}.`

const getPost = (index) => {
    return user = {
        _id: index,
        user_id: getUserId(),
        imagePostURL: getPostImageURL(index),
        description: getDescription(index)
    };
};

module.exports = Array.from({length: POST_COUNT},(_, index) => getPost(index + 1));