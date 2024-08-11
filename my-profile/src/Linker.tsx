import logoWhite from './assets/logoW.svg'
import logoGreen from './assets/logoG.svg'
import logoCsea from './assets/CSEA.svg'
import me from './assets/me.jpg'
import noPage from './assets/404.svg'



const Linker = {
    Logo : {
        white: {
            component: 'Logo',
            path: logoWhite
        },
        green:  {
            component: 'Logo',
            path: logoGreen
        },
        csea: {
            component: 'Logo',
            path: logoCsea
        }
    },
    Me: {
        component: 'Me',
        path: me
    },
    NoPage: {
        component: 'NoPage',
        path: noPage
    }
};

export default Linker