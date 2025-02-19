export function initializeLoginFunctionality(setIsSignUpMode, containerRef) {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");

    sign_up_btn.addEventListener("click", () => {
        setIsSignUpMode(true);
    });

    sign_in_btn.addEventListener("click", () => {
        setIsSignUpMode(false);
    });

    sign_up_btn2.addEventListener("click", () => {
        setIsSignUpMode(true);
    });

    sign_in_btn2.addEventListener("click", () => {
        setIsSignUpMode(false);
    });

    // Aquí puedes usar containerRef.current para manipular el contenedor
}