export { }
declare global {
    interface Window { 
        addWorker: HTMLDialogElement,
        login: HTMLDialogElement,
        FBRegister: HTMLDialogElement,
        errorReload: HTMLDialogElement,
        completeProfile: HTMLDialogElement,
        basicLoading: HTMLDialogElement,
    }
}