export function ProductSliderArrowLeft({ prevSlide }: { prevSlide: () => void }) {

    return (
        <div className="flex items-center bg-white mb-[6px]">
            <div onClick={prevSlide} className="w-[2.1712rem] h-[4.09rem] shadow flex cursor-pointer items-center justify-center">
                <LeftArrow />
            </div>
        </div>
    )
}

export function ProductSliderArrowRight({ nextSlide }: { nextSlide: () => void }) {

    return (
        <div className="flex items-center bg-white mb-[6px]">
            <div onClick={nextSlide} className="w-[2.1712rem] h-[4.09rem] shadow flex cursor-pointer items-center justify-center">
                <RightArrow />
            </div>
        </div>
    )
}





function LeftArrow() {
    return (
        <svg viewBox="0 0 24 24" fill="#6b6b6b" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
            <path xmlns="http://www.w3.org/2000/svg" d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"></path>
        </svg>
    )
}

function RightArrow() {
    return (
        <svg viewBox="0 0 24 24" fill="#6b6b6b" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg"><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"></polygon></svg>
    )
}