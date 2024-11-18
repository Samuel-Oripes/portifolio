const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const textarea = document.querySelector("#textarea-footer")
const enviar = document.querySelector(".enviar-mensagem")
const footer = document.querySelector("#footer")
const form = document.querySelector(".form")

const animacaoScroll = new IntersectionObserver( (dados) => {

    dados.forEach((dado) => {

        if(dado.isIntersecting === true){

            setTimeout(()=>{
                
                input1.style.visibility = "visible"
                input1.style.right = "0px"
            }, 400);
    
            setTimeout(()=>{
                input2.style.visibility = "visible"
                input2.style.right = "0px"
            }, 700);
    
            setTimeout(()=>{
                textarea.style.visibility = "visible"
                textarea.style.right = "0px"
            }, 1000);
            setTimeout(()=>{
                enviar.style.visibility = "visible"
                enviar.style.right = "0px"
            }, 1300);
        }
    })
})

animacaoScroll.observe(footer)

const nav = document.querySelector(".nav")
const html = document.querySelector("#html")
const css = document.querySelector("#css")
const js = document.querySelector("#js")
const resp = document.querySelector("#resp")

const textoCss = ['CSS']
const textoHtml = ['HTML']
const textoJs = ['JavaScript']
const textoResp = ['Responsividade']

const digitarTecnologias = new IntersectionObserver( (dados) => {

    dados.forEach((dado) => {

        if(dado.isIntersecting === true){

            if(verificador === true){

                html.style.borderRight = "3px solid hsl(0, 0%, 100%)"

                const digitarHtml = () => {
                    currentMessage1 = textoHtml[messageIndex1]
                    currentCharacters1 = currentMessage1.slice(0, characterIndex1++)
                    html.textContent = currentCharacters1
                }
                setInterval(digitarHtml, 100)
    
                const borderHtml = () => {
                    html.style.border = "none"
                }
                setTimeout(borderHtml, 900)
    
                setTimeout(() => {
    
                    css.style.borderRight = "3px solid hsl(0, 0%, 100%)"
    
                    const digitarCss = () => {
                        currentMessage2 = textoCss[messageIndex2]
                        currentCharacters2 = currentMessage2.slice(0, characterIndex2++)
                        css.textContent = currentCharacters2
                    }
                    setInterval(digitarCss, 100)
                }, 900);
                
                const borderCss = () => {
                    css.style.border = "none"
                }
                setTimeout(borderCss, 1700)
    
                setTimeout(() => {
    
                    js.style.borderRight = "3px solid hsl(0, 0%, 100%)"
    
                    const digitarJs = () => {
                        currentMessage3 = textoJs[messageIndex3]
                        currentCharacters3 = currentMessage3.slice(0, characterIndex3++)
                        js.textContent = currentCharacters3
                    }
                    setInterval(digitarJs, 100)
                }, 1700);
                
                const borderJs = () => {
                    js.style.border = "none"
                }
                setTimeout(borderJs, 3200)
    
                setTimeout(() => {
    
                    resp.style.borderRight = "3px solid hsl(0, 0%, 100%)"
    
                    const digitarResp = () => {
                        currentMessage4 = textoResp[messageIndex4]
                        currentCharacters4 = currentMessage4.slice(0, characterIndex4++)
                        resp.textContent = currentCharacters4
                    }
                    setInterval(digitarResp, 100)
                }, 3200);
                
                const borderResp = () => {
                    resp.style.border = "none"
                }
                setTimeout(borderResp, 5100)
    
                verificador = false
            }
        }
    })

})

let verificador = true

let messageIndex1 = 0
let characterIndex1 = 0
let currentMessage1 = ""
let currentCharacters1 = ""

let messageIndex2 = 0
let characterIndex2 = 0
let currentMessage2 = ""
let currentCharacters2 = ""

let messageIndex3 = 0
let characterIndex3 = 0
let currentMessage3 = ""
let currentCharacters3 = ""

let messageIndex4 = 0
let characterIndex4 = 0
let currentMessage4 = ""
let currentCharacters4 = ""

digitarTecnologias.observe(nav)