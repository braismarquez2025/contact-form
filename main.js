const checkboxs = document.querySelectorAll(".checkbox-custom");
const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener("click", () => {
        const checkImg = option.querySelector(".check");
        console.log(checkImg);

        checkImg.classList.toggle("hidden");

        if (!checkImg.classList.contains("hidden")) {
            option.style.backgroundColor = "#E0F1E8";    
        } else {
            option.style.backgroundColor = "";
        }
    })
})


const checkbox = document.querySelector(".checkbox");
const check = document.querySelector(".checkImg");

checkbox.addEventListener("click", () => {
    check.classList.toggle("hidden");
})

let primer_input = document.querySelector(".primer_input");
let submit = document.querySelector(".submit");
let error = document.querySelector(".error");
const form = document.querySelector(".formulario");

const checks = document.querySelectorAll(".check");

const error_tipo = document.querySelector(".error_tipo");
const error_check = document.querySelector(".error_check");
const terminos = document.querySelector(".terminos");
const mensaje = document.querySelector(".message");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valido = true;
    let contador = 0;

    const campos_texto = ["first_name", "last_name", "email", "mensaje"];
    
    campos_texto.forEach(name => {
        const input = form.querySelector(`[name="${name}"]`);
        const error = input?.nextElementSibling;
    
        //Comprobamos los campos tipo texto
        if (input.value.trim() === "") {
            error.textContent = "This field is required";
            input.style.border = "1px solid #D73C3C";
            valido = false;
        }
    })

        //Comprobamos los dos checkbox anteriores al textarea
        checks.forEach(check => {
            if (check.classList.contains("hidden")) {
                contador += 1;
            }
        })
        if (contador === checks.length) {
            error_tipo.textContent = "Please select a query type";

            valido = false;
        }

        // Comprobamos el checkbox del final
        if (check.classList.contains("hidden")) {
            error_check.textContent = "To submit this form, please consent to being contacted";
            terminos.style.marginBottom = "10px";
            error_check.style.marginBottom = "40px";
            valido = false;
        }


    
        if (valido) {
            mensaje.style.display = "block";
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                form.submit();
              }, 2000);
        } 
})

