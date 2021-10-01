var rpxToViewport = require('postcss-rpx-to-viewport');
    
module.exports={
    lintOnSave:true,
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    rpxToViewport({
                        targetUnit: 'rpx',    // (String) need convert
                        outputUnit: 'vw',     // (String) convert to
                        layoutWidth: 750,     // (Number) design draft width
                        unitPrecision: 5,     // (Number) the decimal numbers
                        mediaQuery: false     // (Boolean) convert the unit inside @media(*)
                    })
                ]
            }
        }
    }
}