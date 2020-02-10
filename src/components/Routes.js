import SignIn from "./SignIn";
import Register from "./Register";
import Map from "./Map";
import App from "./../App";
import Kharid from "./Kharid";
import Pardakht from "./Pardakht";
import One from "./One";
import Footer from "./Footer";
import Search from "./Search";
import Two from "./Two";
import Three from "./Three";
const Routes=[
    {
        exact:true,
        path:'/',
        component:App

    },
    {
        path: '/map',
        component:Map
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/signIn',
        component:SignIn
    },

    {
        path:"/kharid",
        component:Kharid
    },
    {
        path:"/pardakht",
        component:Pardakht
    },
    {
        path:"/one",
        component:One
    },
    {
      path:"/two",
      component:Two
    },
    {

        path:"/three",
        component:Three

    },
    {
        path:"/footer",
        component:Footer
    },
    {
        path:'/search',
        component:Search
    }
]
export default Routes