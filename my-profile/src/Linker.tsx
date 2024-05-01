import logoWhite from './assets/logoW.svg'
import logoGreen from './assets/logoW.svg'
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