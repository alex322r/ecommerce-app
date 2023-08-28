export default function ModalCloseButton({ className, closeLoginModal }: { className: string, closeLoginModal: () => void }) {
    return (
        <button onClick={closeLoginModal} className={className} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17" width="16" height="16"><path d="M1.4082 0.5L8.50064 7.59107L15.5903 0.500048L16.5 1.4097L9.40893 8.49936L16.5 15.5918L15.5902 16.5L8.50064 9.40899L1.40827 16.5L0.5 15.5917L7.59101 8.49936L0.500048 1.40976L1.4082 0.5Z" fill="currentColor"></path></svg>
        </button>
    )
}