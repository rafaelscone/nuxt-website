export default defineNuxtPlugin (() => {
    function validate(param: any){
        
        return new Promise<string>((resolve, reject) => {
            if(param ===1){
                resolve("resolveu a promisse");
            }
            reject("falhou na promisse");
        })
    }

    return { provide: { validate } }
})