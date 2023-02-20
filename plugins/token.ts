export default defineNuxtPlugin (teste =>{
    //console.log(process)
    //console.log(teste)
    if (process.server) return;
    console.log("passou pelo server")

    return {provide:{msg: "injetou"}}
})