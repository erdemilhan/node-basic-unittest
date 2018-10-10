
function LoginController(){

    function isValidUserIdAsync(userIdList, userId, callback){

        setTimeout(function(){
            callback(userIdList.indexOf(userId) >= 0)
        },1);
    }

    return{
        isValidUserIdAsync
    }
}


module.exports = LoginController();