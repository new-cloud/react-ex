let obj = {
        storeVal: 'sssss',
        storeNum: 0
    };
export function dataReducer(state=obj.storeNum,action){  //第一个参数为什么不能是对象?
    switch(action.type){
        case 'add':
            return state + (action.data || 1);
        default:
            return state;
    }
}