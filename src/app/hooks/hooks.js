function useToken(){
    let token = localStorage.getItem("token")
    return token
}

export {useToken}