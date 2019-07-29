import {
    goodsBrand,
    goodsGirls,
    goodsGood,
    goodsMan,
    Home,
    Login,
    User
} from "@views";


export const layoutRouteComponent=[
    {
        path:"/home",
        meta:{},
        component:Home,
        name:"首页",
        key:"/home"
    },
    {
        path:"/goods",
        meta:{},
        name:"商品管理",
        key:"/goods",
        children:[
            {
                path:"/goods/brand",
                meta:{},
                component:goodsBrand,
                name:"品牌列表",
                key:"/goods/brand"
            },
            {
                path:"/goods/good",
                meta:{},
                component:goodsGood,
                name:"商品列表",
                key:"/goods/good"
            },
            {
                path:"/goods/girls",
                meta:{},
                component:goodsGirls,
                name:"女装列表",
                key:"/goods/girls"
            },
            {
                path:"/goods/man",
                meta:{},
                component:goodsMan,
                name:"男装列表",
                key:"/goods/man"
            }
        ]
    },
    {
        path:"/user",
        meta:{},
        component:User,
        name:"用户管理",
        key:"/user"
    },
    
]

export const noLayoutRouteComponent=[
    {
        path:"/login",
        meta:{},
        component:Login,
        name:"登录",
        key:"/login"
    }
]